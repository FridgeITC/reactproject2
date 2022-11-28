import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Crear cuenta</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre completo</label>
            <input value={name} name="name" placeholder="Ingresa nombre completo" id="name"/>
            <label htmlFor="email">Correo</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Ingresa correo" id="email" name="email" />
            <label htmlFor="password">Contraseña</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Ingresa contraseña" id="password" name="password" />
            <button type="submit">Crear cuenta</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Da click aquí para que pueda iniciar sesión.</button>
    </div>
    )
}