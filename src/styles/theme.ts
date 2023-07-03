import { extendTheme } from '@chakra-ui/react';

export const colors = {
    primary: {
        50: '#E5F5FF',
        100: '#CCEBFF',
        200: '#99D6FF',
        300: '#66C2FF',
        400: '#33ADFF',
        500: '#0099FF',
        600: '#007ACC',
        700: '#005C99',
        800: '#003D66',
        900: '#001F33',
        950: '#000F19',
    },
    secondary: {
        50: '#FFE5EE',
        100: '#FFCCDD',
        200: '#FF99BB',
        300: '#FF6699',
        400: '#FF3377',
        500: '#FF0055',
        600: '#CC0044',
        700: '#990033',
        800: '#660022',
        900: '#330011',
        950: '#190008',
    },
    bg: {
        dark: '#121212',
        light: '#ffffff',
    },
    text: {
        dark: '#ffffff',
        light: '#121212',
    },
};

export const fonts = {
    body: 'Nunito Variable, sans-serif',
    heading: 'Nunito Variable, sans-serif',
};

// export const initialColorMode = 'light';

export const theme = extendTheme({
    colors,
    fonts,
});
