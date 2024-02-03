import react from 'react';
import { useState } from 'react';

export const Editar = ({notauni, notatotales , setNota, tipoNota}) =>{

const [notanew, setNotaNew] = useState(notauni);
const [editMode, setEditMode] = useState(null);
const [editedData, setEditedData] = useState({
    id: null,
    title: '',
    content: '',
  });
  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');

 //--------------------- EDITAR NOTA-------------------------
 const editarNota = (note) => {
    setEditMode(note.id);
    setEditedData({
      id: note.id,
      title: note.title,
      content: note.content,
    });
  };

  const handleTitleChange = (event) => {
    setTitleError(false);
    setEditedData({
      ...editedData,
      title: event.target.value,
    });
  };
 
  const handleContentChange = (event) => {
    setContentError(false);
    setEditedData({
      ...editedData,
      content: event.target.value,
    });
  };
  
  const handleCancelEdit = () => {
    setEditMode(null);
    setEditedData({
      id: null,
      title: '',
      content: '',
    });
  };
 
  const handleSaveEdit = async () => {
    let _editedData = {...editedData};

    //verifico contenido nulo
    if (_editedData.title == '')
    {
      setTitleError(true);
    }
    else{
      setTitleError(false);
    }

    if (_editedData.content == '')
    {
      setContentError(true);
    }
    else{
      setContentError(false);
    }

    if((_editedData.title != '' && _editedData.content != ''))
    {
      await peticionEditarNota(editedData, tipoNota);
      setNotaNew(editedData);
      setEditMode(null);
      setEditedData({
        id: null,
        title: '',
        content: '',
      });
    }
  };
 
  const peticionEditarNota = async (nota,tipoNota) => {
    let objdatos = {
        id: nota.id,
        title: nota.title,
        content: nota.content
    }
    let backend_route = "http://localhost:3001/api/";

    backend_route += (tipoNota == "activa") ? "notes" : "notes-archived";
    const enviardatos = await fetch(backend_route, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objdatos),
    });
  }
 
  const borrarNota = async (notaId,tipoNota) => {
    let objdatos = {
        id: notaId
    }

    let backend_route = "http://localhost:3001/api/";
    backend_route += (tipoNota == "activa") ? "notes" : "notes-archived";
    const enviardatos = await fetch(backend_route, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objdatos),
    });
  
    let nuevasNotas = notatotales.filter((ele) => {
        return ele.id != notaId;
    });
    setNota(nuevasNotas);
  }

  const archivarNota = async (nota,tipoNota) => {
    await borrarNota(nota.id, tipoNota);
    enviarDatos(nota,tipoNota);
  }

  const enviarDatos = async (nota_uni,tipoNota) => {
    let backend_route = "http://localhost:3001/api/";
    try {
      backend_route += (tipoNota == "activa") ? "notes-archived" : "notes";
      const response = await fetch(backend_route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nota_uni),
      });

      if (!response.ok) {
        throw new Error('Error al enviar datos al servidor');
      }
      console.log('Datos enviados con éxito al servidor');
    } catch (error) {
      console.error('Error:', error);
    }
  };

return(
    <>
        <div className='notes-header'>

        {editMode === notanew.id ? 
            (
                <>
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
                </>
            ) : 
            (
                <>
                <button onClick={() => archivarNota(notanew,tipoNota)}>{tipoNota == 'activa' ? '«' : '»'}</button>
                <button onClick={() => borrarNota(notanew.id,tipoNota)}>x</button>
                </>
            )
        }
        </div>
        {editMode === notanew.id ? 
            (
                <>
                <input type="text" required value={editedData.title} onChange={handleTitleChange} />
                <span class="error-message" id="titleError" style={{ display: titleError ? 'block' : 'none' }}>Por favor, completa este campo.</span>
                <textarea required value={editedData.content} onChange={handleContentChange} />
                <span class="error-message" id="contentError" style={{ display: contentError ? 'block' : 'none' }}>Por favor, completa este campo.</span>
                </>
            ) : (
                    <div className='note-item-body' onClick={() => editarNota(notanew)}>
                      <h2>{notanew.title}</h2>
                      <p>{notanew.content}</p>
                    </div>
                ) 
        }
    </>
)
}