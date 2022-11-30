import {Alert, AlertTitle} from "@mui/material";

const createAlert = (isSuccess)=>{
    if(isSuccess){
      return <Alert severity={'success'}>
        <AlertTitle>Operacion realizada con exito</AlertTitle>
      </Alert>
    }
    return <Alert severity={'error'}>
      <AlertTitle>Operacion fallida</AlertTitle>
    </Alert>
  }
  export default createAlert