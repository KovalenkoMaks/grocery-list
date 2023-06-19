'use client'
import React from 'react';
import { ThemeProvider, Box, TextField, Button } from '@mui/material/';
import { theme } from '@/utils/mui/theme';
import { useMutateAddQuery } from '@/utils/hooks/reactQuery/useItemsQuery';
import { ItemToAdd } from '@/utils/types/types';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddForm = ({ user }: { user: string }) => {
    const mutation = useMutateAddQuery();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const quantityValue = formData.get('quantity') as string;
        const quantity = parseInt(quantityValue, 10);
        if (formData.get('value') === "") {
            return toast.info("Field is empty")
        }
        const itemToAdd: ItemToAdd = {
            value: formData.get('value') as string,
            quantity: isNaN(quantity) ? 1 : quantity,
            user,
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
                    margin: '40px 20px 10px',
                }}
            >
                <TextField
                    name='value'
                    placeholder='Add your goods'
                    variant="standard"
                    fullWidth={true}
                    inputProps={{
                        style: { color: '#999', }
                    }}
                />
                <TextField
                    name='quantity'
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
            <ReactQueryDevtools />
        </ThemeProvider >
    );
}

