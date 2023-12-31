import React from 'react';
import { KeyboardEvent } from 'react';

import { Box, TextField } from '@mui/material';
import { toast } from 'react-toastify';

import { useMutateEditQuery } from '@/utils/hooks/reactQuery/useItemsQuery';
import { ListItemForm, Item } from '@/utils/types/types';
import { IconsBtn } from '../iconsButton/IconsBtn';

export const EditForm = ({ item, setIsEditable }: ListItemForm) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const mutation = useMutateEditQuery(setIsEditable);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const quantityValue = formData.get('quantity') as string;
        const quantity = parseInt(quantityValue, 10);
        if (formData.get('value') === '') {
            return toast.info('Field is empty');
        }
        const itemToAdd: Item = {
            value: formData.get('value') as string,
            quantity: isNaN(quantity) ? 1 : quantity,
            _id: item._id,
            completed: item.completed,
        };
        mutation.mutate(itemToAdd);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Escape') {
            setIsEditable('');
        }
    };
    return (
        <Box
            onKeyDown={(e) => onKeyDown(e)}
            onSubmit={onSubmit}
            component="form"
            sx={{
                display: 'flex',
                gap: '10px',
                margin: '0 20px',
                width: '100%',
            }}
        >
            <TextField
                name="value"
                placeholder="Add your goods"
                variant="standard"
                fullWidth={true}
                inputRef={inputRef}
                defaultValue={item.value}
                inputProps={{
                    style: { color: '#999' },
                }}
            />
            <TextField
                name="quantity"
                placeholder="Quantity"
                variant="standard"
                type="number"
                defaultValue={item.quantity}
                inputProps={{
                    style: {
                        color: '#999',
                        textAlign: 'center',
                    },
                }}
                sx={{ maxWidth: '80px' }}
            />
            <IconsBtn setIsEditable={setIsEditable} />
        </Box>
    );
};
