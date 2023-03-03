import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import useStyles from './styles';
import NavBar from './NavBar/NavBar';
import Movies from './Movies/Movies';
import Actors from './Actors/Actors';
import MovieInformation from './MovieInformation/MovieInformation';
import Profile from './Profile/Profile';

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
