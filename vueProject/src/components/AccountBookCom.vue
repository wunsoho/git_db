<template>
    <div>
        <div>
            <div class="title">이정원님의 총 자산</div>
            <div class="block">
                <div style="text-align: center;">
                    <div id="total-money" class="title block-title">1,100,500</div>
                    <div id="원" class="title block-title">원</div>
                </div>
            </div>

            <div class="block1">
                <img src= "@/assets/NH.png">
                <div>
                    <div id="accountname" v-text= "accountname1" ></div>
                    <div id="account" v-text= "account1" ></div> <br> 
                    <div id="a-money" v-text= "money1" > </div> 
                    <div id="원" class="title block1-title">원</div>
                </div>
            </div>
            <div class="block2">
                <img src= "@/assets/KaKao.png">
                <div>
                    <div id="accountname" v-text= "accountname2"></div> 
                    <div id="account" v-text= "account2"></div> <br>
                    <div id="a-money" v-text= "money2"></div>
                    <div id="원" class="title block1-title">원</div>
                </div>
            </div>
            <div class="block3">
                <img src= "@/assets/KB.png">
                <div>
                    <div id="accountname" v-text= "accountname3"></div> 
                    <div id="account" v-text= "account3"></div> <br>
                    <div id="a-money" v-text= "money3"></div>
                    <div id="원" class="title block1-title">원</div>
                </div>
            </div>
            <div class="title add">+계좌 추가하기</div>
        </div>
    </div>
</template>

<script>

    export default{ 
        name:'accountBookCom',
        components:{
        },
        setup(){
            let accountname1 = '농협';
            let account1 = '352-0932-2852-43';
            let money1 = 20000;

            let accountname2 = '카카오뱅크';
            let account2 = '3333-089-7890-32';
            let money2 = 20000;

            let accountname3 = '국민은행';
            let account3 = '950002-00-78904';
            let money3 = 20000;




        {
            return{
                accountname1,
                account1,
                money1,
                accountname2,
                account2, 
                money2,
                accountname3,
                account3, 
                money3,
            }
        }
        }
    }


</script>

<style>
.title{
    font-size:2.5vh;
    font-weight: bolder;
    display:inline-block;
    margin-top:3vh
}

.block{
    width:40vw; 
    height:13vh;
    border-radius: 1vh; 
    background-color: #FFFFFF;
    margin-top:3vh;
}
.block-title{
    font-size:5vh;
    height:13vh;
    line-height: 6vh;
}
#total-money{
    color:#13005D
}
#원{
    margin-left:5vw;
}
.block1{
    width:40vw; 
    height:13vh;
    border-radius: 1vh; 
    background-color: #E7E7E7;
    margin-top:15vh;
}

img {
    margin-top:1vh;
    margin-left:5vw;
    float:left;
    width:70px; 
    height:70px;
}
#accountname {
    font-size:18px;
    height:1vh;
    line-height: 1vh;   
    margin-top:3vh;
    margin-left:3vw;
    display:inline-block;

}
#account {
    font-size:18px;
    height:1vh;
    line-height: 1vh;
    margin-top:3vh;
    margin-left:1vw;
    display:inline-block;

}
.block2{
    width:40vw; 
    height:13vh;
    border-radius: 1vh; 
    background-color: #E7E7E7;
    margin-top:3vh;
}
.block3{
    width:40vw; 
    height:13vh;
    border-radius: 1vh; 
    background-color: #E7E7E7;
    margin-top:3vh;
}
#a-money{
    font-size:4vh;
    height:1vh;
    line-height: 1vh;
    margin-top:3vh;
    margin-left:5vw;
    display:inline-block;
    
}   
.add {
    float:right;
    color:#146390;
    margin-right:30vw;
}
</style>