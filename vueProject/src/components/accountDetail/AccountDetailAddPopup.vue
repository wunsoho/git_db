<template>
    <div class="popup-back">
        <div class="block popup-box">
            <div class="blue-title">내용 추가하기 <button class="blue-title del-btn" style="float:right" @click="closeDetailAddPopup()">X</button></div>

            <!-- 날짜 선택 -->
        <div>
            <div class="title input-title" style="margin-top:10vh">날짜 선택</div>
            <input type="date" class="popup-input">
        </div>
        <div>
            <div class="title input-title">내용입력</div>
            <input class="popup-input popup-input-white">
        </div>
        <div>
            <div class="title input-title">금액입력</div><br>
            <div style="margin-top:2vh">
                <input type="radio" name="chk_info" value="수입">수입
                <input type="radio" name="chk_info" value="지출" style="margin-left:2vw">지출
            </div>
            

            <input class="popup-input popup-input-white" style="width:18vw; display: inline-block;">
            <div class="title" style="display: inline-block; margin-left:1vw; margin-top:1vh; font-size:2vh">원</div>
        </div>
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
            var store = useStore()
            function closeDetailAddPopup(){
                store.commit('closeAddContent')
            }
            return{
                closeDetailAddPopup
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
    height:62vh;
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
</style>