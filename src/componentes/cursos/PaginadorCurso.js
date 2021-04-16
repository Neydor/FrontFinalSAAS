import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableRow, 
  TableCell,
TableContainer,
Paper
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import style from '../Tool/Style';
import { paginacionCurso } from '../../actions/CursoAction';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const ActualizarCursos = (props) => {

  const [cursos, setCursos] = useState([{
    id_curso: '',
    estado: '',
    codigo_curso: '',
    nombre_curso: '',
    descripcion_curso: '',
    creditos_curso: '',
    categoria_curso: ''
  }])

  useEffect(() => {
    console.log("Entra a useEffect")
    paginacionCurso().then(response => {
      console.log("Respuesta consulta cursos", response.data)
      // var respuesta = response.data;
      // respuesta.estado = String(respuesta.estado);
      // respuesta.id_ciudad = String(respuesta.id_ciudad);
      setCursos(response.data)
    })
  }, [])

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}>
        <Typography component="h1" variant="h5">
          Tabla de Cursos
                </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Codigo</TableCell>
                <TableCell align="right">Descripcion</TableCell>
                <TableCell align="right">Creditos</TableCell>
                <TableCell align="right">Categoria</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cursos.map((row) => (
                <TableRow>
                  <TableCell component="th" scope="row">{row.id_curso}</TableCell>
                  <TableCell component="th" scope="row">{row.nombre_curso}</TableCell>
                  <TableCell component="th" scope="row">{row.codigo_curso}</TableCell>
                  <TableCell align="right">{row.descripcion_curso}</TableCell>
                  <TableCell align="right">{row.creditos_curso}</TableCell>
                  <TableCell align="right">{row.categoria_curso}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div >
    </Container >
  );
}

export default ActualizarCursos;