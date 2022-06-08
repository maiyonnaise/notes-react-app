import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
//styles
import "./Create.css"
//
import useTheme from '../../hooks/useTheme'
import { firestoreData } from "../../firebase/config"

export default function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')



  const titleInput = useRef(null)
  const bodyInput = useRef(null)
  const { color } = useTheme()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    if (bodyInput.current.value && titleInput.current.value) {
      const post = {
        title: title,
        body: body,
        date: new Date().toString().slice(4, 16)
      }
      try {
        await firestoreData.collection('notes').add(post)
        navigate('/')
      } catch (err) {
        setError(error)
      }

    }
  }
  return (
    <div className="create">
      <h2 className="page-title">Add a new note</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          ref={titleInput} />
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={e => setBody(e.target.value)}
          required
          ref={bodyInput}>
        </textarea>
        <button
          style={{ backgroundColor: color }}
          className="btn"
        >Add</button>
      </form>
    </div>
  )
}
