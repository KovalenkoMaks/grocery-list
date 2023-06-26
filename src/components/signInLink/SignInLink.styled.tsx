import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ButtonStyled = styled(Button)`
    height: 50px;
    font-size: 18px;
    outline: 1px solid #999;
    color: inherit;
    border-radius: 0;

    :hover {
        outline: 1px solid white;
        color: white;
    }
`;
