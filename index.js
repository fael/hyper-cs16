// ORIGINAL CS 1.6 CONSOLE THEME
const shellGreen = 'rgb(76, 88, 68)'
const terminalGreen = 'rgb(62, 70, 55)'
const darkShadow = 'rgb(40, 46, 34)'
const lightShadow = 'rgb(137, 146, 129)'
const text = 'rgb(255, 255, 255)'
const lowlight = 'rgb(134, 146, 126)'
const highlight = 'rgb(195, 180, 80)'

// HYPER
const backgroundColor = terminalGreen
const foregroundColor = text
const cursorColor = highlight
const borderColor = darkShadow

const colors = {
  black: '#000000',
  blue: '#2f76c6',
  cyan: '#37b3b3',
  green: '#4ea75f',
  magenta: '#be5ebe',
  red: '#e04557',
  white: text,
  yellow: '#cc9933',
  lightBlack: '#808080',
  lightBlue: '#8bafd6',
  lightCyan: '#99d0d0',
  lightGreen: '#62986c',
  lightMagenta: '#cc9acc',
  lightRed: '#d26572',
  lightWhite: lowlight,
  lightYellow: '#dcd597',
}

const box = `
  background-color: ${shellGreen} !important;
  border-left: 2px solid ${lightShadow} !important;
  border-top: 2px solid ${lightShadow} !important;
  border-bottom: 2px solid ${darkShadow} !important;
  border-right: 2px solid ${darkShadow} !important;
`

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
      	text-rendering: optimizeLegibility;
        font-weight: normal;
      }
      ::selection { 
        background: ${highlight};
      }
      .hyper_main {
        border-radius: 0 !important;
        ${box}
      }
      .header_header {
        border-radius: 0 !important;
      }
      .tabs_borderShim {
        border: none;
      }
      .tab_tab {
        ${box}
      }
      .tab_textInner {
        position: initial;
        display: block;
        max-width: 90%;
        padding: 0 10px;
      }
      .tab_tab.tab_active {
        color: ${highlight};
      }
      .term_active {
        padding: 9px !important;
      }
      .term_term {
        background-color: ${terminalGreen};
        border-left: 2px solid ${darkShadow} !important;
        border-top: 2px solid ${darkShadow} !important;
        border-bottom: 2px solid ${lightShadow} !important;
        border-right: 2px solid ${lightShadow} !important;
        padding: 3px;
      }
    `
  })
}
