import './Css/add.css';0
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Pethome = () => {
    const [mascota, setMascota] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3000/api/allmascota`);
                setMascota(response.data);
            } catch (error) {
                console.error('Error al obtener la mascota:', error);
            }
        };
        fetchData()
    })

    return(
        <div className="contenedor">
        <h1 className='contenedor1'>Pet Shelter</h1>
        <br />
        <div>
            <h2 className='contenedor2'>These pets are looking for a good home </h2>
            <Link to={'/'}>add a pet to the shelter</Link>
        </div>
    
        <br />
    
        <table>
            <thead>
                <tr className='cont3colun1'>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {mascota && mascota.map((data, index) => (
                    <tr key={index} className='cont3fil1'>
                        <td>{data.nombre}</td>
                        <td>{data.tipo_de_animal}</td>
                        <td>
                            <div>
                                <Link to={`/detalles/${data._id}`}>detail </Link>
                                <Link to={`/editar/${data._id}`}> edit</Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
    )
}

export default Pethome;
