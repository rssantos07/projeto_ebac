import { createGlobalStyle } from 'styled-components'

export const cores = {
  fundo: '#FFF8F2',
  textColor: '#E66767',
  textButton: '#FFEBD9'
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
      color:${cores.textColor};
    }
    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
`
