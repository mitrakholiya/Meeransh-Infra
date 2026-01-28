import { useState } from "react";
import { getContact, postContact,deleteContact } from "../services/contact"

const useContact = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [contact, setContact] = useState([]);

    // Get 
    const GetContact = async () => {
        setLoading(true)
        setError(null);
        try {
            const res = await getContact()
            return res.data
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
        finally {
            setLoading(false)
        }
    }
// Add
    const PostContact = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const res = await postContact(data);
            return res.data
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    // Delete
    const DeleteContact = async (id)=>{
        const res = deleteContact(id)
        return res.data
    }
    return{
        GetContact,
        PostContact,
        DeleteContact,
        loading,
        error
    }
}


export default useContact