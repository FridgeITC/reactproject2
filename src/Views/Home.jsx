import React from 'react';
import TableLocales from '../Components/TableLocales';
import ModalAgregaLocal from '../Components/ModalAgregaLocal';
import ModalAgregaRefri from '../Components/ModalAgregaRefri.jsx';
import ModalDeleteLocal from '../Components/ModalDeleteLocal.jsx';
import TableRefri from '../Components/TableRefri';

import "../Assets/Styles/base.css";
import { useState } from 'react';

const Home = () => {

  const [refresh, setRefresh] = useState(0);

  return (
    <div style={{ width: '90vw', margin: 'auto' }}>
      <TableLocales refresh={refresh} />
      <ModalAgregaLocal refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
};

export default Home;
