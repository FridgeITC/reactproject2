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

export default function ModalAgregaLocal() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button style={{marginTop: '1rem'}} variant="outlined" onClick={handleClickOpen}>
        Agregar local
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Agregar local</DialogTitle>
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
              <InputLabel htmlFor="max-width">Zona</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false}>Zona Norte</MenuItem>
                <MenuItem value="xs">Zona Sur</MenuItem>
                <MenuItem value="sm">Zona Oriente</MenuItem>
                <MenuItem value="md">Zona Poniente</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            autoFocus
            margin="dense"
            id="name_local"
            label="Nombre del local"
            type="text"
            variant="standard"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width: '50%',
              }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="num_rows"
            label="Número de hileras"
            type="number"
            variant="standard"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width: '50%',
              }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}