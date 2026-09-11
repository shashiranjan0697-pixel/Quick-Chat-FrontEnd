import { axiosInstance } from "./axiosEle";

export const signupUser = async (user) =>{
    try{

        const response = await axiosInstance.post('/auth/signup', user);

        return response.data;

    }   catch(e) {
        return e;
    }
}