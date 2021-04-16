import React, { useState, useEffect } from "react";
import { paginacionSede } from "../../actions/CursoAction";
import {
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  Table,
  TableRow,
  TableCell,
  TablePagination,
  Hidden,
  Grid,
  TextField,
} from "@material-ui/core";
import ControlTyping from "../Tool/ControlTyping";

const PaginadorSede = () => {

  const [textoBusquedaSede, setTextoBusquedaSede] = useState("");
  const typingBuscadorTexto = ControlTyping(textoBusquedaSede, 900);

  const [paginadorRequest, setPaginadorRequest] = useState({
    titulo: "",
    numeroPagina: 0,
    cantidadElementos: 5,
  });

  const [paginadorResponse, setPaginadorResponse] = useState({
    listaRecords: [],
    totalRecords: 0,
    numeroPaginas: 0,
  });

  useEffect(() => {

    

    const obtenerListaSede = async () => {

      let tituloVariant = "";
      let paginaVariant = paginadorRequest.numeroPagina + 1;

      if(typingBuscadorTexto){
        tituloVariant = typingBuscadorTexto;
        paginaVariant = 1
      }

      const objetoPaginadorRequest = {
        titulo: tituloVariant,
        numeroPagina: paginaVariant,
        cantidadElementos: paginadorRequest.cantidadElementos,
      };

      const response = await paginacionSede(objetoPaginadorRequest);
      setPaginadorResponse(response.data);
    };

    obtenerListaSede();
  }, [paginadorRequest, typingBuscadorTexto]);

  const cambiarPagina = (event, nuevaPagina) => {
    setPaginadorRequest((anterior) => ({
      ...anterior,
      numeroPagina: parseInt(nuevaPagina),
    }));
  };

  const cambiarCantidadRecords = (event) => {
    setPaginadorRequest((anterior) => ({
      ...anterior,
      cantidadElementos: parseInt(event.target.value),
      numeroPagina: 0,
    }));
  };

  return (
    <div style={{padding:"10px", width:"100%"}}>
      <Grid container style={{paddingTop:"20px", paddingBottom:"20px"}}>
        <Grid item xs={12} sm={4} md={6}>
            <TextField 
              fullWidth
              name="textoBusquedaSede"
              variant="outlined"
              label="Busca tu Sede"
              onChange = {e => setTextoBusquedaSede(e.target.value)}
            />
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Sede</TableCell>
              <Hidden mdDown>
                <TableCell align="left">Descripcion</TableCell>
                <TableCell align="left">Fecha Publicacion</TableCell>
                <TableCell align="left">Ubicacion</TableCell>
              </Hidden>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginadorResponse.listaRecords.map((sede) => (
              <TableRow key={sede.nombre}>
            
                <TableCell align="left">{sede.Nombre}</TableCell>

                <Hidden mdDown>
                    <TableCell align="left">{sede.Descripcion}</TableCell>
                    <TableCell align="left">
                    {new Date(curso.FechaPublicacion).toLocaleString()}
                    </TableCell>
                    <TableCell align="left">{curso.Ubicacion}</TableCell>
                </Hidden>
                
            
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 25]}
        count={paginadorResponse.totalRecords}
        rowsPerPage={paginadorRequest.cantidadElementos}
        page={paginadorRequest.numeroPagina}
        onChangePage={cambiarPagina}
        onChangeRowsPerPage={cambiarCantidadRecords}
        labelRowsPerPage="Sede por ciudad"
      />
    </div>
  );
};

export default PaginadorSede;
