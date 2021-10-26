import axios from "axios";
export default {
    namespaced: true,
    state: {
        isAuth: false,
        user: null
    },
    getters: {
        isAuth(state: any) {
            return state.isAuth;
        },
        user(state: any) {
            return state.user;
        }
    },
    mutations: {
        SET_IS_AUTH(state: any, value: boolean) {
            state.isAuth = value;
        },
        SET_USER(state: any, value: any) {
            state.user = value;
        },
        FRESH_AUTH(state: any) {
            state.isAuth = false;
            state.user = null;
        }
    },
    actions: {
        async login({ dispatch }: any, credentials: any) {
            console.log("login attempt");
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/auth/login", credentials);
            return await dispatch("me");
        },
        async logout({ commit }: any, credentials: any) {
            console.log("logout attempt");
            await axios.post("/auth/logout", credentials);
            commit("FRESH_AUTH");
            window.sessionStorage.removeItem("vuex");
        },
        async me({ commit }: any) {
            return await axios
                .get("/api/user")
                .then(response => {
                    commit("SET_IS_AUTH", true);
                    commit("SET_USER", response.data);
                })
                .catch(() => {
                    commit("SET_IS_AUTH", false);
                    commit("SET_USER", null);
                });
        }
    }
};
