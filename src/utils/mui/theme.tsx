import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#999',
        },
        secondary: {
            main: '#999',
        },
    },
    components: {
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    style: {
                        color: '#999'
                    }
                },
                InputProps: {
                    style: {
                        borderBottom: '1px solid grey',
                    }
                }
            }
        },
    }
});