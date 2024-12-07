'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00A8FC', // Updated blue color for links
    },
    background: {
      default: '#1A1D1F',
      paper: '#111315',
    },
    text: {
      primary: '#F2F3F5',
      secondary: 'rgba(242, 243, 245, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Noto Sans", sans-serif',
    h4: {
      fontSize: '22px',
      fontWeight: 600,
      color: '#F2F3F5',
    },
    body1: {
      fontSize: '15px',
      color: '#F2F3F5',
    },
    body2: {
      fontSize: '13px',
      color: '#F2F3F5',
    },
    caption: {
      fontSize: '11px',
      color: '#F2F3F5',
      textTransform: 'uppercase',
      fontWeight: 700,
    },
    button: {
      fontSize: '14px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 0',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          fontSize: '14px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#1A1D1F',
          fontFamily: '"Noto Sans", sans-serif',
          '& fieldset': {
            borderColor: 'rgba(242, 243, 245, 0.1)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(242, 243, 245, 0.2)',
          },
          '& input': {
            color: '#F2F3F5',
            fontSize: '15px',
            '&::placeholder': {
              color: 'rgba(242, 243, 245, 0.5)',
              opacity: 1,
            },
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: '"Noto Sans", sans-serif',
          fontSize: '13px',
        },
      },
    },
  },
});

export default theme;
