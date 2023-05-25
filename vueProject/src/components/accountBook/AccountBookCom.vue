<template>
    <div>
        <div>
            <div>
                <div class="title">이정원님의 총 자산</div>
            </div>
            <!-- 총 계좌정보 -->
            <div class="block" style="margin-bottom:12vh">
                <div style="text-align: center;">
                    <div id="total-money" class="title block-title">1,100,500</div>
                    <div id="원" class="title block-title">원</div>
                </div>
            </div>
            <!-- 계좌 정보 -->
            <div class="block1" v-for="account, i in accountList" >
                <img :src="require(`@/assets/${account.image}`)" />
                <div class="detail-info" id="account-kind">{{account.kind}}</div>
                <div class="detail-info" id="account-acc">{{account.acc}}</div>
                <div class="detail-info account-cash" style="font-size: 25px;">{{account.cash}}</div>
                <div id="원" class="title block1-title">원</div>
            </div>
                
        </div>
        <div class="title add-btn" @click="openAddContentPopup()">+계좌 추가하기</div>
    </div>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'

    export default{ 
        name:'accountBookCom',
        components:{
        },
        setup(){
            var store = useStore()
            var accountList = ref([
            {
                id:1,
                kind : '농협',
                acc: '352-0932-2852-43',
                cash: 20000,
                check: false,
                image: 'NH.png'
                
            }, 
            {
                id:2,
                kind : '카카오뱅크',
                acc: '3333-089-7890-32',
                cash: 20000,
                check: false,
                image: 'KaKao.png'
            },
            {
                id:3,
                kind : '국민은행',
                acc: '950002-00-78904',
                cash: 20000,
                check: false,
                image: 'KB.png'
            }
        ])

        var selected_List = ref([])

        function openAddContentPopup(){
                store.commit('openAddContent')
            }

            return{
              accountList,
              selected_List,
              openAddContentPopup
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
    margin-left:7vw;

}
.block1 > img {
    margin-top:1vh;
    margin-left:2vw;
    float:left;
    width:60px; 
    height:60px;
}
.block1{
    width:40vw; 
    height:13vh;
    border-radius: 1vh; 
    background-color: #E7E7E7;
    margin-top:3vh;
    margin-left:1vw;

}
.detail-info{
    display:inline-block;
    line-height: 3vh;
    height: 5vh; 
    font-size:1.8vh;
    font-weight: 600;
}
.account-cash{
    width:8vw; 
    text-align: right;
    font-size:3vh;
}
#account-acc{
    width:19vw;
    margin-left:1vw;
}
#account-kind{
    color:#616161; 
    margin-left:3vw;
    text-align:right;   
}
.add-btn{
    float:right; 
    color:#146390;
    margin-right: 30vw;
}
.add-btn:hover{
    cursor: pointer;
}
</style>