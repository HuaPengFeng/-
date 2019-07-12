import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        CartList: [],
        Citelist: [],
        addresslist:[],
        phoneNum:'',
        islogin: false,
        allVal:0,
    },
    mutations: {
        add(state, obj) {
            state.CartList.push(obj);
            console.log(state.CartList)
            state.allVal = 0;
            for(var i=0;i<state.CartList.length;i++){
                state.allVal += state.CartList[i].value
            }
        },
        cite(state, arr) {
            for (var i = 0; i < arr.length; i++) {
                state.Citelist.push(arr[i]);
            }
        },
        address(state, obj){
            state.addresslist.push(obj) 
        },
        login(state,num){
            state.phoneNum = num;
            state.islogin = !state.islogin
        }
    },
    actions: {}
});