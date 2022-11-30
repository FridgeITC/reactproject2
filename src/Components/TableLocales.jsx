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

export default function TableLocales({refresh}) {

  const params = useParams();

  const [locales, setLocales] = useState([]);

  const navigate = useNavigate();

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

  const handleRedirect  = (e)=>{
    const {id} = e.target
    navigate('/local/'+id)
  }
  

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" className="table-content">
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
              <TableCell className='local-send' component="th" scope="row" onClick={handleRedirect} id={row.id}>
                {row.name}&nbsp;
                <LaunchIcon className='launch-icon' />
              </TableCell>
              <TableCell align="right">{row.zoneName}</TableCell>
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
