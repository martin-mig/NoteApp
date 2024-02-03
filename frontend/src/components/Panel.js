import react from 'react';
import { useState, useEffect } from 'react';
import {Editar}  from './Editar';

export const Panel = () => {

    const [nota, setNota] = useState([]);
    const valorNota = 'activa';

    const obtenerDatos = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/notes');
          if (!response.ok) {
            throw new Error('No se pudieron obtener los datos');
          }
          const {body} = await response.json();
          setNota(body); // Actualiza el estado con los datos obtenidos
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
  
    };
  
      useEffect(() => {
        obtenerDatos();
      },[])

      const agregarNota = async (e) =>{
        e.preventDefault();
        let datos = e.target;
        let objdatos = {
            title: datos.title.value,
            content: datos.content.value
        }
       
        await enviarDatos(objdatos);
        obtenerDatos();
        e.target.title.value = "";
        e.target.content.value = "";

    }
    
    const enviarDatos = async (nota_uni) => {
        try {
         
          const response = await fetch("http://localhost:3001/api/notes", {
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
            <div className='paneladd'>
            <h1 style={{ fontFamily: 'Calibri' }}>Add Note</h1>
                <form  onSubmit={agregarNota}  className="note-form">        
                    <input placeholder="Title" name="title" required />        
                    <textarea placeholder="Content" name="content" rows={10} required />
                    <button type="submit">Add Note</button>      
                </form>
            </div>

            <div className='panelcard'>
                <div className='notes-grid'>
                {
                    nota.map((note,index) => {
                        return  (   
                            <div key={index} className='note-item'>
                                <Editar 
                                notauni={note}
                                notatotales = {nota}
                                setNota = {setNota}
                                tipoNota = {valorNota}
                                />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>

    )
}