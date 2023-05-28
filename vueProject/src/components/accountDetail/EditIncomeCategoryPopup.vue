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
                        <div :class="{'block popup-kind-block': content.check==false,'click-block':content.check==true}" @click="clickContent(content,i)">
                            <div class="detail-info kind-content">{{content.kind}}</div>
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

    export default{ 
        name:'accountDetailCom',
        components:{
        },
        setup(){
            var contentList = [
                {kind:'여가활동', check:false},
                {kind:'간식', check:false},
                {kind:'음식점', check:false},
                {kind:'약', check:false},
            ]
            var store = useStore()
            function closeDetailAddPopup(){
                store.commit('closeEditCategory')
            }
            function clickOk(){
                console.log(contentList ,'저장')
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
            var incomeAddContent = ref('')
            function completeAddCategory(){
                if(incomeAddContent.value == ''){

                }
                else{
                    contentList.push({kind:incomeAddContent.value, check:false})
                    incomeAddContent.value=''
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
                incomeAddContent
            }
        }
    }


</script>

<style>
</style>