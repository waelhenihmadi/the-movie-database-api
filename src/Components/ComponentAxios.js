import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function ComponentAxios() {
    const [data, setData] = useState({ results: [] });

    useEffect( async () => {
        const fetchData = async () => {
            const result = await axios(
                'https://api.themoviedb.org/3/movie/now_playing?api_key=3f1f73669f79bc173ad98f5942f91fb1&language=en-US&page=1',
            );

            setData(result.data);

        };
        console.log({data:data});
       await fetchData();
    }, []);

    return (

    <div >
        <Grid container spacing={3}>

            {data.results.map(item => (
                <Grid item xs={12} sm={6} md={6} lg={3}>
                   <Paper>

                        <img width='100%' src={"https://image.tmdb.org/t/p/original" + item.poster_path}/>
                   </Paper>
                </Grid>
            ))}

        </Grid>
    </div>
    );
}

export default ComponentAxios;