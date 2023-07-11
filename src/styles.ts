import { createGlobalStyle } from 'styled-components'

export const cores = {
  fundo: '#FFF8F2',
  laranja: '#E66767',
  branco: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Roboto', sans-serif;
    list-style:none;
    }

    body {
      background:${cores.fundo};
      color:${cores.laranja};
    }
    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
`
