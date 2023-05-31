<template>
    <body style="overflow: hidden">
        <patternPopup :class="{'pattern_open': pattern ===false, 'pattern_false': pattern===true}" style="position:fixed"></patternPopup>
        <AccountBookComPopupVue v-if="contentAddPopup==true" style="position:fixed"></AccountBookComPopupVue>
        <AccountBookCom style="margin-left:30vw"></AccountBookCom>
    </body>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import AccountBookCom from '@/components/accountBook/AccountBookCom.vue';

import AccountBookComPopupVue from '../components/accountBook/AccountBookComPopup.vue';

import patternPopup from '@/components/patternAnalysis/patternPopup.vue';
    export default{ 
        name:'accountMain',
        components:{
            AccountBookCom,
            AccountBookComPopupVue,
            patternPopup
        },
        setup(){
            var store = useStore()
            var contentAddPopup = computed(()=> store.state.addContent);
            return{contentAddPopup}
        }
    }
</script>

<style>
.pattern_open{
    margin-left:97vw;
}
.pattern_false{
    margin-left:62vw;
}
</style>