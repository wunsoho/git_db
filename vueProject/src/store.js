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
        addContent:false
    }, 
    //상태 접근 (변경)
    mutations:{
        openAddContent (state) {
          state.addContent = true
        },
        closeAddContent (state) {
            state.addContent = false
        },
        
    },
    modules:{

    }
});


// 참고 링크
//https://velog.io/@latte_h/Vue3-Guide-12-Vuex