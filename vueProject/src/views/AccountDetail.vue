<template>
    <body  style="overflow: hidden" >
        <patternPopup style="position:fixed; margin-left: 62vw;"></patternPopup>
        <EditIncomeCategoryPopupCopy v-if="editIncomePopup==true" style="position:fixed"></EditIncomeCategoryPopupCopy>
        <EditExpendCategoryPopup v-else-if="editExpendPopup==true" style="position:fixed"></EditExpendCategoryPopup>


        <AccountDetailAddPopupVue v-else-if="contentAddPopup==true" style="position:fixed"></AccountDetailAddPopupVue>
        <AccountDetail style="margin-left:30vw;"></AccountDetail>
    </body>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import AccountDetail from '@/components/accountDetail/AccountDetail.vue';

import AccountDetailAddPopupVue from '../components/accountDetail/AccountDetailAddPopup.vue';
import EditIncomeCategoryPopupCopy from '@/components/accountDetail/EditIncomeCategoryPopup.vue';
import EditExpendCategoryPopup from '@/components/accountDetail/EditExpendCategoryPopup.vue';

import patternPopup from '@/components/patternAnalysis/patternPopup.vue';
    export default{ 
        name:'accountDetail',
        components:{
            AccountDetail,
            AccountDetailAddPopupVue,
            EditIncomeCategoryPopupCopy,
            EditExpendCategoryPopup,
            patternPopup
        },
        setup(){
            var store = useStore()
            var contentAddPopup = ref(computed(()=> store.state.addContent));
            var editIncomePopup = ref(computed(()=> store.state.incomeEditCategory));
            var editExpendPopup = ref(computed(()=> store.state.expendEditCategory));

            console.log(contentAddPopup.value)
            return{
                contentAddPopup,
                editIncomePopup,
                editExpendPopup
            }
        }
    }
</script>

<style>
</style>