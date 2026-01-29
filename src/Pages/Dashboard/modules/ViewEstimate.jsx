import React, { useEffect, useState } from 'react'
import useContact from '../../../hooks/useContact'

const ViewEstimate = () => {

  const { loading, GetEstimate } = useContact()
  const [estimate, setEstimate] = useState([])
  useEffect(() => {

    const fetchContact = async () => {
      const res = await GetEstimate()
      setEstimate(res.data)
      console.log(estimate);
      console.log(res.data);
    }
    fetchContact()

  }, [])

  return (
    <div>
      
    </div>
  )
}

export default ViewEstimate
