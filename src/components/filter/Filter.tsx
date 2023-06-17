'use client'
import * as React from 'react';
import { FormControlLabel, Radio } from '@mui/material';
import { styled } from '@mui/system';
import { RadioGroupStyled } from './Filter.styled';
import ListItems from '../listItems/ListItems';

const CustomFormControlLabel = styled(FormControlLabel)(({ checked }) => ({
    color: checked ? 'white' : '#999',
}));

export default function Filter() {
    const [filter, setFilter] = React.useState('viewAll')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value);
    }
    return (
        <>
            <RadioGroupStyled name="use-radio-group" onChange={onChange}>
                <CustomFormControlLabel sx={{ margin: 0 }} labelPlacement='top' checked={filter === 'viewAll'} value="viewAll" label="View All" control={<Radio sx={{ display: 'none' }} />} />
                <span>|</span>
                <CustomFormControlLabel sx={{ margin: 0 }} labelPlacement='top' checked={filter === 'active'} value="active" label="Active" control={<Radio sx={{ display: 'none' }} />} />
                <span>|</span>
                <CustomFormControlLabel sx={{ margin: 0 }} labelPlacement='top' checked={filter === 'completed'} value="completed" label="Completed" control={<Radio sx={{ display: 'none' }} />} />
            </RadioGroupStyled>
            <ListItems filter={filter} />

        </>
    );
}   