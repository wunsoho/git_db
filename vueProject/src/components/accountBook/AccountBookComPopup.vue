<template>
    <div class="popup-back">
        <div class="block popup-box" id="accounBook-popup-box">
            <div class="blue-title">계좌 추가하기 <button class="blue-title del-btn" style="float:right" @click="closeDetailAddPopup()">X</button></div>

            <!-- 날짜 선택 -->
            <div>
                <div class="title input-title" style="margin-top:5vh">은행사 선택  <span style="color:#146390">{{ bank }}</span></div>
            </div>
            <div class="block2">
                <div style="width:5vw; float:left" @click="clickBank('농협은행')">
                    <img src = "@/assets/농협은행.png" style="display:block;"> 
                    <div>농협은행</div>
                </div>
                <div style="width:5vw; float:left" @click="clickBank('카카오뱅크')">
                    <img src = "@/assets/카카오뱅크.png" style="display:block;"> 
                    <div>카카오뱅크</div>
                </div>
                <div style="width:5vw; float:left" @click="clickBank('기업은행')">
                    <img src = "@/assets/기업은행.png" style="display:block;"> 
                    <div>기업은행</div>
                </div>
                <div style="width:5vw; float:left" @click="clickBank('우리은행')">
                    <img src = "@/assets/우리은행.png" style="display:block;"> 
                    <div>우리은행</div>
                </div>
            </div>
            <div class="block2">
                <div style="width:5vw; float:left" @click="clickBank('국민은행')">
                    <img src = "@/assets/국민은행.png" style="display:block;"> 
                    <div>국민은행</div>
                </div>
                <div style=" width:5vw; float:left" @click="clickBank('하나은행')">
                    <img src = "@/assets/하나은행.png" style="display:block;"> 
                    <div>하나은행</div>
                </div>
                <div style="width:5vw; float:left" @click="clickBank('신한은행')">
                    <img src = "@/assets/신한은행.png" style="display:block;"> 
                    <div>신한은행</div>
                </div>
                <div style="width:5vw; float:left" @click="clickBank('새마을금고')">
                    <img src = "@/assets/새마을금고.png" style="display:block;"> 
                    <div>새마을금고</div>
                </div>
            </div>   
             
            <div>
                <div class="title input-title" >계좌번호 입력</div>
                <input class="popup-input popup-input-white">
            </div>
            <div>
                <div class="title input-title">잔고입력</div><br>
                <input class="popup-input popup-input-white" style="width:18vw; display: inline-block;">
                <div class="title" style="display: inline-block; margin-left:1vw; margin-top:1vh; font-size:2vh">원</div>
            </div>
            <button class="ok-btn" @click="clickOk()">확인</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import {ref} from 'vue';
    export default{ 
        name:'accountDetailCom',
        components:{
        },
        setup(){
            var bank = ref('')
            var store = useStore()
            function closeDetailAddPopup(){
                store.commit('closeAddContent')
            }    

            function clickBank(clickBank){
                bank.value = clickBank
            }

            function clickOk(){
                closeDetailAddPopup()
                // set_total_Account()
            }

            var accountdata = {
                bank: '농협',
                acc:'계좌번호',
                money: 5000,
                img: ""
            }

            // async function set_total_Account(){
            //     await axios.post("/api/users/setTotalAccount",{accontdata: accountdata.value}).then(res => {
            //         console.log(res.data)
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })
            //     .finally(() => {
            //     })
            // }

            return{
                closeDetailAddPopup,
                bank,
                clickBank,
                clickOk,
            }
        }
    }


</script>

<style>
#accounBook-popup-box{
    height:70vh;
    margin-top:10vh
}
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