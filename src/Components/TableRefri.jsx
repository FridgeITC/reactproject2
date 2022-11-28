import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "../Assets/Styles/base.css";

function createData(producto, etiqueta, total, ubicacion) {
  return {producto, etiqueta, total, ubicacion};
}

function createMissing(coordenada){
    return {coordenada};
}

const rows = [
  createData('Coca Cola', '4', '10'),
  createData('Sprite', '2', '8'),
  createData('Fanta', '4', '10'),
  createData('No identificado', '4', '10'),
];

const missing = [
    createMissing('(0,2)'),
    createMissing('(2,2)'),
]

export default function TableRefri() {
  return (
    <>
    <div style={{display: 'flex', alignItems: 'center'}}>
        <p className='title'>Refrigerador 1</p>
        <a href="" className='a-tag'>Eliminar</a>
        <a href="" className='a-tag'>Editar</a>

    </div>
    <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
        <div className='square'>
            <p>Última actualización</p>
            <p className='title'>Hace 20 min.</p>
        </div>
        <div className='square'>
            <p>Líneas vacías</p>
            <p className='title'>2</p>
        </div>
        <div className='square'>
            <p>Líneas etiquetadas</p>
            <p className='title'>4</p>
        </div>
        <div className='square'>
            <p>Total de líneas</p>
            <p className='title'>10</p>
        </div>
    </div>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350, width: '60%' }} aria-label="refri table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Sin etiqueta</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.producto}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.producto}
              </TableCell>
              <TableCell align="right">{row.etiqueta}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
            <TableCell>Líneas vacías</TableCell>
        </TableHead>
        <TableBody>
            {missing.map((missed) =>(
                <TableRow key={missed.coordenada}>
                    <TableCell>{missed.coordenada}</TableCell>
                </TableRow>

            ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
