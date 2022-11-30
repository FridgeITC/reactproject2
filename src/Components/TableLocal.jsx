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

import AxiosImageUpload from './AxiosImageUpload';

export default function TableLocal({refresh}) {

  const params = useParams();

  const [refrigeradores, setRefrigeradores] = useState([]);
  const [local, setLocal] = useState([]);

  useEffect(() => {
    axios.post('/fridge/', {'local': params.id})
    .then((res) => {
      setRefrigeradores(res.data)
    })
    .catch(error => {console.log(error)})
  }, [refresh])

  useEffect(() => {
    axios.post('/local/get', {'id': params.id})
    .then((res) => {
      setLocal(res.data)
    })
    .catch(error => {console.log(error)})
  }, [])

  const handleDeleteFridge = (e)=>{
    const {id} = e.target
    axios.post('/fridge/delete', {"id":id}).then(res => console.log(res))
  }

  return (
    <>
    <div style={{display: 'flex', alignItems: 'center'}}>
        <p className='title'>{local.name}</p>
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
            <TableCell align="left" style={{paddingLeft: '1rem'}}>Imagen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {refrigeradores.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               Refrigerador {row.id}
              </TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.thirdPartyProducts}</TableCell>
              <TableCell align="right">{(row.taggedLines + row.untaggedLines) * 100 / row.capacity}</TableCell>
              <TableCell align="right">
                <button onClick={handleDeleteFridge} className='a-tag' align='right' id={row.id}>Eliminar</button>
              </TableCell>
              <TableCell align="right">
                <AxiosImageUpload fridgeId={row.id} />
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
