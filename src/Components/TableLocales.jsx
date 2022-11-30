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
import { useParams } from 'react-router-dom';

export default function TableLocales({refresh}) {

  const params = useParams();

  const [locales, setLocales] = useState([]);

  useEffect(() => {
    axios.get('/local/')
    .then((res) => {
      setLocales(res.data)
    })
    .catch(error => {console.log(error)})
  }, [refresh])

  const handleDeleteLocal = (e)=>{
    const {id} = e.target
    axios.post('/local/delete', {"id":id}).then(res => console.log(res))
  }
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, width: '60%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Local</TableCell>
            <TableCell align="right">Zona</TableCell>
            <TableCell align="right">Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locales.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.zoneId}</TableCell>
              <TableCell align="right">
                <button onClick={handleDeleteLocal} className='a-tag' align='right' id={row.id}>Eliminar</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
