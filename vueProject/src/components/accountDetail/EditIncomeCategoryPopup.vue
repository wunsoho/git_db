<template>
    <div class="popup-back">
        <div class="block popup-box">
            <!-- 팝업 머리 -->
            <div class="blue-title">수입 카테고리 수정 
                <button class="blue-title del-btn" style="float:right" @click="closeDetailAddPopup()">X</button>
            </div>
            <!-- 버튼 -->
            <div style="margin-top:8vh">
                <button class="btn" @click="deleteContent()">삭제</button>
            </div>
            <div style="margin-top:10vh; padding:2vh 1vw;">
                <div style="width:23vw;height: 40vh;  overflow:auto">
                    <div v-for="content in contentList" >
                        <div class="block popup-kind-block" @click="clickContent(content,i)">
                            <div class="detail-info kind-content">{{content.in_category}}</div>
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
            var incomeAddContent = ref('')
            var addIncomeAddcontent = ref([])
            async function get_kindList(){
                await axios.get("/api/users/getIncomeKind").then(res => {
                    contentList.value = res.data
                    console.log(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                })
            }

            async function set_kindList(){
                for (var i =0; i<addIncomeAddcontent.value.length; i++){
                    await axios.post("/api/users/setIncomeKind",addIncomeAddcontent.value[i]).then(res => {
                        console.log('아아아앙',addIncomeAddcontent.value)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                    })
                }
             
            }
            get_kindList()
            var store = useStore()
            
            function closeDetailAddPopup(){
                store.commit('closeEditCategory')
            }
            function clickOk(){
                console.log(contentList ,'저장')
                set_kindList()
                closeDetailAddPopup()
            }

            var addInput = ref(false)
            console.log(addInput)
            function addCategory(){
                addInput.value = true
            }
            function deleteContent(){
                alert('삭제하시겠습니까')
            }
            
            function completeAddCategory(){
                if(incomeAddContent.value == ''){

                }
                else{
                    contentList.value.push({in_category:incomeAddContent.value})
                    addIncomeAddcontent.value.push({in_category:incomeAddContent.value})
                    incomeAddContent.value = ''
                    console.log(contentList.value)
                }
                
                addInput.value=false
            }
            return{
                clickOk,
                closeDetailAddPopup,
                contentList,
                addInput,
                addCategory,
                completeAddCategory,
                incomeAddContent,
                addIncomeAddcontent
            }
        }
    }


</script>

<style>
</style>