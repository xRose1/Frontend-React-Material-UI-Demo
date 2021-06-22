import React from 'react';
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

export default function BottomCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Arsenal Vs Sporting CP
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    To Win
                </Typography>
                <Button variant="outlined">Arsenal 1.2</Button>
                <Button variant="outlined">Sporting Cp 3</Button>
                <Typography className={classes.pos} color="textSecondary">
                    To Score First
                </Typography>
                <Button variant="outlined">Alexis 3.1</Button>
                <Button variant="outlined">Giroud 2.1</Button>
                <Button variant="outlined">Lacazette 2.1</Button>
            </CardContent>
        </Card>
    );
}
