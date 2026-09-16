import { axiosInstance } from "./axiosEle";

export const getLoggedUser = async () => {
    try {
        const response = await axiosInstance.get('/user');
        return response.data;
    } catch (error) {
        console.log("STATUS:", error.response?.status);
        console.log("DATA:", error.response?.data);
        throw error;
    }
};