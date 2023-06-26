'use client';
import React from 'react';

import { FormControlLabel, Radio } from '@mui/material';
import { styled } from '@mui/system';

import { RadioGroupStyled } from './Filter.styled';
import { FilterType } from '@/utils/types/types';
import ListItems from '../listItems/ListItems';

const CustomFormControlLabel = styled(FormControlLabel)(({ checked }) => ({
    color: checked ? 'white' : '#999',
}));

export default function Filter({ user }: { user: string }) {
    const [filter, setFilter] = React.useState<FilterType>(FilterType.ViewAll);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value as FilterType);
    };
    return (
        <>
            <RadioGroupStyled name="use-radio-group" onChange={onChange}>
                <CustomFormControlLabel
                    sx={{ margin: 0 }}
                    labelPlacement="top"
                    checked={filter === 'viewAll'}
                    value="viewAll"
                    label="View All"
                    control={<Radio sx={{ display: 'none' }} />}
                />
                <span>|</span>
                <CustomFormControlLabel
                    sx={{ margin: 0 }}
                    labelPlacement="top"
                    checked={filter === 'active'}
                    value="active"
                    label="Active"
                    control={<Radio sx={{ display: 'none' }} />}
                />
                <span>|</span>
                <CustomFormControlLabel
                    sx={{ margin: 0 }}
                    labelPlacement="top"
                    checked={filter === 'completed'}
                    value="completed"
                    label="Completed"
                    control={<Radio sx={{ display: 'none' }} />}
                />
            </RadioGroupStyled>
            <ListItems user={user} filter={filter} />
        </>
    );
}
