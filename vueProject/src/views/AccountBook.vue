<template>
    <body style="width: 100vw; height:100vh; margin:0; overflow: hidden;">
        <AccountBookCom style="margin-left:30vw; margin-top:5vh"></AccountBookCom>
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