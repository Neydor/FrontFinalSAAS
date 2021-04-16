import React from "react";
import { List, ListItem, Avatar, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import FotoUsuarioTemp from "../../../logo.svg";

export const MenuDerecha = ({ classes, usuario, salirSesion }) => (
  <div className={classes.list}>
    <List>
      <ListItem button component={Link}>
        <Avatar src="https://phantom-elmundo.unidadeditorial.es/4e8e03cd098f33bf049ca7ed33e609d0/resize/414/f/jpg/assets/multimedia/imagenes/2019/05/14/15578455293413.jpg" />
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary={usuario ? usuario.nombreCompleto : ""}
        />
      </ListItem>
      <ListItem button onClick={salirSesion}>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Salir"
        />
      </ListItem>
    </List>
  </div>
);
