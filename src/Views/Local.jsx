import React from 'react';
import TableLocal from '../Components/TableLocal';
import ModalAgregaLocal from '../Components/ModalAgregaLocal';
import ModalAgregaRefri from '../Components/ModalAgregaRefri.jsx';
import ModalDeleteLocal from '../Components/ModalDeleteLocal.jsx';
import TableRefri from '../Components/TableRefri';

import '../Assets/Styles/base.css';
import { useState } from 'react';

const Local = () => {
  const [refresh, setRefresh] = useState(0);

  return (
    <div style={{ width: '90vw', margin: 'auto' }}>
      <TableLocal refresh={refresh} />
      <ModalAgregaRefri refresh={refresh} setRefresh={setRefresh} />
      {/* <ModalDeleteLocal /> */}
    </div>
  );
};

export default Local;
