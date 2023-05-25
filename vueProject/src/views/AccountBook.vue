<template>
    <body style="width: 100vw; height:100vh; margin:0">
        <AccountBookComPopupVue v-if="contentAddPopup==true" style="position:fixed"></AccountBookComPopupVue>
        <AccountBookCom style="margin-left:30vw"></AccountBookCom>
    </body>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import AccountBookCom from '@/components/accountBook/AccountBookCom.vue';

import AccountBookComPopupVue from '../components/accountBook/AccountBookComPopup.vue';

    export default{ 
        name:'accountMain',
        components:{
            AccountBookCom,
            AccountBookComPopupVue
        },
        setup(){
            var store = useStore()
            var contentAddPopup = computed(()=> store.state.addContent);
            return{contentAddPopup}
        }
    }
</script>

<style>
</style>