import React, {useEffect, useState} from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [market, setMarkets] = useState([])

    useEffect(() => { axios.get('http://www.mocky.io/v2/59f08692310000b4130e9f71')
        .then(res => {
            setMarkets(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Man. United vs Chelsea
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    To Win
                </Typography>
                <Button variant="outlined">Man United 1.2</Button>
                <Button variant="outlined">Chelsea 2.2</Button>
            </CardContent>
        </Card>
    );
}
