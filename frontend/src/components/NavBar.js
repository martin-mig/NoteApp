import react from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () =>{
    return (
        <>
            <nav className='navbar'>
                <ul>
                    <li className='navbar-item'>
                        <NavLink to="/" >Notas Activas</NavLink>
                    </li>
                    <li  className='navbar-item'>
                        <NavLink to="/notas-archivadas">Notas Archivadas</NavLink>
                    </li>
                </ul>
            </nav>
        </> 
    )

}