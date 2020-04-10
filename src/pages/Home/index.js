import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MovieIcon } from '../../icons'


import styles from './style';

export default function Home({ history }) {
  const [searchText, setSearchText] = useState('')

  const classes = styles();

  const handleSearchText = (event) => {
    setSearchText(event.target.value)
  }

  const handleCleanTextClick = (event) => {
    setSearchText('');
  }

  const handleSearchTextClick = (event) => {
    history.push(`/results?movieName=${ searchText }`)
  }

  return (
      <Container className={classes.container}>
        <Card className={classes.cardContainer}>
          <Grid container className={classes.titleGridContainer}>
            <Grid>
              <Typography className={classes.title}>Bienvenido!</Typography>
            </Grid>
            <Grid>
              <label><MovieIcon className={classes.movieIcon}/></label>
            </Grid>
          </Grid>
          <TextField 
            className={classes.textFieldSearch}
            value={searchText}
            placeholder="Buescar..."
            onChange={handleSearchText}
          />
          <Grid className={classes.buttonContainer}>
            <Button variant="container" onClick={handleCleanTextClick}>Limpiar</Button>
            <Button className={classes.searchButton} variant="container" color="primary" onClick={handleSearchTextClick}>Buscar</Button>
          </Grid>
        </Card>
      </Container>
  );
}