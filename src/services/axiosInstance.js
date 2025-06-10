import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8090/api",
});

export default axiosInstance;
