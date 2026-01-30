import React, { useEffect, useState } from "react"
import useContact from "../../../hooks/useContact"
import { FiDownload, FiTrash2, FiClipboard, FiMapPin } from "react-icons/fi"
import { copyToClipboard } from "../../../utils/toast" // your toast copy utility

const ViewEstimate = () => {
  const { loading, GetEstimate, DeleteEstimate } = useContact()
  const [estimate, setEstimate] = useState([])

  useEffect(() => {
    const fetchEstimate = async () => {
      const res = await GetEstimate()
      setEstimate(res.data)
    }
    fetchEstimate()
  }, [])

  // Download file handler
  const handleDownload = (fileName) => {
    if (!fileName) return
    const fileUrl = `http://localhost:5000/uploads/${fileName}`
    const link = document.createElement("a")
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Delete estimate handler
  const DeleteHandel = async (id) => {
    const res = await DeleteEstimate(id)
    if (res?.success) {
      setEstimate(prev => prev.filter(c => String(c._id) !== String(id)))
    }
  }

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
        Estimates
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {estimate?.map((e) => (
          <div
            key={e._id}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 flex flex-col justify-between"
          >
            {/* Delete Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition"
              title="Delete"
              onClick={() => DeleteHandel(e._id)}
            >
              <FiTrash2 size={18} />
            </button>

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{e.name}</h3>

            {/* Message */}
            <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
              {e.message || "No message"}
            </p>

            {/* Contact Info */}
            <div className="mb-3 text-sm text-gray-500 flex flex-col gap-2">
              {/* Email */}
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-purple-700 transition"
                onClick={() => copyToClipboard(e.email, "Email")}
                title="Copy email"
              >
                <FiClipboard className="text-purple-500" />
                {e.email || "N/A"}
              </div>

              {/* Phone */}
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-purple-700 transition"
                onClick={() => copyToClipboard(e.phone, "Phone")}
                title="Copy phone"
              >
                <FiClipboard className="text-purple-500" />
                {e.phone || "N/A"}
              </div>

              {/* City */}
              <div className="flex items-center gap-1">
                <FiMapPin className="text-purple-500" />
                {e.city || "N/A"}
              </div>
            </div>

            {/* File Download */}
            {e.file && (
              <button
                className="mt-2 flex items-center gap-2 text-sm text-white bg-purple-500 px-3 py-1 rounded hover:bg-purple-600 transition w-fit"
                onClick={() => handleDownload(e.file)}
              >
                <FiDownload size={16} />
                Download File
              </button>
            )}

            {/* Footer */}
            <div className="mt-4 pt-3 border-t text-xs text-gray-400 flex justify-between">
              <span>{new Date(e.createdAt).toLocaleDateString()}</span>
              <span>{new Date(e.createdAt).toLocaleTimeString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewEstimate
