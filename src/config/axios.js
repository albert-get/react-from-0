import axios from "axios";

const instance = axios.create({
    baseURL: "/api",
    timeout: 250000,
});
// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    function (response) {
        if (response.status !== 200) {
            return Promise.reject(response)
        }
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance

