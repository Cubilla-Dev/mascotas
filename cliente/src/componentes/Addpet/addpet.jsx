import { useState } from 'react';
import axios from 'axios';
import './Css/agg.css'


const Addpet = () => {
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
        <div className='caja1'>
            <h1 className='cajatitulo1'>Pet Shelter</h1>
            <h2 className='cajatitulo2'>Know a pet needing a home?</h2>

            <div className='caja2'>
                <form onSubmit={onSubmit} >
                    <br />
                    <label className='cajaspequeñas1'>Pet Name: </label>
                    <br /> 
                    <input className='cajita1'  value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <br />
                    <label className='cajaspequeñas2'>Pet Type</label>
                    <br />
                    <input className='cajita2' value={tipo} onChange={(e) => setTipo(e.target.value)} />
                    <br />
                    <label className='cajaspequeñas3'>Pet Description</label>
                    <br />
                    <input className='cajita3' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    <br />
                    <button className='botoncaja' type="submit">Add pet</button>
                </form>
            </div>
        </div>
    );
};

export default Addpet;