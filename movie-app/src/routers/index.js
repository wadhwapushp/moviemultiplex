import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GetMovieList from './../redux/dataapi/movie/Movielistdata';
import MultiplexListdata from './../redux/dataapi/multiplex/MultiplexListdata'
//import Hidden from "@material-ui/core/Hidden";
import Home from './../components/Home';
import MovieDetails from './../components/movie/MovieDetails';
import AddMovie from './../components/movie/AddMovie';
import AddMultiplex from './../components/multiplex/AddMultiplex';
import MultiplexDetails from '../components/multiplex/MultiplexDetails';
import AddMovieAlotments from '../components/alotment/AddMovieAlotments';
import MovieAlotmentsDetails from './../components/alotment/MovieAlotmentsDetails';

import Search from './../components/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Theaters from '@material-ui/icons/Theaters';
import MovMovieCreationRoundedies from '@material-ui/icons/MovieCreationRounded';
import Add from '@material-ui/icons/Add';
import ViewList from '@material-ui/icons/ViewList';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useDispatch } from 'react-redux' ;


const drawerWidth = 240;


export default function MovieRouter() {
    const classes = useStyles();
    const gridclasses = useGridStyles();
    const dispatch = useDispatch() ;


return (<div>
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar} align="center">

                    <Toolbar>

                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap >
                            Movie Multiplex Management System
                        </Typography>
                        {/* <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <Link to="/search">
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                /> </Link>
                        </div> */}

                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="User Account"
                        >
                            <AccountCircle />
                        </IconButton>

                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            {[<Link to="/"> Home <SearchIcon /></Link>,
                            <Link to="/addmovie">Movie<Add /></Link>,
                            <Link onClick={(e)=>dispatch(GetMovieList()) }  to="/moviedetails">Movie List<ViewList /></Link>,
                            <Link to="/addmultiplex">Multiplex<Add /></Link>,
                            <Link onClick={() => dispatch(MultiplexListdata())} to="/multiplexdetails">Multiplex List<ViewList /></Link>

                            ].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <MovMovieCreationRoundedies /> : <Theaters />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {[<Link to="/addmoviealotments">Allot Movies <Add /></Link>,
                            <Link onClick={() => dispatch({ type: 'LIST_ALLOTED' , payload : [] })} to="/moviealotmentsdetails">Alloted List<ViewList /></Link>
                            ].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <MovMovieCreationRoundedies /> : <Theaters />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </div>

            <main className={classes.content} variant="permanent" align="center">

                <Toolbar />
                    <div className={gridclasses.root}>
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={3}>

                                <React.Fragment>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Paper className={gridclasses.paper}>
                                            <Switch>
                                                <Route path="/addmovie">
                                                    <AddMovie />
                                                </Route>
                                                <Route  path="/moviedetails">
                                                    <MovieDetails />
                                                </Route>
                                                <Route path="/multiplexdetails">
                                                    <MultiplexDetails  />
                                                </Route>
                                                <Route path="/addmultiplex">
                                                    <AddMultiplex />
                                                </Route>
                                                <Route path="/addmoviealotments">
                                                    <AddMovieAlotments />
                                                </Route>
                                                <Route path="/moviealotmentsdetails">
                                                    <MovieAlotmentsDetails />
                                                </Route>
                                                <Route path="/search">
                                                    <Search />
                                                </Route>
                                                <Route path="/">
                                                    <Home />
                                                </Route>
                                            </Switch>
                                        </Paper>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                        </Grid>
                    </div>
            </main>
        </Router>
    </div>

    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 100,
        padding: theme.spacing(3),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    }
}));

const useGridStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));