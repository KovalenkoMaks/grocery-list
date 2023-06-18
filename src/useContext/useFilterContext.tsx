'use client'
import { FilterType } from '@/utils/types/types';
import React, { SetStateAction } from 'react';
import { ReactNode, createContext, useContext, useState } from "react";

type ContextType = {
    filter: FilterType;
    setFilter: React.Dispatch<SetStateAction<FilterType>>;
}
export const FilterContext = createContext<ContextType | null>(null);

type Props = {
    children: ReactNode,
}
export const FilterContextProvider = ({ children }: Props) => {
    const [filter, setFilter] = useState<FilterType>(FilterType.ViewAll);
    return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>
}

export const useFilterContext = () => {
    const filterContext = useContext(FilterContext);
    if (!filterContext) {
        throw new Error('useFilterContext must be used within a FilterContextProvider');
    }
    return filterContext;
}