import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "../Assets/Styles/base.css";

function createData(refrigerador, empresa, ajenos, ocupacion, eliminar, editar) {
  return {refrigerador, empresa, ajenos, ocupacion, eliminar, editar};
}

const rows = [
  createData('Refrigerador 1', 'Coca Cola', 'Encontrado', '80%', 'Eliminar', 'Editar'),
  createData('Refrigerador 2', 'Coca Cola', 'Encontrado', '70%', 'Eliminar', 'Editar'),
];

export default function TableLocal() {
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
            <TableCell align="right">Edición</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.refrigerador}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.refrigerador}
              </TableCell>
              <TableCell align="right">{row.empresa}</TableCell>
              <TableCell align="right">{row.ajenos}</TableCell>
              <TableCell align="right">{row.ocupacion}</TableCell>
              <TableCell align="right">{row.eliminar}</TableCell>
              <TableCell align="right">{row.editar}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
