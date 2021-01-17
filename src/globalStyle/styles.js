import  { createGlobalStyle } from 'styled-components'


export default createGlobalStyle `

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;

        
    }

    body {
        background-color: #EEE;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        outline: none;
    }

    button {
        cursor: pointer;
    }

`