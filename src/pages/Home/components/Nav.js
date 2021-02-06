import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import { ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        padding: 15,
        width: 275,
        marginRight: 20
    },
    button: {
        width: '100%',
    }
});

const tags = [
    { id: 1, name: 'react'},
    { id: 2, name: 'javascript'},
    { id: 3, name: 'node'},
    { id: 4, name: 'php'},
    { id: 5, name: 'java'},
    { id: 6, name: 'frontend'},
]

function Nav() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar grátis</Button>
            <ListSubheader>{ 'Tags em alta' }</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}></ListItemText>
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais tags
            </ListItem>
        </Paper>
    )
}

export default Nav;