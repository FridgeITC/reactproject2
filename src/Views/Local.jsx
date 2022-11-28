import React from 'react';
import TableLocal from '../Components/TableLocal';
import ModalAgregaLocal from '../Components/ModalAgregaLocal';
import ModalAgregaRefri from '../Components/ModalAgregaRefri.jsx';
import TableRefri from '../Components/TableRefri';

import "../Assets/Styles/base.css";

const Local = () => {
  return (
    <div style={{ width: '90vw', margin: 'auto' }}>
      <TableLocal />
      <ModalAgregaRefri />
    </div>
  );
};

export default Local;
