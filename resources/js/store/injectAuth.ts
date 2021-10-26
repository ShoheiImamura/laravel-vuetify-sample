import { ref } from "@vue/composition-api";
import axios from "axios";

export default function injectAuth() {
    // 認証情報
    const isAuth = ref(false);
    const user = ref({});

    const setSessionStrage = (value: {}) => {
        const auth = JSON.stringify({ auth: value });
        sessionStorage.setItem("caffy", auth);
    };

    const setIsAuth = (value: boolean) => {
        isAuth.value = value;
    };
    const setUser = (value: {}) => {
        user.value = value;
    };
    const syncUser = async () => {
        await axios
            .get("/api/user")
            .then(response => {
                setIsAuth(true);
                setUser(response.data);
                setSessionStrage({ user: response.data, isAuth: true });
            })
            .catch(() => {
                setIsAuth(false);
                setUser({});
                setSessionStrage({});
            });
    };
    const login = async (credentials: { email: string; password: string }) => {
        console.log("login");
        console.log("credential => " + credentials.email);
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/auth/login", credentials);
        await syncUser();
    };
    const logout = async () => {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/auth/logout");
        await syncUser();
    };

    return { isAuth, user, login, logout, syncUser };
}
