import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';

import axios from '../Config/axios';

// import AxiosImageUpload from './AxiosImageUpload';

export default function ModalAgregaRefri({refresh, setRefresh}) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const params = useParams();

  const [newFridge, setNewFridge] = React.useState({local: params.id}); 


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (action) => {
    if(action === 'confirm') {
      axios.post('/fridge/add', newFridge)
      .then((res) => {
        setRefresh(refresh+1);
      })
      .catch(error => {console.log(error)})
      }
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
    setNewFridge({...newFridge, company: event.target.value});
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const handleRowsChange = (e) => {
    setNewFridge({...newFridge, rows: e.target.value});
  }

  const handleCapacityChange = (e) => {
    setNewFridge({...newFridge, capacity: e.target.value});
  }

  return (
    <React.Fragment>
      <Button style={{marginTop: '1rem'}} variant="outlined" onClick={handleClickOpen}>
        Agregar refrigerador
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Agregar refrigerador</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: '50%',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">Empresa</InputLabel>
              <Select
                name="company"
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value="1">FEMSA</MenuItem>
                <MenuItem value="2">PepsiCo</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            autoFocus
            margin="dense"
            name="num_rows"
            id="num_rows"
            label="Filas"
            type="number"
            variant="standard"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width: '50%',
              }}
            onChange={handleRowsChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="capacity"
            name="capacity"
            label="Capacidad"
            type="number"
            variant="standard"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width: '50%',
              }}
              onChange={handleCapacityChange}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose('cancel')}>Cancelar</Button>
          <Button onClick={() => handleClose('confirm')}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}