import { CircularProgress } from '@mui/material';

import { SpinerWrapper } from './spiner.styled';

export const Spiner = () => {
    return (
        <SpinerWrapper>
            <CircularProgress sx={{ color: '#999' }} />
        </SpinerWrapper>
    );
};
