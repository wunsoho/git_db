<template>
    <div>
        <div style="width:3vw; height:18vh; background-color: #D9D9D9; float:right; border-radius: 0 4vh 4vh 0;" @click ="clickPattern()">
            <div style="width:inherit; text-align: center; margin-top:2vh; font-size:1.6vh; font-weight: bold; " >
                패 <br>
                턴 <br>
                분 <br>
                석
            </div>
        </div>
        <div class="pattern-block" style="float:left" v-if="pattern==true">
            <div class="pattern-header">
                <input type="month" id="currnetMonth" v-model="date" @change="monthCal()">
                <div>수입, 지출 패턴 분석</div>
            </div>

            <div style="margin-top:4vh">
                <div class="pattern-title">수입 패턴 분석</div>
                <div class="pattern-board">
                    <income style="height:20vh; width:15vw; float:right"></income>
                    <div style="float:left; margin-left:2vw; overflow: auto; height: 20vh; padding:0 1vw">
                        <div v-for="incom, i in incomList" >
                            <div class="legend-style" :style="{ background:activeColor[i]}"></div>
                            <span style="display:inline-block; width:5vw; margin-bottom:1.7vh">{{incom.in_category}}</span><span>{{ incom.money }}원</span>
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
                            <span style="display:inline-block; width:5vw; margin-bottom:1.7vh">{{expend.ex_category}}</span><span>{{ expend.money }}원</span>
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
import axios from 'axios'
    export default{ 
        name:'accountDetailCom',
        components:{
            income,
            expend
        },
        setup(){
            var expendList =ref([])
            var incomList = ref([])
            
            var activeColor = ['#FF7E66','#FFBD60','#A7B901','#00A29B','#EEE8AC','#E9DF56']
            var store = useStore();
            function clickPattern(){
                store.commit("clickPatternPopup")
            }
            var pattern = computed(()=>store.state.pattern)
            var month =  ref(computed(()=>store.state.month))
            var date = ref('2023-'+ month.value)

            console.log(month.value)
            function monthCal(){
                console.log(date.value)
                store.commit("setMonth",date.value.substr(5, 2))
            }

            async function get_expend_pattern(){
                await axios.get("/api/users/getExpendPattern/"+month.value).then(res => {
                    console.log('카테고리별 총 금액',res.data)
                    expendList.value = res.data
                    var expend_label =[]
                    var expend_data = []
                    for (var i =0; i<res.data.length; i++){
                        expend_label.push(res.data[i].ex_category)
                        expend_data.push(res.data[i].money)
                    }

                    console.log(expend_label)
                    console.log(expend_data)
                    store.commit('setExpendPattern_data',expend_data)
                    store.commit('setExpendPattern_label',expend_label)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                })
            }
            
            async function get_income_pattern(){
                console.log('income month', month.value)
                await axios.get("/api/users/getIncomePattern/"+month.value).then(res => {
                    incomList.value = res.data
                    console.log('카테고리별 총 금액',res.data)
                    var income_label =[]
                    var income_data = []
                    for (var i =0; i<res.data.length; i++){
                        income_label.push(res.data[i].in_category)
                        income_data.push(res.data[i].money)
                    }

                    console.log(income_label)
                    console.log(income_data)
                    store.commit('setIncomePattern_label',income_label)
                    store.commit('setIncomePattern_data',income_data)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                })
            }
            get_expend_pattern()
            get_income_pattern()
            return{
                activeColor,
                expendList,
                incomList,
                clickPattern,
                pattern,
                date,
                monthCal,
                month
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