import React from 'react';
import BasicTable from '../Components/TableLocales';
import ModalAgregaLocal from '../Components/ModalAgregaLocal';
import ModalAgregaRefri from '../Components/ModalAgregaRefri.jsx';

const Home = () => {
  return (
    <div style={{ width: '90vw', margin: 'auto' }}>
      <BasicTable />
      <ModalAgregaLocal />
      {/* <ModalAgregaRefri /> */}
    </div>
  );
};

export default Home;
