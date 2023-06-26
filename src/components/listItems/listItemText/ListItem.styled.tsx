import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const TypographyStyled = styled(Typography)`
    min-width: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    &.checked {
        text-decoration: line-through;
    }
`;
