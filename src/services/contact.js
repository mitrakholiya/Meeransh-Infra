import axiosClient from "../config/axios-client";

export const getContact = () => {
    return axiosClient.get("/contact")
}

export const postContact = (data) => {
    return axiosClient.post("/contact", data)
}

export const deleteContact = (id)=>{
    return axiosClient.delete(`/contact/${id}`)
}

// estimate
export const postEstimate = (data) =>{
    return axiosClient.post(`/estimate`,data) 
}

export const getEstimate = ()=>{
    return axiosClient.get("/estimate")
}