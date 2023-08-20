import React, { useState } from 'react';

function RegistroFormulario() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [errores, setErrores] = useState({});
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
    };

    const handleContrasenaChange = (event) => {
        setContrasena(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const nuevosErrores = {};

        if (nombre.trim() === '') {
            nuevosErrores.nombre = 'El nombre es requerido';
        }

        if (!correo.includes('@')) {
            nuevosErrores.correo = 'El correo electrónico es inválido';
        }

        if (contrasena.length < 6) {
            nuevosErrores.contrasena = 'La contraseña debe tener al menos 6 caracteres';
        }

        if (Object.keys(nuevosErrores).length === 0) {
            setFormularioEnviado(true);
        }

        setErrores(nuevosErrores);
    };

    return (
        <div>
            <h1>Formulario de Registro</h1>
            {formularioEnviado ? (
                <div>
                    <p>¡Formulario enviado con éxito!</p>
                    <p>Nombre: {nombre}</p>
                    <p>Correo: {correo}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={handleNombreChange}
                        />
                        {errores.nombre && <p className="error">{errores.nombre}</p>}
                    </div>
                    <div>
                        <label htmlFor="correo">Correo Electrónico:</label>
                        <input
                            type="email"
                            id="correo"
                            value={correo}
                            onChange={handleCorreoChange}
                        />
                        {errores.correo && <p className="error">{errores.correo}</p>}
                    </div>
                    <div>
                        <label htmlFor="contrasena">Contraseña:</label>
                        <input
                            type="password"
                            id="contrasena"
                            value={contrasena}
                            onChange={handleContrasenaChange}
                        />
                        {errores.contrasena && <p className="error">{errores.contrasena}</p>}
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
            )}
        </div>
    );
}

export default RegistroFormulario;
