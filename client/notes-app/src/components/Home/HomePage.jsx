import { useState } from 'react';
import "./Home.css";
import { createNoteService } from '../../services/homeService';

function Home() {
    const [notes, setNotes] = useState([])
    const [text, setText] = useState("");

    const onChange = (e) => {
      setText(e.target.value);
    }

    const createNote = async(e) => {
      e.preventDefault();

      const newNote = {
        id: Math.floor(Math.random() * 100),
        message: text
      };

      createNoteService(newNote)
      .then(notes => console.log(notes))

    }

  return (
    <div className='home-container'>
      <form onSubmit={createNote}>
        <label htmlFor="note">Add Note</label>
        <input onChange={onChange} type="text" id="note" />
        <input type='submit' className='addBtn' value="Add Note"/>
      </form>
    </div>
  )
}

export default Home