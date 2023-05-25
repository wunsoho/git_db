<template>
    <div>
        <div style="width:3vw; height:18vh; background-color: #D9D9D9; float:left; border-radius: 4vh 0 0 4vh;" @click ="clickPattern()">
            <div style="width:inherit; text-align: center; margin-top:2vh; font-size:1.6vh; font-weight: bold; " >
                패 <br>
                턴 <br>
                분 <br>
                석
            </div>
        </div>
        <div class="pattern-block" style="float:left" v-if="pattern==false">
            <div class="pattern-header">
                <input type="month" id="currnetMonth" v-model="date">
                <div>수입, 지출 패턴 분석</div>
            </div>

            <div style="margin-top:4vh">
                <div class="pattern-title">수입 패턴 분석</div>
                <div class="pattern-board">
                    <income style="height:20vh; width:15vw; float:left"></income>
                    <div style="float:left; margin-left:2vw; overflow: auto; height: 20vh; padding:0 1vw">
                        <div v-for="incom, i in incomList" >
                            <div class="legend-style" :style="{ background:activeColor[i]}"></div>
                            <span style="display:inline-block; width:5vw; margin-bottom:1.7vh">{{incom.kind}}</span><span>{{ incom.money }}원</span>
                        </div>
                    </div>
                </div>
            </div>
   
            <div style="margin-top:4vh">
                <div class="pattern-title">지출 패턴 분석</div>
                <div class="pattern-board">
                    <expend style="height:20vh; width:15vw; float:left"></expend>
                    <div style="float:left; margin-left:2vw; overflow: auto; height: 20vh; padding:0 1vw">
                        <div v-for="expend, i in expendList" >
                            <div class="legend-style" :style="{ background:activeColor[i]}"></div>
                            <span style="display:inline-block; width:5vw; margin-bottom:1.7vh">{{expend.kind}}</span><span>{{ expend.money }}원</span>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div> 
    </div>
</template>

<script>
import {ref,computed} from 'vue'
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
            var expendList =[
                {kind:"여가", money: 20186},
                {kind:"간식", money: 80000},
                {kind:"생필품", money: 20186},
                {kind:"식비", money: 5802},
                {kind:"음식점", money: 6050}
            ]

            var incomList = [
                {kind:"월급", money:806000},
                {kind:"용돈", money:350000}
            ]
            
            var activeColor = ['#FF7E66','#FFBD60','#A7B901','#00A29B','#EEE8AC','#E9DF56']
            var store = useStore();
            function clickPattern(){
                store.commit("clickPatternPopup")
            }
            var pattern = computed(()=>store.state.pattern)
            var date = ref('2023-04')
            return{
                activeColor,
                expendList,
                incomList,
                clickPattern,
                pattern,
                date
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
.legend-style{
    display:inline-block;
    height:1.5vh;
    width:1.5vh;
    border-radius: 50%;
    background: #5A5A5A;
    margin-right:1vw;
    
}
</style>