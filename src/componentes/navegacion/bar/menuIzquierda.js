import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import EditSharp from '@material-ui/icons/EditSharp';
import { Link } from 'react-router-dom';

export const MenuIzquierda = ({classes}) => (
    <div className = {classes.list}>
        <List>
            <ListItem component={Link} button to="/auth/perfil">
                <i className="material-icons">account_box</i>
                <ListItemText classes={{primary: classes.listItemText}} primary="Perfil" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem component={Link} button to="/curso/nuevo">
                <i className="material-icons">add_box</i>
                <ListItemText classes={{primary: classes.listItemText}} primary="Nuevo Curso" />
            </ListItem>
            <ListItem component={Link} button to="/curso/paginador">
                <i className="material-icons">menu_book</i>
                <ListItemText classes={{primary: classes.listItemText}} primary ="Lista Cursos" />
            </ListItem>
            <ListItem component={Link} button to="/curso/editar">
            <EditSharp/>
                <ListItemText classes={{primary: classes.listItemText}} primary ="Editar Curso"/>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem component={Link} button  to="/sede/nuevo">
                 <i className="material-icons">person_add</i>
                 <ListItemText classes={{primary: classes.listItemText}} primary="Nueva sede"/>
            </ListItem>
            <ListItem component={Link} button  to="/sede/editar">
            <EditSharp/>
                 <ListItemText classes={{primary: classes.listItemText}} primary="Editar Sede"/>
            </ListItem>
        </List>
    </div>
);