import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Grid from "@material-ui/core/es/Grid/Grid";
import Button from "@material-ui/core/es/Button/Button";
import Typography from "@material-ui/core/es/Typography/Typography";
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

function Header(props){
    const {classes} = props;
    return (
        <div>
            <AppBar position="static" elevation={0} color="default" classes={{root: classes.colorDefault}}>
                <Toolbar>
                    <Grid container justify="space-between">
                        {/*<Grid item xs={1}>*/}
                        {/*<IconButton edge="start">*/}
                        {/*<MenuIcon/>*/}
                        {/*</IconButton>*/}
                        {/*</Grid>*/}
                        <Grid item md={4} xs={3}>
                            <Button href="#">Home</Button>
                        </Grid>
                        <Grid item md={4} xs={6}>
                            <a href="#" style={{textDecoration: 'none', color: 'black'}}>
                                <Typography align="center" variant="h3">
                                    AJ WALLACE
                                </Typography></a>
                        </Grid>
                        <Grid item md={4}xs={3}>
                            <Grid container justify="flex-end">
                                <Button edge="end"
                                        href="https://ajwallacemusic.com/contact">Contact</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    ) }

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);