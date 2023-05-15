<template>
    <body  style="overflow: hidden" >
        <AccountDetailAddPopupVue v-if="contentAddPopup==true" style="position:fixed"></AccountDetailAddPopupVue>
        <AccountDetail style="margin-left:30vw;"></AccountDetail>
    </body>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import AccountDetail from '@/components/accountDetail/AccountDetail.vue';

import AccountDetailAddPopupVue from '../components/accountDetail/AccountDetailAddPopup.vue';

    export default{ 
        name:'accountDetail',
        components:{
            AccountDetail,
            AccountDetailAddPopupVue
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