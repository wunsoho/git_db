<template>
    <body style="overflow: hidden" >
        <EditIncomeCategoryPopupCopy v-if="editIncomePopup==true" style="position:fixed"></EditIncomeCategoryPopupCopy>
        <EditExpendCategoryPopup v-else-if="editExpendPopup==true" style="position:fixed"></EditExpendCategoryPopup>

        <AccountDetailEditPopup v-else-if="contentEditPopup==true" style="position:fixed"></AccountDetailEditPopup>
        <AccountDetailAddPopupVue v-else-if="contentAddPopup==true" style="position:fixed"></AccountDetailAddPopupVue>
        <AccountDetail style="margin-left:30vw;"></AccountDetail>
    </body>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import AccountDetail from '@/components/accountDetail/AccountDetail.vue';

import AccountDetailAddPopupVue from '../components/accountDetail/AccountDetailAddPopup.vue';
import AccountDetailEditPopup from '@/components/accountDetail/AccountDetailEditPopup.vue';
import EditIncomeCategoryPopupCopy from '@/components/accountDetail/EditIncomeCategoryPopup.vue';
import EditExpendCategoryPopup from '@/components/accountDetail/EditExpendCategoryPopup.vue';

    export default{ 
        name:'accountDetail',
        components:{
            AccountDetail,
            AccountDetailAddPopupVue,
            AccountDetailEditPopup,
            EditIncomeCategoryPopupCopy,
            EditExpendCategoryPopup,
        },
        setup(){
            var store = useStore()
            var contentAddPopup = ref(computed(()=> store.state.addContent));
            var contentEditPopup = ref(computed(()=>store.state.editContent));
            var editIncomePopup = ref(computed(()=> store.state.incomeEditCategory));
            var editExpendPopup = ref(computed(()=> store.state.expendEditCategory));
            var store = useStore()

            var pattern = computed(()=>store.state.pattern)
            console.log(contentAddPopup.value)
            return{
                contentAddPopup,
                contentEditPopup,
                editIncomePopup,
                editExpendPopup,
                pattern
            }
        }
    }
</script>

<style>

</style>