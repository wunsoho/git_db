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
        addMember:false,
        editMember:false,
        addPublic:false,
        editPublic:false,
        addResearch:false,
        editResearch:false
    }, 
    //상태 접근 (변경)
    mutations:{
        openAddMember (state) {
          state.addMember = true
        },
        closeAddMember (state) {
            state.addMember = false
        },
        openAddPublic(state){
            state.addPublic = true
        },
        openAddResearch(state){
            state.addResearch = true
        }
    },
    modules:{

    }
});


// 참고 링크
//https://velog.io/@latte_h/Vue3-Guide-12-Vuex