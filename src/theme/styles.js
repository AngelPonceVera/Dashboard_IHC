import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = {
  colors: {
    gray: {
      700: '#1f2733'
    },
    brand: {
      50: '#CACDD8',
      600: '#A2A6B0'
    },
    greenWin: {
      200: '#13805e',
      500: '#66C28E',
      900: '#A2A6B0'
    },
    greenfix: {
      50: '#61b58f8a',
      200: '#66C28E ',
      600: '#13805e'
    },
    redfix: {
      50: '#e8323241',
      200: '#c32222 ',
      600: '#c32222'
    },
    botonAmarillo: {
      200: '#e6b324',
      300: '#F6E05E ',
      500: '#ffdf1b'
    }
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#d8d8d8', 'gray.800')(props),
        fontFamily: "'Roboto', sans-serif"
      },
      html: {
        fontFamily: "'Roboto', sans-serif"
      }
    })
  }
};
