import React from 'react';
import { useState,useEffect } from 'react';
import { Editar } from './Editar';

export const NotasArchivadas = () =>{

    const [nota, setNota] = useState([]);
    const valorNota = 'archivada';

    const obtenerDatos = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/notes-archived');
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
    
    return(
        <>
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