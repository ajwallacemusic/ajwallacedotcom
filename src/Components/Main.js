import React from 'react';

import ajwmusic from '../static/images/ajwmusic.png';
import computer from '../static/images/computer.png';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import withStyles from "@material-ui/core/styles/withStyles";

const styles1 = {
    overlay: {
        position: 'absolute',
        display: 'inline',
        top: '20px',
        width: '100%',
        textAlign: 'center',
        color: 'white',
    }
};


function Main() {
    return (
        <Container maxWidth="false">
            <Grid container flex direction="row" justify="center">
                <Grid item xl={9} lg={10} md={12} sm={9} xs={12}>
                    <div style={{marginTop: "7em", marginBottom: "7em", marginLeft: 10, marginRight: 10}}>
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
                                    image={ajwmusic}
                                    maxWidth={600}
                                />
                                <div style={styles1.overlay}>
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
                                    image={computer}
                                    maxWidth={600}
                                />
                                <div style={styles1.overlay}>
                                    <Typography variant="h4">Code</Typography>
                                </div>
                            </a>
                        </CardActionArea>

                    </Card>
                </Grid>

            </Grid>
        </Container>
    );
}

export default withStyles(styles1)(Main);