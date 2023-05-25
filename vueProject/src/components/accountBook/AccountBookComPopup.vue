<template>
    <div class="popup-back">
        <div class="block popup-box" id="accounBook-popup-box">
            <div class="blue-title">계좌 추가하기 <button class="blue-title del-btn" style="float:right" @click="closeDetailAddPopup()">X</button></div>

            <!-- 날짜 선택 -->
        <div>
            <div class="title input-title" style="margin-top:5vh">은행사 선택</div>
        </div>
        <div class="block2">
            <div style="width:5vw; float:left">
                <img src = "@/assets/농협.png" style="display:block;"> 
                <div>농협</div>
            </div>
            <div style="width:5vw; float:left">
                <img src = "@/assets/카카오뱅크.png" style="display:block;"> 
                <div>카카오뱅크</div>
            </div>
            <div style="width:5vw; float:left">
                <img src = "@/assets/기업.png" style="display:block;"> 
                <div>기업은행</div>
            </div>
            <div style="width:5vw; float:left">
                <img src = "@/assets/우리.png" style="display:block;"> 
                <div>우리은행</div>
            </div>
        </div>
        <div class="block2">
            <div style="width:5vw; float:left">
                <img src = "@/assets/국민.png" style="display:block;"> 
                <div>국민 은행</div>
            </div>
            <div style=" width:5vw; float:left">
                <img src = "@/assets/하나.png" style="display:block;"> 
                <div>하나은행</div>
            </div>
            <div style="width:5vw; float:left">
                <img src = "@/assets/신한.png" style="display:block;"> 
                <div>신한은행</div>
            </div>
            <div style="width:5vw; float:left">
                <img src = "@/assets/새마을.png" style="display:block;"> 
                <div>새마을금고</div>
            </div>
        </div>      
        <!-- <div class="block3" >
            <img src = "@/assets/우리.png"  style=" display:block;"> 우리은행
            <img src = "@/assets/하나.png"  style=" display:block;"> 하나은행
            <img src = "@/assets/신한.png"  style=" display:block;"> 신한은행
            <img src = "@/assets/새마을.png"  style=" display:block;"> 새마을금고
        </div> -->
        <div style="clear: both;">
            <div class="title input-title" >계좌번호 입력</div>
            <input class="popup-input popup-input-white">
        </div>
        <div>
            <div class="title input-title">잔고입력</div><br>
            <input class="popup-input popup-input-white" style="width:18vw; display: inline-block;">
            <div class="title" style="display: inline-block; margin-left:1vw; margin-top:1vh; font-size:2vh">원</div>
        </div>
        </div>
    </div>
</template>

<script>
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
                closeDetailAddPopup,
            }
        }
    }


</script>

<style>
.block2  img{
    width:3vw;
    margin-left:1vw;
}

.block2  div{
    text-align:center;
}

.block2 > div{
    margin-left:0.8vw;
    margin-top:3vh
}

</style>