import React, { useContext } from 'react'
import { Link } from "react-router-dom"


//styles 
import "./NoteGrid.css"

//components
import trashIcon from '../../../assets/trash-icon.svg'
import { ThemeContext } from "../../context/ThemeContext"
import { firestoreData } from '../../firebase/config'


export default function NoteGrid({ data }) {
  const { color } = useContext(ThemeContext)
  function deleteData(id) {
    console.log(id)
    firestoreData.collection('notes').doc(id).delete()
      .then(() => {
        console.log('deleted')
      }).catch((err) => console.log(err))
  }

  return (
    <div className="notegrid">
      <h2 className="page-title">All of your notes:</h2>
      <div className="grid">
        {data.map(note => (
          <div className='card' key={note.id}>
            <h4 className="card-title">{note.title}</h4>
            <small>{note.date}</small>
            <div className="body">{note.body.substring(0, 150)}...</div>
            <Link
              style={{ backgroundColor: color }}
              className="btn"
              to={`notes/${note.id}`}
            >Read More</Link>
            <img src={trashIcon} alt="trashcan icon" className="delete"
              onClick={() => deleteData(note.id)}
            />
          </div>))}
      </div>
    </div>
  )
}
