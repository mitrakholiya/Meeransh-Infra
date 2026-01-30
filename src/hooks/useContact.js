import { useState } from "react";
import { getContact, postContact, deleteContact, postEstimate, getEstimate,deleteEstimate} from "../services/contact"

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
    const DeleteContact = async (id) => {
        const res = await deleteContact(id)
        return res.data
    }

    const PostEstimate = async (data) => {
        setLoading(true)
        try {
            const res = await postEstimate(data)
            return res.data
        } catch (err) {
            setError(err.response?.data?.message || "Post Estimate Error");
        } finally {
            setLoading(false)
        }
    }

    // Get Estimate

    const GetEstimate = async () => {
        setLoading(true)
        try {
            const res = await getEstimate()
            return res.data
        } catch (err) {
            setError(err.response?.data?.message || "Post Estimate Error");
        } finally {
            setLoading(false)
        }
    }

    const DeleteEstimate = async (id) => {
        const res = await deleteEstimate(id)
        return res.data
    }

    return {
        GetContact,
        PostContact,
        DeleteContact,
        PostEstimate,
        GetEstimate,
        DeleteEstimate,
        loading,
        error
    }
}


export default useContact