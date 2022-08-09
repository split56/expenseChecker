import React,{useState} from 'react'

function ModalContent({close,content}) {
    const [note,setNote] = useState('')
    let handleAddNote = () => {
        if(note!=='') {
            content.desc.push(note)
            setNote('')
        } else {
            alert('Please enter your note first')
        }
    }
  return (
    <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> {`You have added ${content.text} to the list`} </div>
    <div className="content">
      {" "}
      <h4>{`Time : ${content.time}`}</h4>
      <br />
      <div className='openner'> Would you like to leave any note for this spending ?</div>
      <div className='modal-inpZone'>
        <input className='modal-inputBox' placeholder=' Product description...' value={note} onChange={(e)=>setNote(e.target.value)} required/>
        <button className='modal-sm' onClick={handleAddNote}>Add</button>
      </div>
      <ul>{content.desc.length > 0 ? (content.desc.map((descT,index)=><li className='noteItem' key={index}>{descT}</li>)) : <div className='note-empty'>You have not added any note for this spending !</div>}</ul>   
      </div>
  </div>
  )
}

export default ModalContent