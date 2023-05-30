

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
  console.log(req.body)
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
        money: 900,
        check: false,
        image: rows[i].bank+'.png'
      }

      connection.query('SELECT accounts.account_id, (SELECT SUM(in_money) FROM Income WHERE account_id = "' + rows[i].account_id + '") - (SELECT SUM(ex_money) FROM Expenditure WHERE account_id = "' +rows[i].account_id + '") AS account_money FROM accounts WHERE accounts.account_id = "' +rows[i].account_id + '"', function (err, account_money) {
        if (err) throw err;
        console.log(account_money.account_money)
        account.money = account_money
        console.log(account.money)
      })
      accountList.push(account)
      console.log(accountList)
    }
    res.send(accountList);
  });

  

  
});

router.post('/setTotalAccount', function (req, res) {
    const accountdata = {
      'bank': req.body.bank,
      'acc':req.body.acc,
      'money': req.body.money,
      'img': req.body.img,
      'dates':'2023-05-30'
  }
  connection.query('insert into Accounts(bank, account_num) values ("'+ accountdata.bank, accountdata.acc +'")', function (err, row) {
    if (err) {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: 'Login failed please check your id or password!'
      })
    }

  })
  connection.query('insert into Income(account_id, in_category, in_money, dates) values ("'+ accountdata.id, accountdata.money, accountdata.dates+'")', function (err, row) {
    if (err) {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: 'Login failed please check your id or password!'
      })
    }

  })
});

module.exports = router;
