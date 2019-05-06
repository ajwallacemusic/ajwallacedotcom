import React from 'react';
import greenmountain from './static/images/greenmountain.jpg'
import bwmountain from './static/images/bwmountain.jpg'
import Container from "@material-ui/core/Container";
import './App.css';
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';

const styles = {
    colorDefault: {
        background: 'white',
    },
    overlay: {
        position: 'absolute',
        display: 'inline',
        top: '20px',
        width: '100%',
        textAlign: 'center',
        color: 'white',
    },
    card: {
        position: 'relative'
    }
};

function App(props) {
    const {classes} = props;
    return (
        <div>
            <div>
                <Box boxShadow={0}>
                    <AppBar position="static" elevation={0} color="default" classes={{root: classes.colorDefault}}>
                        <Toolbar>
                            <Grid container justify="space-between">

                                <Hidden mdUp>
                                    <Grid item xs={1}>
                                        <IconButton edge="start">
                                            <MenuIcon/>
                                        </IconButton>
                                    </Grid>
                                </Hidden>

                                <Hidden smDown>
                                    <Grid item md={4}>
                                        <Button href="#">Home</Button>
                                    </Grid>
                                </Hidden>

                                <Grid item md={4} xs={11}>
                                    <a href="#" style={{textDecoration: 'none', color: 'black'}}>
                                        <Typography align="center" variant="h3">
                                            AJ WALLACE
                                        </Typography></a>
                                </Grid>

                                <Hidden smDown>
                                    <Grid item md={4}>
                                        <Grid container justify="flex-end">
                                            <Button edge="end"
                                                    href="https://ajwallacemusic.com/contact">Contact</Button>
                                        </Grid>
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
            <Container maxWidth="false">
                <Grid container flex direction="row" justify="center">
                    <Grid item xl={9} lg={10} md={12} sm={9} xs={12}>
                        <div style={{marginTop: 200, marginBottom: 200, marginLeft: 10, marginRight: 10}}>
                            <Typography variant="h2" align="center" style={{lineHeight: 1.5}}>
                                <h2>An old beat-up guitar, a computer screen covered in code, and copious amounts of intense
                                    creativity.</h2>
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
                <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                    <Grid item md={6} xs={12} justify="center">

                        <Card style={{position: 'relative'}}>
                            <CardActionArea>
                                <a href="https://ajwallacemusic.com" target="_blank">
                                    <CardMedia
                                        component="img"
                                        image={greenmountain}
                                        maxWidth={600}
                                    />
                                    <div style={styles.overlay}>
                                        <Typography variant="h4">Music</Typography>
                                    </div>
                                </a>

                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={6} xs={12} justify="center">
                        <Card>
                            <CardActionArea>
                                <a href="https://github.com/ajwallacemusic">
                                    <CardMedia
                                        component="img"
                                        image={bwmountain}
                                        maxWidth={600}
                                    />
                                    <div style={styles.overlay}>
                                        <Typography variant="h4" >Code</Typography>
                                    </div>
                                </a>
                            </CardActionArea>

                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
