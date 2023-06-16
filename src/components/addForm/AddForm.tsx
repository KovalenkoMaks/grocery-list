'use client'
import * as React from 'react';
import { ThemeProvider, Box, TextField, Button } from '@mui/material/';
import { theme } from '@/utils/mui/theme';
import { getItemAdd } from '@/utils/api/items';
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/app/layout';
import { useMutateAddQuery } from '@/utils/hooks/reactQuery/useItemsQuery';
interface Iitem {
    value: string,
    quantity: number,
}

const ListForm = () => {

    const mutation = useMutateAddQuery();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const quantityValue = formData.get('quantity') as string;
        const quantity = parseInt(quantityValue, 10);

        const itemToAdd: Iitem = {
            value: formData.get('value') as string,
            quantity: isNaN(quantity) ? 1 : quantity,
        };
        mutation.mutate(itemToAdd);
        e.currentTarget.reset()
    }
    return (
        <ThemeProvider theme={theme}>
            <Box
                onSubmit={onSubmit}
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                    display: 'flex',
                    gap: '10px',
                    margin: '0 20px',
                }}
            >
                <TextField
                    name='value'
                    id="standard-basic"
                    placeholder='Add your goods'
                    variant="standard"
                    fullWidth={true}
                    inputProps={{
                        style: { color: '#999', }
                    }}
                />
                <TextField
                    name='quantity'
                    id="quantity"
                    placeholder="Quantity"
                    variant="standard"
                    type="number"
                    inputProps={{
                        style: {
                            color: '#999', textAlign: 'center'
                        }
                    }}
                    sx={{ maxWidth: '80px' }}
                />
                <Button color='secondary' type='submit' variant="outlined" sx={{ width: '160px' }}>Add</Button>
            </Box>
        </ThemeProvider >
    );
}

export default ListForm