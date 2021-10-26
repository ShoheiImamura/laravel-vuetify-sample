import { getCurrentInstance } from "@vue/composition-api";

export function useRouter() {
    // インスタンスにアクセス
    const instance = getCurrentInstance();

    // `setup()`外で使用するとインスタンスは取得できません
    // https://v3.vuejs.org/api/composition-api.html#getcurrentinstance
    if (!instance) {
        throw new Error(`Should be used in setup().`);
    }

    // proxyが従来の`this`にあたるコンポーネントインスタンス
    return instance.proxy.$router;
}
