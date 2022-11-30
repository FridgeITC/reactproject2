import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect , useState} from 'react';

import axios from '../Config/axios';

import "../Assets/Styles/base.css";



function createData(refrigerador, empresa, ajenos, ocupacion, eliminar, editar) {
  return {refrigerador, empresa, ajenos, ocupacion, eliminar, editar};
}

const rows = [
  createData('Refrigerador 1', 'Coca Cola', 'Encontrado', '80%', 'Eliminar', 'Editar'),
  createData('Refrigerador 2', 'Coca Cola', 'Encontrado', '70%', 'Eliminar', 'Editar'),
];

export default function TableLocal() {

    const [refrigeradores, setRefrigeradores] = useState([]);

  useEffect(() => {
    axios.post('/fridge/', {'local': 1})
    .then((res) => {
      setRefrigeradores(res.data)
    })
    .catch(error => {console.log(error)})
  }, [])

  return (
    <>
    <div style={{display: 'flex', alignItems: 'center'}}>
        <p className='title'>Oxxo 1</p>
        <a href="" className='a-tag'>Eliminar</a>
        <a href="" className='a-tag'>Editar</a>
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, width: '60%' }} aria-label="local table">
        <TableHead>
          <TableRow>
            <TableCell>Refrigerador</TableCell>
            <TableCell align="right">Empresa</TableCell>
            <TableCell align="right">Productos ajenos</TableCell>
            <TableCell align="right">% de ocupación</TableCell>
            <TableCell align="right">Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {refrigeradores.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.thirdPartyProducts}</TableCell>
              <TableCell align="right">{row.occupancy}</TableCell>
              <TableCell align="right">
                <a href="" className='a-tag' align='right'>Eliminar</a>
              </TableCell>
            </TableRow>

          ))}

        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
