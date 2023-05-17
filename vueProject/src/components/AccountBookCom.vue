<template>
    <div>
        <div>
            <div style="margin-left:30vw" >
                <div class="title">이정원님의 총 자산</div>
            </div>
                <div class="block">
                    <div style="text-align: center;">
                        <div id="total-money" class="title block-title">1,100,500</div>
                        <div id="원" class="title block-title">원</div>
                    </div>
                    <div v-for="account, i in accountList" >
                        <div :class="{'block': account.check==false}">
                        <div class="detail-info" id="account-kind">{{account.kind}}</div>
                        <div class="detail-info" id="account-acc">{{account.acc}}</div>
                        <div v-if="account.cash > 0" class="detail-info account-cash">{{account.cash}}</div>
                    <div id="원" class="title block1-title">원</div>
                </div>
                </div>
                </div>
                </div>
            </div>
            <div class="title add">+계좌 추가하기</div>
</template>

<script>
import {ref} from 'vue'

    export default{ 
        name:'accountBookCom',
        components:{
        },
        setup(){
            var accountList = ref([
            {
                id:1,
                kind : '농협',
                acc: '352-0932-2852-43',
                cash: 20000,
                check: false
                
            }, 
            {
                id:2,
                kind : '카카오뱅크',
                acc: '3333-089-7890-32',
                cash: 20000,
                check: false
            },
            {
                id:3,
                kind : '국민은행',
                acc: '950002-00-78904',
                cash: 20000,
                check: false
            }
        ])

        var selected_List = ref([])

            return{
              accountList,
              selected_List
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
    margin-left:30vw;
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
.block1{
    width:40vw; 
    height:13vh;
    border-radius: 1vh; 
    background-color: #E7E7E7;
    margin-top:10vh;
    margin-left:30vw;
}
.block2{
    width:40vw; 
    height:13vh;
    border-radius: 1vh; 
    background-color: #E7E7E7;
    margin-top:3vh;
    margin-left:30vw;
}
.block3{
    width:40vw; 
    height:13vh;
    border-radius: 1vh; 
    background-color: #E7E7E7;
    margin-top:3vh;
    margin-left:30vw;
}
.detail-info{
    display:inline-block;
    line-height: 5vh;
    height: 5vh; 
    font-size:1.8vh;
    font-weight: 600;
}
#account-block{
    height:5vh; 
    width:38vw; 
    margin-top:1vh; 
    border:1px solid #A8A8A8;
    border-radius: 1vh;
}
.account-cash{
    width:15vw; 
    text-align: right;
}
#account-acc{
    margin-left:2vw;
    width:19vw;
}
#account-kind{
    color:#616161; 
    width:6vw; 
    margin-left:1vw
}
.add {
    float:right;
    color:#146390;
    margin-right:30vw;
    margin-top:60vh;
}
</style>