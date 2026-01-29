export const isAadmin = () => {
    const token = localStorage.getItem("token")
    return token ? true : false;
}
export const clearToken = () => {
    localStorage.clear()
}

export const setRole = (data) => {
    localStorage.setItem("role",data)
}