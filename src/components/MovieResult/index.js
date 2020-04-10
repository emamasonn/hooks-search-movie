import React from 'react'
import { Card, Grid, Typography, Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

import styles from './style'


const MovieResult = ({ Title, Year, Type, imdbID, Poster, history}) => {
    const classes = styles()

    const handleSeeMovieClick = () => {
        history.push(`/movie/${imdbID}`);
    }

    return(
        <Card className={ classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className={ classes.poster}/>
                </Grid>
                <Grid item className={classes.titleContainer}>
                    <Typography>{ Title }</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color="primary" variant="contained" onClick={handleSeeMovieClick}>See more</Button>
                </Grid>
            </Grid>
        </Card>
    );
}


export default withRouter(MovieResult);
