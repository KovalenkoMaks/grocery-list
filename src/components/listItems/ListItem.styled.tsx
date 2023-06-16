import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { ListItem, ListItemProps } from '@mui/material';


export const TypographyStyled = styled(Typography)`
    min-width: 30px;
        &.checked {
        text-decoration: line-through;
    }
`

type ListItemStyledProps = ListItemProps & {
    focusVisibleClassName?: string;
};

export const ListItemStyled = styled(ListItem) <ListItemStyledProps>`
  &.Mui-focusVisible {
    /* Стили для состояния фокуса с клавиатуры */
    background-color: red;
  }

  &.edit {
    /* Стили для класса "edit" */
    background-color: red;
  }
`;