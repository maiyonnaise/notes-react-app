import { useState, useEffect } from "react"

//styles 
import "./Home.css"
//
import NoteGrid from "../note grid/NoteGrid"
import { firestoreData } from "../../firebase/config"


export default function Home() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [pending, setPending] = useState(false)
  useEffect(() => {
    setPending(true)
    const unsub = firestoreData.collection('notes').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setError('no notes to load')
        setPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results)
        setPending(false)
      }
    }, (err) => {
      setError(err.message)
      setPending(false)
    }
    )

    return () => unsub()


  }, [])
  return (
    <div className="home">
      {error && <div className="page-title">{error}</div>}
      {pending && <div className="page-title">Loading...</div>}
      {data && <NoteGrid data={data} />}
    </div>
  )
}
