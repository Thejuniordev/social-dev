import React from 'react';
import Header from './components/Header';
// import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './components/Nav';
import Feed from './components/Feed';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        display: 'flex',
        width: '1200px',
        margin: '0 auto'
    }
})

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />

            <main className={classes.main}>
                <Nav></Nav>
                <Feed></Feed>
            </main>
        </div>
    )
}

export default Home;