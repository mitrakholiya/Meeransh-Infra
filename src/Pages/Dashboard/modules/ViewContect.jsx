import React, { useEffect, useState } from "react"
import useContact from "../../../hooks/useContact"
import { copyToClipboard } from "../../../utils/toast"
import { FiClipboard, FiMapPin, FiTrash2 } from "react-icons/fi"
import Loader from "./Loader"

const ViewContect = () => {
  const { GetContact, loding, DeleteContact } = useContact()
  const [contact, setContact] = useState([])
  // const [refrace, setRefrace] = useState(1)
  useEffect(() => {
    if (loding) return
    const fetchContact = async () => {
      const res = await GetContact()
      setContact(res.data)
    }
    fetchContact()
  }, [])

  const DeleteHandel = async (id) => {
    const res = await DeleteContact(id)
    if (res?.success) {
      setContact(prev =>
        prev.filter(c => String(c._id) !== String(id))
      )
    }
  }
  return (
    <div className="p-4">
      {loding ?(
        <Loader/>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Contact Messages
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {contact?.map((c) => (
              <div
                key={c._id}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 group"
              >
                {/* Delete icon */}
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition"
                  title="Delete"
                  onClick={() => DeleteHandel(c._id)}
                >
                  <FiTrash2 size={18} />
                </button>

                {/* Header */}
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {c.name}
                  </h3>
                  <p
                    className="text-sm text-gray-500 cursor-pointer hover:text-purple-700 transition flex items-center gap-1"
                    onClick={() => copyToClipboard(c.email, "Email")}
                  >
                    <FiClipboard size={14} />
                    {c.email}
                  </p>
                </div>

                {/* Message */}
                <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
                  {c.message}
                </p>

                {/* Meta Info */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  {/* City */}
                  <span className="flex items-center gap-1">
                    <FiMapPin className="text-purple-500" />
                    {c.city}
                  </span>

                  {/* Phone */}
                  <span
                    className="flex items-center gap-1 cursor-pointer hover:text-purple-700 transition"
                    onClick={() => copyToClipboard(c.phone, "Phone")}
                    title="Copy phone number"
                  >
                    <FiClipboard className="text-purple-500" />
                    {c.phone}
                  </span>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-3 border-t text-xs text-gray-400 flex justify-between">
                  <span>
                    {new Date(c.createdAt).toLocaleDateString()}
                  </span>
                  <span>
                    {new Date(c.createdAt).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ViewContect
