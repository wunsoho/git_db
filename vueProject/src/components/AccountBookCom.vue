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
                    <div id="account" class="accountname">농협 352-0932-2852-43</div> <br>
                    <div id="a-money" class="title money">20,000</div>
                    <div id="원" class="title block1-title">원</div>
                </div>
            </div>
            <div class="block2">
                <img src= "@/assets/KaKao.png">
                <div>
                    <div id="account" class="accountname">카카오뱅크 3333-08-789-0456</div> <br>
                    <div id="a-money" class="title money">20,000</div>
                    <div id="원" class="title block1-title">원</div>
                </div>
            </div>
            <div class="block3">
                <img src= "@/assets/KB.png">
                <div>
                    <div id="account" class="accountname">국민은행 950002-00-12345</div> <br>
                    <div id="a-money" class="title money">20,000</div>
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
            return{}
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
.block1-title{
    font-size:3vh;
    height:13vh;
}
img {
    margin-top:1vh;
    margin-left:5vw;
    float:left;
    width:70px; 
    height:70px;
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
.money{
    font-size:4vh;
    height:1vh;
    line-height: 1vh;
    margin-left:3vw;
}
.accountname{
    font-size:2vh;
    height:1vh;
    line-height:7vh;
    margin-left:13vw;    
}
.add {
    float:right;
    color:#146390;
    margin-right:30vw;
}
</style>