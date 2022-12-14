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

export default function TableRefri() {

  const params = useParams();

  const [refrigerador, setRefrigerador] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    axios.post('/fridge/get', {'id': params.id})
    .then((res) => {
      setRefrigerador(res.data)
      console.log(res.data);

      let n = 0;
      res.data.products.map(product => {
        n+=product.count;
      })
      setTotal(n);
    })
    .catch(error => {console.log(error)})
  }, [])

  return (
    <>
    <div style={{display: 'flex', alignItems: 'center'}}>
        <p className='title'>Refrigerador {refrigerador.id}</p>
        {/* <a href="" className='a-tag'>Eliminar</a>
        <a href="" className='a-tag'>Editar</a> */}

    </div>
    <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
        <div className='square'>
            <p>Última actualización</p>
            <p className='title'>{refrigerador.at}</p>
        </div>
        <div className='square'>
            <p>Líneas vacías</p>
            <p className='title'>{refrigerador.rows && refrigerador.rows - total}</p>
        </div>
        <div className='square'>
            <p>Líneas etiquetadas</p>
            <p className='title'>{refrigerador.taggedLines}</p>
        </div>
        <div className='square'>
            <p>Total de líneas</p>
            <p className='title'>{refrigerador.rows}</p>
        </div>
    </div>
    
    <TableContainer component={Paper}>
      <Table className="table-content" aria-label="refri table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Sin etiqueta</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {refrigerador.products && refrigerador.products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.unlabeled}</TableCell>
              <TableCell align="right">{product.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
