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
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700,
        fontWeightBold: 700,
        button: {
            fontFamily: "'Roboto Condensed', sans-serif"
        },
        h1: {
            fontFamily: "'Crimson Text', serif"
        },
        h2: {
            fontFamily: "'Crimson Text', serif",
            fontSize: "1.75rem"
        },
        h3: {
            fontFamily: "'Roboto Condensed', sans-serif",
            fontSize: "1.75rem"
        },
        h4: {
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 300,
            fontSize: "2.5em"
        }
    }
});

export default theme;

// font-family: 'Roboto Condensed', sans-serif;
// font-family: 'Noto Sans KR', sans-serif;
// font-family: 'Abel', sans-serif;

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
