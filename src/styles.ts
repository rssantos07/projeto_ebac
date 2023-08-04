import { createGlobalStyle } from 'styled-components'

export const color = {
  whiteBackground: '#FFF8F2',
  orange: '#E66767',
  white: '#FFEBD9'
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
      background:${color.whiteBackground};
      color:${color.orange};
    }
    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
`
