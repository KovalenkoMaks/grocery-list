import { Iitems } from '@/utils/api/items';
import { useMutateEditQuery } from '@/utils/hooks/reactQuery/useItemsQuery';
import { Box, TextField } from '@mui/material';
import { KeyboardEvent } from 'react';
import React, { useEffect, useRef } from 'react';

type IEditForm = {
    setIsEditable: (value: string) => void,
    item: Iitems
};
type OnKeyDownFn = (e: KeyboardEvent<HTMLFormElement>) => void;

export const EditForm = ({ setIsEditable, item }: IEditForm) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (formRef.current && !formRef.current.contains(e.target as Node)) {
            setIsEditable('');
            document.removeEventListener('click', handleClickOutside);
        }
    };
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const onKeyDown: OnKeyDownFn = (e) => {
        if (e.key === 'Escape') {
            setIsEditable('')
        };

    }
    const mutation = useMutateEditQuery(setIsEditable);
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const quantityValue = formData.get('quantity') as string;
        const quantity = parseInt(quantityValue, 10);

        const itemToAdd: Iitems = {
            value: formData.get('value') as string,
            quantity: isNaN(quantity) ? 1 : quantity,
            _id: item._id,
            completed: item.completed
        };

        mutation.mutate(itemToAdd);

    }

    return <Box
        ref={formRef}
        onKeyDown={(e) => onKeyDown(e)}
        onSubmit={onSubmit}
        component="form"
        noValidate
        autoComplete="off"
        sx={{
            display: 'flex',
            gap: '10px',
            margin: '0 20px',
            width: '100%',
        }}
    >
        <TextField
            name='value'
            id="standard-basic"
            placeholder='Add your goods'
            variant="standard"
            fullWidth={true}
            inputRef={inputRef}
            defaultValue={item.value}
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
            defaultValue={item.quantity}
            inputProps={{
                style: {
                    color: '#999', textAlign: 'center'
                }
            }}
            sx={{ maxWidth: '80px' }}
        />
        <button type="submit" style={{ display: 'none' }} />
    </Box>
}