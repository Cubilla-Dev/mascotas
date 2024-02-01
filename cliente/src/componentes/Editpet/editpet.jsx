import { useState } from 'react';
import axios from 'axios';
import './Css/edit.css'


const Editpet = () => {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:3000/api/crear', {
                nombre: nombre,
                tipo_de_animal: tipo,
                descripcion_de_amimal: descripcion,
            });

            console.log('mascota agregada con éxito ', response.data);
        } catch (error) {
            console.error('Error al agregar mascota:', error);
        }
    };

    return (
        <div className='cofre1'>
            <h1 className='cofretitulo1'>Pet Shelter</h1>
            <h2 className='cofretitulo2'>Edit </h2>

            <div className='cofre2'>
                <form onSubmit={onSubmit} >
                    <br />
                    <label className='cofrepequeños1'>Pet Name: </label>
                    <br /> 
                    <input className='cofrecito1'  value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <br />
                    <label className='cofrepequeñao2'>Pet Type</label>
                    <br />
                    <input className='cofrecito2' value={tipo} onChange={(e) => setTipo(e.target.value)} />
                    <br />
                    <label className='cofrepequeños3'>Pet Description</label>
                    <br />
                    <input className='cofrecito3' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    <br />
                    <button className='botoncofre' type="submit">Edit Pet</button>
                </form>
            </div>
        </div>
    );
};

export default Editpet;