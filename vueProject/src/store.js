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

        //카테고리 수정하기 팝업
        incomeEditCategory:false,
        expendEditCategory:false
    }, 
    //상태 접근 (변경)
    mutations:{
        //내용 추가하기 팝업
        openAddContent (state) {
            console.log('add')
            state.addContent = true
        },
        closeAddContent (state) {
            state.addContent = false
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
        }
    },
    modules:{

    }
});


// 참고 링크
//https://velog.io/@latte_h/Vue3-Guide-12-Vuex