<template>
    <div style="width:40vw;">
        <!-- 해당 계좌의 총 잔액 -->
        
        <div style="margin-top:8vh;">
            <img class="title-bank-icon" :src="imgPath" style="margin-right:6vw; margin-left:3vw">
            <div id="content-total">
                <div style="font-size:2vh">{{account.kind}} {{account.acc}}</div>
                <div class="title block-title content-block-title">{{account_money}}</div>
                <div class="title block-title content-block-title" style="margin-left:5vw">원</div>
            </div>
        </div>
        <!-- 버튼 -->
        <div id = "content-btn" style="clear:both">
            <button class="btn" @click="deleteContent()">삭제</button>
            <button class="btn" @click="editContent()">수정</button>
            <input type="month" style="border-radius: 0.4vh; background-color: #ffffff; border: 1px solid #A8A8A8; height:2.7vh ">
        </div>
        <div class="block content-block">
            <div v-for="content,i in contentList" >
                <div :class="{'block': content.check==false,'click-block':content.check==true}" id="content-block"  @click="clickContent(content,i)">
                    <div class="detail-info" id="content-date" style="">{{content.date}}</div>
                    <div class="detail-info" id="content-content" style="">{{content.content}}</div>
                    <div v-if="content.kind == 'income'" class="detail-info content-money"  style="color:#058B3B; ">+{{content.money}}원</div>
                    <div  v-if="content.money == 0" class="detail-info content-money" style="color:#616161(145, 145, 145);">{{content.money}}원</div>
                    <div  v-if="content.kind == 'expend'" class="detail-info content-money" style="color:#c80000;">-{{content.money}}원</div>
                </div>
            </div>
        </div>
        <div style="width:40vw; height: 10vh;">
            <div class="title add-btn" @click="openAddContentPopup()">+ 내용 추가하기</div>
        </div>
    </div>
</template>

<script>
import {ref,computed} from 'vue'
import {useStore} from 'vuex'
import axios from 'axios'

    export default{ 
        name:'accountDetailCom',
        components:{
        },
        setup(){
            var store = useStore()
            var account = computed(()=> store.state.account)
            var imgPath = require("@/assets/"+account.value.kind+".png")
            var contentList = ref([])
            var account_money=ref(0)
            var selected_List = ref([])

            function clickContent(content,index){
                console.log(contentList.value[index].check)
                for(var i=0; i<contentList.value.length; i++){
                    if(i==index){
                        if(contentList.value[i].check ==false){
                            contentList.value[i].check = true
                            selected_List.value.push(content)
                        }
                        else{
                            contentList.value[i].check  = false
                            selected_List.value.splice(i,1)
                        }
                        
                    }
                    
                }
            }

            function deleteContent(){
                var del_List = []
                for (var i=0; i < selected_List.value.length; i++){
                    del_List.push(selected_List.value[i].id)
                    
                }
                console.log(del_List)
                
            }

            function editContent(){
                if(selected_List.value.length > 1) {
                    alert('하나만 선택하세요')
                }
                else{
                    store.commit('openEditContent',selected_List.value[0])
                }
            }
            function openAddContentPopup(){
                store.commit('openAddContent')
            }
            console.log(account.value.id)
            async function get_Content(){
                var expendCotent = []
                var incomeCotent = []
                await axios.get("/api/users/getExpendContent/"+account.value.id).then(res => {
                    expendCotent = res.data
                    console.log('총 지출 내역',res.data)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                })

                await axios.get("/api/users/getIncomeContent/"+account.value.id).then(res => {
                    incomeCotent = res.data
                    console.log('총 수익 내역',res.data)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                })

                for (var i =0; i<incomeCotent.length; i++){
                    contentList.value.push(
                        {
                            id:incomeCotent[i].income_id,
                            date:incomeCotent[i].dates.slice(0, -14),
                            content:incomeCotent[i].in_category,
                            money:incomeCotent[i].in_money,
                            kind:'income',
                            check : false
                        }
                    )    
                }



                for (var i =0; i<expendCotent.length; i++){
                    contentList.value.push(
                        {
                            id:expendCotent[i].expen_id,
                            date:expendCotent[i].dates.slice(0, -14),
                            content:expendCotent[i].ex_category,
                            money:expendCotent[i].ex_money,
                            kind:'expend',
                            check : false
                        }
                    )    
                }

                contentList.value = contentList.value.sort(date_descending)
                console.log(contentList.value)


            }

            async function get_account_money(){
                await axios.get("/api/users/getAccountMoney/"+account.value.id).then(res => {
                    console.log('계좌 돈',res.data)
                    account_money.value = res.data[0].account_money
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                })

            }
            get_account_money()
            function date_descending(a,b){
                var dateA = new Date(a['dates']).getTime();
                var dateB = new Date(b['dates']).getTime();
                return dateA < dateB ? 1: -1;
            }
            return{
                contentList,
                account,
                clickContent,
                selected_List,
                editContent,
                openAddContentPopup,
                imgPath,
                deleteContent,
                get_Content,
                get_account_money,
                account_money
          
            }
        },
        created(){
            this.get_Content()
        }
    }


</script>

<style>
#content-total{
    width:40vw; 
    height: 12vh;
}
.content-block{
    height:50vh; 
    width:38vw; 
    margin-top:0; 
    padding:1vh 1vw; 
    clear:both
}
.title-bank-icon{
    width:5vw;
    height:9.5vh;
    float:left;
}
.content-money{
    width:9vw; 
    text-align: right;
}
#content-content{
    margin-left:2vw;
    width:19vw;
}
#content-date{
    color:#616161; 
    width:6vw; 
    margin-left:1vw
}
.detail-info{
    display:inline-block;
    line-height: 5vh;
    height: 5vh; 
    font-size:1.8vh;
    font-weight: 600;
}
.btn{
    float:right;
    width:3.5vw;
    height:3vh;
    margin-left:0.5vw;
    background-color:white;
    border:1px solid #A8A8A8;
    border-radius: 0.6vh;

}
.content-block-title{
    line-height:2vh
}
.btn:hover{
    cursor: pointer;
    background-color:#e1e1e1
}
.add-btn{
    color:#146390
}
.add-btn:hover{
    cursor: pointer;
}
#content-block{
    height:5vh; 
    width:38vw; 
    margin-top:1vh; 
    border:1px solid #A8A8A8;
    border-radius: 1vh;
}
.click-block{
    background-color:#f5f6f6;
}
#content-btn{
    width:40vw; 
    margin-top:4vh; 
    height: 4vh;
}
</style>