import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(local, zona, eliminar, editar) {
  return {local, zona, eliminar, editar};
}

const rows = [
  createData('Oxxo 1', 'Zona Sur', 'Eliminar', 'Editar'),
  createData('Oxxo 2', 'Zona Norte', 'Eliminar', 'Editar'),
  createData('Oxxo 3', 'Zona Norte', 'Eliminar', 'Editar'),
];

export default function TableLocales() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, width: '60%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Local</TableCell>
            <TableCell align="right">Zona</TableCell>
            <TableCell align="right">Acción</TableCell>
            <TableCell align="right">Edición</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.local}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.local}
              </TableCell>
              <TableCell align="right">{row.zona}</TableCell>
              <TableCell align="right">{row.eliminar}</TableCell>
              <TableCell align="right">{row.editar}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
