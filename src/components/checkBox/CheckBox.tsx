import { Checkbox, ListItemIcon } from '@mui/material';

import { Item } from '@/utils/types/types';

export const CheckBox = ({ item }: { item: Item }) => {
    return (
        <ListItemIcon>
            <Checkbox
                checked={item.completed}
                sx={{ color: '#999', '&.Mui-checked': { color: '#454545' } }}
            />
        </ListItemIcon>
    );
};
