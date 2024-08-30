'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

interface FilterDropDownProps {
    filter: string;
    filters: string[];
};

const FilterDropDown: React.FC<FilterDropDownProps> = ({ filter, filters }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    {filter}
                </MenuButton>
            </div>
            <MenuItems>
                {filters.map((filter, index) => (
                    <MenuItem key={index}>{filter}</MenuItem>
                ))}
            </MenuItems>
        </Menu>
    );
};

export default FilterDropDown;


