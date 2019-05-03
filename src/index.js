import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles/";


const theme = createMuiTheme({
    typography: {
        fontFamily: "'Libre Baskerville', serif",
        fontWeightLight: 400,
        fontWeightRegular: 400,
        fontWeightMedium: 700,
        fontWeightBold: 700,
        h3: {
            fontFamily: "'Pinyon Script', cursive",
        }
    }
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
