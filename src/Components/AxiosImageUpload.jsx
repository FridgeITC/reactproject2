import React from 'react';
import axios from '../Config/axios';
import { useState } from 'react';
import { Snackbar } from '@mui/material';
import createAlert from './createAlert';

import '../Assets/Styles/base.css';

const AxiosImageUpload = ({ fridgeId }) => {
  const [selectedFile, setSelectedFile] = React.useState('');
  const [status, setStatus] = useState({ toastOpened: false, status: 200 });

  const handleFileSelect = (event) => {
    console.log(event.target.files);
    setSelectedFile(event.target.files[0]);
  };

  const handleReload = () => {
    window.location.reload();
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('fridgeId', fridgeId);
    axios
      .post('/image', formData)
      .then((res) => {
        console.log(res);
        const toastOpened = true;
        if (res.data.done !== undefined) setStatus({ status: 0, toastOpened });
        else setStatus({ status: 200, toastOpened });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Snackbar
        open={status.toastOpened}
        autoHideDuration={1500}
        onClose={status.status == 200 ? handleReload : console.log(status)}
      >
        {createAlert(status.status == 200)}
      </Snackbar>
      <form onSubmit={handleSubmit} className='upload-form'>
        <input type='file' onChange={handleFileSelect} />
        <button type='submit' className='upload-button'>
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default AxiosImageUpload;
