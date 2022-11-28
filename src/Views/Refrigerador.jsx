import React from 'react';
import TableLocales from '../Components/TableLocales';
import ModalAgregaLocal from '../Components/ModalAgregaLocal';
import ModalAgregaRefri from '../Components/ModalAgregaRefri.jsx';
import TableRefri from '../Components/TableRefri';

import "../Assets/Styles/base.css";

const Refrigerador = () => {
  return (
    <div style={{ width: '90vw', margin: 'auto' }}>
      <TableRefri />
    </div>
  );
};

export default Refrigerador;
