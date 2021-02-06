import React from 'react';
import { Button } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    marginButton: {
        marginRight: 15
    },
    bell: {
        marginRight: 15
    }
})
function Header() {

    const classes = useStyles();
    return (
        <AppBar position="fixed" color="inherit">
            <Toolbar>
                <img src="/images/logo192.png" alt="logo" className={classes.img} />
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button variant="contained" color="primary" className={classes.marginButton}>Novo Post</Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange} />

                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;