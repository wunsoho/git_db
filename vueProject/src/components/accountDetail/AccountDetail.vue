<template>
    <div style="width:40vw;">
        <!-- 해당 계좌의 총 잔액 -->
        
        <div style="margin-top:8vh;">
            <img class="title-bank-icon" src="@/assets/농협.png" style="margin-right:6vw; margin-left:3vw">
            <div id="content-total">
                <div style="font-size:2vh">{{accountInfo.kind}} {{accountInfo.accountNum}}</div>
                <div class="title block-title content-block-title">{{accountInfo.money}}</div>
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
                    <div v-if="content.money > 0" class="detail-info content-money"  style="color:#058B3B; ">+{{content.money}}원</div>
                    <div  v-if="content.money == 0" class="detail-info content-money" style="color:#616161(145, 145, 145);">{{content.money}}원</div>
                    <div  v-if="content.money < 0" class="detail-info content-money" style="color:#c80000;">{{content.money}}원</div>
                </div>
            </div>
        </div>
        <div style="width:40vw; height: 10vh;">
            <div class="title add-btn" @click="openAddContentPopup()">+ 내용 추가하기</div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'

    export default{ 
        name:'accountDetailCom',
        components:{
        },
        setup(){
            var store = useStore()
            var accountInfo = {
                kind:'농협',
                accountNum:'817016-51-003893',
                money:'900,000'
            }
            var contentList = ref([
                {
                    id:1,
                    date:'2023-05-05',
                    content:'초콜릿 구매',
                    money:-2000,
                    check : false
                },
                {
                    id:2,
                    date:'2023-05-04',
                    content:'초콜릿 구매',
                    money:-2000,
                    check : false
                },
                {
                    id:3,
                    date:'2023-05-03',
                    content:'용돈',
                    money:300000,
                    check : false
                },
                {
                    id:4,
                    date:'2023-05-02',
                    content:'알바비',
                    money:600000,
                    check : false
                },
            ])

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
                console.log(selected_List.value)
            }

            function deleteContent(){
      
            }

            function editContent(){
                if(selected_List.value.length > 1) {
                    alert('하나만 선택하세요')
                }
            }
            function openAddContentPopup(){
                store.commit('openAddContent')
            }
            return{
                contentList,
                accountInfo,
                clickContent,
                selected_List,
                editContent,
                openAddContentPopup
          
            }
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