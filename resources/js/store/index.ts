import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth
    },
    plugins: [createPersistedState(
        {
            key: 'vuex',  // 設定しなければ'vuex'
            paths: ['auth'],  // 保存するモジュール：設定しなければ全部。
            storage: window.sessionStorage,  // 設定しなければlocalStorage
        }
    )],
});