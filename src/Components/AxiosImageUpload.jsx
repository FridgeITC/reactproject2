import React from 'react';
import axios from '../Config/axios';
import { useState } from "react";

import "../Assets/Styles/base.css";

const AxiosImageUpload = () => {
    const [selectedFile, setSelectedFile] = React.useState('');

    const handleFileSelect = (event) => {
        console.log(event.target.files)
        setSelectedFile(event.target.files[0])
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('fridgeId', 1);
        axios.post('/image', formData).then((res) => {
            console.log("Hola Prueba",res)
        }).catch(error => {console.log(error)})
    }

    return (
        <form onSubmit={handleSubmit} className='upload-form'>
            <input type="file" onChange={handleFileSelect} />
            <button type='submit'>Submit</button>
        </form>
    )
};

export default AxiosImageUpload;