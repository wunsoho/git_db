

var express = require('express');
var router = express.Router();

//추가한 부분
var mysql = require('mysql');

// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',   
  password: 'joung153@',
  database: 'account'  
});  

// Connect
connection.connect(function (err) {   
  if (err) {     
    console.error('mysql connection error');     
    console.error(err);     
    throw err;   
  } 
});

//총 잔액을 가져오는 API
router.get('/getTotalMoney', function (req,res){
  console.log('서버에서 보내는 총 돈')
  connection.query('SELECT sum(COALESCE((SELECT SUM(in_money) FROM Income WHERE account_id = Accounts.account_id), 0) - COALESCE((SELECT SUM(ex_money) FROM Expenditure WHERE account_id = Accounts.account_id), 0)) AS total_money FROM Accounts;', function (err, account_money){
    if (err) throw err;
    res.send(account_money)
  })
})


//계좌별 계좌번호, 은행사, 잔액을 가져오는 API
router.get('/getTotalAccount', function (req, res) {
  var accountList = [
  ]
  connection.query('SELECT * FROM accounts', function (err, rows) {
    if (err) throw err;
    for (var i =0; i< rows.length; i++){
      var account = {
        id : rows[i].account_id,
        kind :  rows[i].bank,
        acc: rows[i].account_num,
        money: 0,
        check: false,
        image: rows[i].bank+'.png'
      }

      connection.query('SELECT accounts.account_id, (SELECT SUM(in_money) FROM Income WHERE account_id = "' + rows[i].account_id + '") - (SELECT SUM(ex_money) FROM Expenditure WHERE account_id = "' +rows[i].account_id + '") AS account_money FROM accounts WHERE accounts.account_id = "' +rows[i].account_id + '"', function (err, account_money) {
        if (err) throw err;
        console.log(account_money.account_money)
        account.money = account_money    
      })
      accountList.push(account)
    }
    console.log('계좌정보',this.accountList)
    res.send(accountList);
  });
});

//계좌 하나에 대한 total money
router.get('/getAccountMoney/:id', function (req, res) {
  var id = req.params.id
  connection.query('SELECT accounts.account_id, (SELECT SUM(in_money) FROM Income WHERE account_id = "' + id + '") - (SELECT SUM(ex_money) FROM Expenditure WHERE account_id = "' + id + '") AS account_money FROM accounts WHERE accounts.account_id = "' +id + '"', function (err, rows) {
    if (err) throw err;
    res.send(rows);
  })
  
});

//계좌별 수입 합산
router.get('/getIncomAccountMoney', function (req, res) {
  connection.query('SELECT account_id, sum(in_money) AS in_sum FROM income GROUP BY account_id', function (err, rows) {
    if (err) throw err;
    console.log('수익',rows)
    res.send(rows);
  })
  
});
//계좌별 지출 합산
router.get('/getExpendAccountMoney', function (req, res) {
  connection.query('SELECT account_id, sum(ex_money) AS ex_sum FROM Expenditure GROUP BY account_id', function (err, rows) {
    if (err) throw err;
    console.log('지출',rows)
    res.send(rows);
  })
  
});

//한 계좌에 대한 지출 내역
router.get('/getExpendContent/:id', function (req, res) {
  var id = req.params.id
  console.log("id는!?" , id)
  connection.query('SELECT * FROM Expenditure WHERE account_id= "'+id+'" order by dates desc', function (err, rows) {
    if (err) throw err;
    console.log('지출내용',rows)
    res.send(rows);
  })
  
});

//한 계좌에 대한 수입 내역
router.get('/getIncomeContent/:id', function (req, res) {
  var id = req.params.id
  console.log("id는!?" , id)
  connection.query('SELECT * FROM income WHERE account_id= "'+id+'" order by dates desc', function (err, rows) {
    if (err) throw err;
    console.log('수익내용',rows)
    res.send(rows);
  })
  
});

//수입 종류 
router.get('/getIncomeKind', function (req, res) {
  connection.query('SELECT * FROM incomekind;', function (err, rows) {
    if (err) throw err;
    console.log('수익종류',rows)
    res.send(rows);
  })
  
});

//지출 종류 
router.get('/getExpendKind', function (req, res) {
  connection.query('SELECT * FROM expenditurekind;', function (err, rows) {
    if (err) throw err;
    console.log('지출종류',rows)
    res.send(rows);
  })
  
});

//월별 수입 카테고리별 총 금액
router.get('/getIncomePattern/:month', function (req, res) {
  var month = req.params.month
  connection.query('select substring(dates,6,2) as month, in_category, sum(in_money) as money from Income where substring(dates,6,2) =  "'+month+'" group by substring(dates,6,2), in_category;', function (err, rows) {
    if (err) throw err;
    res.send(rows);
  })
  
});
//월별 지출 카테고리별 총 금액
router.get('/getExpendPattern/:month', function (req, res) {
  var month = req.params.month
  connection.query('select substring(dates,6,2) as month, ex_category, sum(ex_money) as money from Expenditure where substring(dates,6,2) ="'+month+'" group by substring(dates,6,2), ex_category', function (err, rows) {
    if (err) throw err;
    res.send(rows);
  })
  
});

//계좌 추가
router.post('/setAccount', function (req, res) {
  console.log(req.body)
    const accountdata = {
      bank: req.body.bank,
      acc:req.body.acc,
      money: req.body.money,
      dates : req.body.dates
  }

  console.log('여기여기',accountdata.money)
  
  connection.query('insert into accounts(bank, account_num) values (?,?)',[accountdata.bank, accountdata.acc], function (err, row) {
    if (err) throw err;
  })
  
  connection.query('select * from accounts ORDER BY account_id DESC LIMIT 1', function (err, account) {
    if (err) throw err;
    connection.query('insert into Income(account_id, in_category, in_money, dates) values ('+account[0].account_id+', "기본잔금", '+accountdata.money+',"'+accountdata.dates+'")', function (err, row) {
      if (err) throw err;
    })
  })
});

//지출, 수입 내역 추가 
router.post('/setContent', function (req, res) {
  console.log('내용 데이터 전달',req.body)
    const accountdata = {
      account_id: req.body.account_id,
      dates:req.body.date,
      content: req.body.content,
      money : req.body.money,
      kind : req.body.kind
  }

  console.log('수입 지출 내역 입력',accountdata.bank)
  if (accountdata.kind =='expend'){
    connection.query('insert into Expenditure(account_id, ex_category, ex_money, dates) values (?,?,?,?)',[accountdata.account_id, accountdata.content,  accountdata.money, accountdata.dates], function (err, row) {
      if (err) throw err;
      console.log('수입 내용 입력 완료',accountdata )
    })
  }
  else {
    connection.query('insert into Income(account_id, in_category, in_money, dates) values (?,?,?,?)',[accountdata.account_id, accountdata.content,  accountdata.money, accountdata.dates], function (err, row) {
      if (err) throw err;
      console.log('지출 내용 입력 완료',accountdata )
    })
  }
});

//수입 종류 추가
router.post('/setIncomeKind', function (req, res) {
  console.log(req.body)
  var incomekind = req.body.in_category
  connection.query('insert into Incomekind(in_category) values (?)',[incomekind], function (err, row) {
    if (err) throw err;
  })
});

//지출 종류 추가
router.post('/setExpendKind', function (req, res) {
  console.log(req.body)
  var expendkind = req.body.ex_category
  connection.query('insert into expenditurekind(ex_category) values (?);',[expendkind], function (err, row) {
    if (err) throw err;
  })
});
module.exports = router;
