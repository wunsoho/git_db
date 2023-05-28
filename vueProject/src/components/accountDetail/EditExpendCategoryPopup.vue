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
            ]
            var store = useStore();

            //닫기 버튼 누를시
            function closeDetailAddPopup(){
                console.log('삭제')
                store.commit('closeEditCategory')
            }

            //확인 버튼 누를시
            function clickOk(){       
                console.log(contentList ,'저장')
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
                    contentList.push({kind:incomeAddContent.value, check:false})
                    incomeAddContent.value=''
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
                incomeAddContent
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