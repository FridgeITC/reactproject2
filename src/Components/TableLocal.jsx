import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect , useState} from 'react';
import { useNavigate } from "react-router-dom";
import LaunchIcon from '@mui/icons-material/Launch';

import axios from '../Config/axios';

import "../Assets/Styles/base.css";
import { useParams } from 'react-router-dom';

import AxiosImageUpload from './AxiosImageUpload';

export default function TableLocal({refresh}) {

  const params = useParams();

  const [refrigeradores, setRefrigeradores] = useState([]);
  const [local, setLocal] = useState([]);
  const navigate = useNavigate();

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
    axios.post('/fridge/delete', {"id":id}).then((res) =>{
      const {status} = res.data
      if (status === 200){
        window.location.reload()
      }
    })
  }

  const handleDeleteLocal = (e)=>{
    const {id} = e.target
    axios.post('/local/delete', {"id":id}).then(res => console.log(res))
    navigate('/')
    window.location.reload();
  }

  const handleRedirect  = (e)=>{
    const {id} = e.target
    navigate('/refrigerador/'+id)
  }

  return (
    <>
    <div style={{display: 'flex', alignItems: 'center'}}>
        <p className='title'>{local.name}</p>
        {/* <button onClick={handleDeleteLocal} className='a-tag' align='right' id={local.id}>Eliminar</button> */}
    </div>
    <TableContainer component={Paper}>
      <Table className="table-content" aria-label="local table">
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
              <TableCell className='refri-send' component="th" scope="row" onClick={handleRedirect} id={row.id}>
               Refrigerador {row.id}
               <LaunchIcon className='launch-icon' />
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
