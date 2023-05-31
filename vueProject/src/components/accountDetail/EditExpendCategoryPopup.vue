<template>
    <div class="popup-back">
        <div class="block popup-box">
            <!-- 팝업 머리 -->
            <div class="blue-title">지출 카테고리 수정 
                <button class="blue-title del-btn" style="float:right" @click="closeDetailAddPopup()">X</button>
            </div>
            <!-- 버튼 -->
            <div style="margin-top:8vh">
                <button class="btn" @click="deleteContent()">삭제</button>
            </div>

            <div style="margin-top:10vh; padding:2vh 1vw;">
                <div style="width:23vw;height: 40vh;  overflow:auto">
                    <div v-for="content in contentList" >
                        <div :class="{'block popup-kind-block': content.check==false,'click-block':content.check==true}" @click="clickContent(content,i)">
                            <div class="detail-info kind-content">{{content.ex_category}}</div>
                        </div>
                    </div>
                    <div v-if="addInput==false" class="edit-category-add" @click="addCategory()">+ 내용 추가하기</div>
                    <input v-else-if="addInput==true" class = "block popup-kind-block" v-model="incomeAddContent" style="width:19.9vw" @keyup.enter="completeAddCategory()">
                </div>
            </div>
            <button class="ok-btn" style="margin-top:2vh" @click="clickOk()">확인</button>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import { useStore } from 'vuex';
import axios from 'axios'
    export default{ 
        name:'accountDetailCom',
        components:{
        },
        setup(){
            var contentList = ref([])
            var addIncomeAddcontent = ref([])
            async function set_kindList(){
                await axios.get("/api/users/getExpendKind").then(res => {
                    contentList.value = res.data
                    console.log('expendList',res.data)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                })
            }
            set_kindList()
           
            var store = useStore();

            //닫기 버튼 누를시
            function closeDetailAddPopup(){
                console.log('삭제')
                store.commit('closeEditCategory')
            }

            async function set_dkindList(){
                console.log('아아아앙',addIncomeAddcontent.value[0])
                for (var i =0; i<addIncomeAddcontent.value.length; i++){
                    await axios.post("/api/users/setExpendKind",addIncomeAddcontent.value[i]).then(res => {
                        console.log('아아아앙',addIncomeAddcontent.value)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                    })
                }
             
            }
            //확인 버튼 누를시
            function clickOk(){       
                console.log(contentList ,'저장')
                set_dkindList()
                closeDetailAddPopup()
            }

            //내용 추가

            //내용 추가하기 버튼 클릭시
            var addInput = ref(false)
            console.log(addInput.value)
            function addCategory(){
                addInput.value=true
            }

            //내용 입력후 엔터키 누를시 
            var incomeAddContent = ref('')
            function completeAddCategory(){
                if(incomeAddContent.value == ''){

                }
                else{
                    contentList.value.push({ex_category:incomeAddContent.value})
                    addIncomeAddcontent.value.push({ex_category:incomeAddContent.value})
                    incomeAddContent.value = ''
                }
                
                addInput.value=false
            }
            return{
                clickOk,
                closeDetailAddPopup,
                contentList,
                addCategory,
                completeAddCategory,
                addInput,
                incomeAddContent,
                addIncomeAddcontent,
                set_dkindList
            }
        }
    }


</script>

<style>

.popup-kind-block{
    border:1px solid #949494;
    height:3vh;
    width:inherit;
    margin-top:1vh;
    padding:0.2vh 2vw;
    padding-left:0;
}
.kind-content{
    font-size:1.5vh;
    width:21.9vw;
    height:3vh;
    line-height:3vh;
    color:#1f1f1f;
    font-weight: 600;
}
.edit-category-add{
    margin-top:2vh;
    font-weight: 900;
    color:#5F5F5F
}
.edit-category-add:hover{
    cursor:pointer;
}
</style>