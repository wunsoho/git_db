<template>
    <body style="background-color: #F6F6F6; width: 100vw; height:100vh; margin:0">
        <AccountBookCom style="margin-left:30vw"></AccountBookCom>
    </body>
</template>

<script>
import AccountBookCom from '@/components/AccountBookCom.vue';
    export default{ 
        name:'Member',
        components:{
            AccountBookCom
        },
        setup(){
            return{}
        }
    }
</script>

<style>
</style>