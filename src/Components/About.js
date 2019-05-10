import React from 'react';
import Typography from "@material-ui/core/es/Typography/Typography";
import Container from "@material-ui/core/Container";
import ajwmusic from "../static/images/ajwmusic.png";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import Link from "@material-ui/core/Link";


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit *1,
    },
    card: {
        paddingBottom: theme.spacing.unit * 3,
    }
});

function About(props) {
    const { classes } = props;
    return (
        <Container>
            <Grid container justify="center" className={classes.card}>
            <Grid item md={6} xs={12} justify="center">
                <Card elevation={0} square>
                            <CardMedia
                                component="img"
                                image={ajwmusic}
                                maxWidth={600}
                            />


                </Card>
            </Grid>
            </Grid>

            <Grid container justify="center">
                <Grid item md={6} sm={10} xs={12}>
                <Typography variant="body1" paragraph className={classes.paper}>
                I love old, broken-in guitars, hiking in the rainy woods, and anything DIY.
                I'm equally at home exploring nature as I am the inside of a guitar or microphone — observing all the individual components of a thing and seeing how those things work together.
                I guess that's why developing makes so much sense to me — a web app is just a bunch of different components that fit together in a succinct way, producing
                something for others to enjoy.
                </Typography>
                </Grid>
            </Grid>
                <Grid container justify="center">
                <Grid item md={6} sm={10} xs={12}>
                <Typography variant="body1" className={classes.paper}>
                I love the process, the tinkering, the problem solving, the creating and designing.
                My clients love the end product — a beautifully designed solution, elegant in both aesthetics and function.
                We both enjoy the time spent collaborating and working together. If you have a project you're passionate about,
                    or you wanna talk about WWII era Gibson acoustic guitars,
                    or debate Pro Tools versus Ableton Live, then hit me up.
                </Typography>
                </Grid>
                    <Grid container justify="center">
                        <Grid item md={6} sm={10} xs={12}>
                            <Typography variant="body1" paragraph className={classes.paper}>
                                <ul style={{listStyle: "none", marginLeft: "-2.5rem"}}>
                                    <li><Link href="mailto:ajwallacemusic@gmail.com" target="_top">ajwallacemusic@gmail.com</Link></li>
                                    <li><Link href="https://s3-us-west-2.amazonaws.com/ajwallace.com/images/AJ+Wallace+Resume.pdf">resumé</Link></li>
                                </ul>

                            </Typography>
                        </Grid>
                    </Grid>
            </Grid>
        </Container>
    );
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);