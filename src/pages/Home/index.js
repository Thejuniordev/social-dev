import React from 'react';
import Header from './components/Header';
// import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './components/Nav';
import Feed from './components/Feed';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        padding: 20
    },
    toolbar: {
        minHeight: 60,
    }
})

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <Nav />
                        <Feed />
                    </Box>
                </Container>
            </main>
        </div>
    )
}

export default Home;