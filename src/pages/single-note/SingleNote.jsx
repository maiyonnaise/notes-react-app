import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

//styles
import "./SingleNote.css"

//components
import { firestoreData } from "../../firebase/config"


export default function SingleNote() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [pending, setPending] = useState(false)
  const params = useParams()

  useEffect(() => {
    setPending(true)
    firestoreData.collection('notes').doc(params.id).get()
      .then(doc => {
        if (doc.exists) {
          setPending(false)
          setData(doc.data())
        } else {
          setPending(false)
          setError('cannot load this note')
        }
      }).catch((err) => {
        setError(err)
      })
  }, [params.id])
  return (
    <div className="single-note">
      {error && <p className="error">{error}</p>}
      {pending && <p className="loading">Loading data ...</p>}
      {data && (
        <div key={data.id} className="note">
          <h2 >{data.title}</h2>
          <p>Created on: {data.date}</p>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  )
}
