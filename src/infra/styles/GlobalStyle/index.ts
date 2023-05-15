import { createGlobalStyle } from 'styled-components'

import RobotoRegular from '../fonts/RobotoRegular.ttf';
import RobotoMedium from '../fonts/RobotoMedium.ttf';
import RobotoBold from '../fonts/RobotoBold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Regular';
    src: local('Roboto Regular'), local('RobotoRegular'),
    url(${RobotoRegular}) format('ttf'),
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto Medium';
    src: local('Roboto Medium'), local('RobotoMedium'),
    url(${RobotoMedium}) format('ttf'),
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto Bold';
    src: local('Roboto Bold'), local('RobotoBold'),
    url(${RobotoBold}) format('ttf'),
    font-weight: 800;
    font-style: normal;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    font-size: 62.5%;
  }
  body {
    line-height: 1;
    font-family: Roboto;
    font-weight: 300;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export default GlobalStyle