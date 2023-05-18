<template>
    <div class="popup-back">
        <div class="block popup-box">
            <!-- 팝업 머리 -->
            <div class="blue-title">내용 추가하기 
                <button class="blue-title del-btn" style="float:right" @click="closeDetailAddPopup()">X</button>
            </div>

            <!-- 날짜 선택란 -->
            <div>
                <div class="title input-title" style="margin-top:10vh">날짜 선택</div>
                <input type="date" class="popup-input">
            </div>
            <!-- 카테고리 선택란 -->
            <div>
                <div class="title input-title" style="float:left">내용입력</div>
                <img class="input-title edit-icon" style="float:left" src="@/assets/editBtn.png" @click="clickEdit()">
                <!-- 수입 지출 라디오버튼 -->
                <div style="margin-top:2vh; clear:both" >
                    <input type="radio" name="chk_info" v-model="kind" value="income" checked>수입
                    <input type="radio" name="chk_info" v-model="kind" value="expend" style="margin-left:2vw">지출
                </div>
                <select :v-model="selectetIncome" class="select-popup popup-input" style="width:23vw; height:4.5vh">
                    <option v-for="item in selectList" :key="item" :value="item" style="float:left">{{ item }}</option>
                    <button style="float:right">X</button>
                </select>
            </div>
            <!-- 금액 입력란 -->
            <div>
                <div class="title input-title">금액입력</div><br>
                
                <!-- 입력칸 -->
                <input class="popup-input popup-input-white" style="width:18vw; display: inline-block;">
                <div class="title" style="display: inline-block; margin-left:1vw; margin-top:1vh; font-size:2vh">원</div>
            </div>
            <button class="ok-btn" @click="clickOk()">확인</button>
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
            // 수입인지 지출인지
            var kind = ref('income') 

            var selectList =ref([
                '여가활동',
                '간식',
                '음식점',
                '약'
            ])

            var selectetIncome = selectList.value[0];
            var store = useStore()
            function closeDetailAddPopup(){
                store.commit('closeAddContent')
            }
            function clickOk(){
                closeDetailAddPopup()
            }
            function clickEdit(){
                store.commit('openEditCategory',kind.value)
            }
            return{
                closeDetailAddPopup,
                selectetIncome,
                selectList,
                clickEdit,
                clickOk,
                kind
            }
        }
    }


</script>

<style>
.blue-title{
    font-size:2.5vh;
    color: #146390;
    font-weight: 900;
}
.input-title{
    font-size:2vh;
    margin-top:5vh
}
.select-popup{
    width:50vw;
    display: inline-block;
}
.del-btn{
    background: none;
    border: none;
    font-size:2.2vh
}
.popup-back{
    width:100vw;
    height:100vh;
    background: rgba(79, 79, 79, 0.71);
}
.popup-box{
    width:24vw;
    height:65vh;
    margin:auto;
    margin-top:15vh;
    border-radius: 4vh;
    padding:4vh 3vw
}
.popup-input{
    display:block;
    margin-top:2vh;
    width:21vw;
    height:2.5vh;
    border-radius: 0.8vh;
    padding:1vh 1vw;
    background: #E9E9E9;
    border:none;
    font-size:1.5vh
}
.popup-input-white{
    background: white;
    border: 1px solid #949494;
}
.ok-btn{
    margin-top:6vh;
    float:right;
    width:6vw;
    height:4vh;
    border-radius: 1vh;
    border: none;
    background: #146390;
    color:white;
    font-weight: 900;
    font-size: 2vh;
}
.ok-btn:hover{
    cursor: pointer;
}
.edit-icon{
    width:1.7vw;
    height: 3vh;
    margin-left:0.5vw;
    display: inline-block;
    margin-top:4.5vh;
    margin-bottom:2vh
}
</style>