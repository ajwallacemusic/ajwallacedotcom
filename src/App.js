import React from 'react';
import logo from './logo.svg';
import ajwCover from './ajwCover.png'
import computer from './static/images/computer.jpg'
import bwcomputer from './static/images/bwcomputer.jpg'
import greenmountain from './static/images/greenmountain.jpg'
import bwmountain from './static/images/bwmountain.jpg'
import Container from "@material-ui/core/Container";
import './App.css';
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import  shadows  from "@material-ui/system/shadows";
import Box from "@material-ui/core/Box";

function App() {
  return (
      <div>
      <div>
          <Box boxShadow={0}>
      <AppBar position="static">
          <Toolbar>
              <Grid container justify="space-between">

                  <Hidden mdUp>
                      <Grid item xs={1}>
                      <IconButton edge="start">
                          <MenuIcon />
                      </IconButton>
                      </Grid>
                  </Hidden>

                  <Hidden smDown>
                      <Grid item md={4} >
                          <Button>Home</Button>
                      </Grid>
                  </Hidden>

                  <Grid item md={4} xs={11}>
                      <Typography align="center" variant="h3">
                          AJ Wallace
                      </Typography>
                  </Grid>

                  <Hidden smDown>
                      <Grid item md={4}>
                          <Grid container justify="flex-end">
                              <Button>Music</Button>
                              <Button>Code</Button>
                              <Button edge="end">Contact</Button>
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
                  <div style={{marginTop: 200, marginBottom: 200, marginLeft:10, marginRight: 10}}>
                  <Typography variant="h4" align="center" style={{lineHeight:1.7}}>
                      <b>An old beat-up guitar, a computer monitor covered in code, and a crazy intense creativity.</b>
                  </Typography>
                  </div>
              </Grid>

          </Grid>
          <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
              <Grid item md={6} xs={12} justify="center">
                  <Card>
                      <CardActionArea>
                          <CardMedia
                              component="img"
                              image={greenmountain}
                              maxWidth={600}
                          />
                      </CardActionArea>

                  </Card>
              </Grid>
              <Grid item md={6} xs={12} justify="center">
                  <Card >
                      <CardActionArea>
                          <CardMedia
                              component="img"
                              image={bwmountain}
                              maxWidth={600}
                          />
                      </CardActionArea>

                  </Card>
              </Grid>

          </Grid>
      </Container>
      </div>
  );
}

export default App;
