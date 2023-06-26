import React from 'react';
import { Box, Pagination } from '@mui/material';

interface PaginationComponentProps {
    itemCount: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
    itemCount,
    itemsPerPage,
    onPageChange,
}) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageCount = Math.ceil(itemCount / itemsPerPage);

    const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        onPageChange(page);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageChange}
                sx={{
                    '& .MuiPaginationItem-page': {
                        color: '#999',
                    },
                    '& .MuiPaginationItem-page.Mui-selected': {
                        backgroundColor: '#b2b2b257',
                    },
                    '& .MuiSvgIcon-root': {
                        color: '#999',
                    },
                }}
            />
        </Box>
    );
};
