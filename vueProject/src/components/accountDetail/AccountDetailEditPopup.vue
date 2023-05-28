<template>
    <div class="popup-back">
        <div class="block popup-box">
            <!-- 팝업 머리 -->
            <div class="blue-title">내용 추가하기 
                <button class="blue-title del-btn" style="float:right" @click="closeDetailEditPopup()">X</button>
            </div>

            <!-- 날짜 선택란 -->
            <div>
                <div class="title input-title" style="margin-top:10vh">날짜 선택</div>
                <input type="date" v-model="date_" class="popup-input">
            </div>
            <!-- 카테고리 선택란 -->
            <div>
                <div class="title input-title"  style="float:left">내용입력</div>
                <!-- 수입 지출 라디오버튼 -->
                <div style="margin-top:2vh; clear:both" >
                    <input type="radio" name="chk_info" v-model="kind" value="income" checked @change="selectKind()">수입
                    <input type="radio" name="chk_info" v-model="kind" value="expend" style="margin-left:2vw">지출
                </div>
                <select :v-model="selectetIncome" class="select-popup popup-input" style="width:23vw; height:4.5vh">
                    <option v-for="item in selectList" :key="item" :value="item" style="float:left">{{ item }}</option>
                    <button style="float:right">X</button>
                </select>
            </div>
            <!-- 금액 입력란 -->
            <div>
                <div class="title input-title" >금액입력</div><br>
                
                <!-- 입력칸 -->
                <input class="popup-input popup-input-white" v-model="money" style="width:18vw; display: inline-block;">
                <div class="title" style="display: inline-block; margin-left:1vw; margin-top:1vh; font-size:2vh">원</div>
            </div>
            <button class="ok-btn" @click="clickOk()">확인</button>
        </div>
    </div>
</template>

<script>
import {ref, computed} from 'vue'
import { useStore } from 'vuex';

    export default{ 
        name:'accountDetailCom',
        components:{
        },
        setup(){
            // 수입인지 지출인지
            var kind = ref('income') 

            var selectList =[]
            
            var store = useStore()
            var preList = computed(()=>store.state.editList)
            console.log('수정 내용', preList.value)

            var date_ = ref(preList.value.date)
            var money = ref(preList.value.money)
            var selectetIncome = ref(preList.value.content);
            
            function closeDetailEditPopup(){
                store.commit('closeEditContent')
            }
            function clickOk(){
                var list = {
                    id:-1,
                    date:date_.value,
                    content:selectetIncome.value,
                    money:money.value,
                    check : false
                }
                closeDetailEditPopup()
            }

            return{
                closeDetailEditPopup,
                selectetIncome,
                selectList,
                date_,
                money,
                clickOk,
                kind
            }
        }
    }


</script>

<style>
</style>