<template>
    <div>
        <div style="width:3vw; height:18vh; background-color: #D9D9D9; float:left; border-radius: 4vh 0 0 4vh;">
            <div style="width:inherit; text-align: center; margin-top:2vh; font-size:1.6vh; font-weight: bold; ">
                패 <br>
                턴 <br>
                분 <br>
                석
            </div>
        </div>
        <div class="pattern-block" style="float:left">
            <div class="pattern-header">
                <input type="month">
                <div>수입, 지출 패턴 분석</div>
            </div>

            <div style="margin-top:4vh">
                <div class="pattern-title">수입 패턴 분석</div>
                <div class="pattern-board">
                    <income style="height:20vh"></income>
                </div>
            </div>
   
            <div style="margin-top:4vh">
                <div class="pattern-title">지출 패턴 분석</div>
                <div class="pattern-board">
                    <expend style="height:20vh"></expend>
                </div>
            </div>

        </div> 
    </div>
</template>

<script>
import {ref} from 'vue'
import { useStore } from 'vuex';
import income from '@/components/patternAnalysis/income'
import expend from '@/components/patternAnalysis/expend'
    export default{ 
        name:'accountDetailCom',
        components:{
            income,
            expend
        },
        setup(){
            return{
            }
        }
    }


</script>

<style>
.pattern-block{
    width:32vw;
    height:100vh;
    background: #D9D9D9;
    /* margin-left:65vw; */
    padding:2vh 1.5vw;
}
.pattern-header{
    margin-left:10vw;
}
.pattern-header > input {
    width:12vw;
    height:5vh;
    background : none;
    border: none;
    font-size: 3vh;
    font-weight: bold;
}

.pattern-header > div {
    width:12vw;
    height:5vh;
    margin-top:2vh;
    text-align: center;
    background : none;
    border: none;
    font-size: 2vh;
    font-weight: bold;
}
.pattern-title{
    font-size:1.7vh;
    font-weight: bold;
    color: #002641
}
.pattern-board{
    margin-top:1vh;
    width:inherit;
    height: 20vh;
    background: #ffffff;
    border-radius: 2vh;
    padding:6vh 1vw;
}
</style>