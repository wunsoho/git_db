<template>
    <div>
        <div>
            <div class="title">정혜미님의 총 자산</div>
            <div class="block">
                <div style="text-align: center;">
                    <div id="total-money" class="title block-title">1,100,500</div>
                    <div id="원" class="title block-title">원</div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

    export default{ 
        name:'accountBookCom',
        components:{
        },
        setup(){
            return{}
        }
    }
</script>

<style>
.title{
    font-size:2.5vh;
    font-weight: bolder;
    display:inline-block;
}

.block{
    width:40vw; 
    height:13vh;
    border-radius: 1vh; 
    background-color: white;
    margin-top:3vh;
}
.block-title{
    font-size:4vh;
    height:13vh;
    line-height: 13vh;
}
#total-money{
    color:#13005D
}
#원{
    margin-left:5vw;
}
</style>