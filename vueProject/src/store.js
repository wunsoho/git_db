//vuex 설정 파일 
import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    plugins: [
        createPersistedState({
          storage: window.sessionStorage, // store를 session storage에 유지
        })
    ],
    state: {
        //내용 추가하기 팝업
        addContent:false,

        //내용 수정하기 팝업
        editContent:false,
        editList :[],

        //카테고리 수정하기 팝업
        incomeEditCategory:false,
        expendEditCategory:false,

        //패턴 분석
        pattern: false,
        month : '04',

        incomeLabel:[],
        incomeData:[],
        expendLabel:[],
        expendData:[],
        
        //main화면
        account:'',



    }, 
    //상태 접근 (변경)
    mutations:{

        //계좌 클릭
        clickAccount(state, account){
            state.account= account
            console.log(state.account)
        },
        //내용 추가하기 팝업
        openAddContent (state) {
            console.log('add')
            state.addContent = true
        },
        closeAddContent (state) {
            state.addContent = false
        },

        //내용 수정하기 팝업
        openEditContent(state,list){
            state.editContent = true
            state.editList = list
        },
        closeEditContent(state,list){
            state.editContent = false
            state.editList = []
        },

        //카테고리 수정하기 팝업
        openEditCategory (state, kind) {
            console.log('edit')
            if(kind == 'income'){
                state.incomeEditCategory = true
                state.expendEditCategory = false
                console.log(state.incomeEditCategory)
            }
            else if(kind == 'expend'){
                state.expendEditCategory = true
                state.incomeEditCategory = false
                console.log(state.expendEditCategory)
            }
        },
        closeEditCategory (state) {
            console.log('삭제')
            state.incomeEditCategory = false
            state.expendEditCategory = false
        },

        clickPatternPopup(state) {
            state.pattern = ! state.pattern
            console.log(state.pattern )
        },
        setMonth(state,month){
            state.month = month
        },
        setExpendPattern_label(state, expend_label) {
            state.expendLabel = []
            for(var i=0; i<expend_label.length ; i++){
                state.expendLabel.push(expend_label[i])
            }
        },
        setExpendPattern_data(state,expend_data) {
            state.expendData = []
            for(var i=0; i<expend_data.length ; i++){
                state.expendData.push(expend_data[i])
            }
            
            
        },
        setIncomePattern_label(state, income_label) {
            state.incomeLabel = []
            for(var i=0; i<income_label.length ; i++){
                state.incomeLabel.push(income_label[i])
            }
            console.log('hlll',state.incomeLabel)
        },
        setIncomePattern_data(state, income_data) {
            state.incomeData = []
            for(var i=0; i<income_data.length ; i++){
                state.incomeData.push(income_data[i])
            }
        }
    },
    modules:{

    }
});


// 참고 링크
//https://velog.io/@latte_h/Vue3-Guide-12-Vuex