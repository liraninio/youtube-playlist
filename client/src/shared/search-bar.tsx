import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder: string;
    searchBtnName: string;
}

const SearchBar = ( search : SearchBarProps) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        search.onSearch(query);
        setQuery('');
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <TextField
                value={query}
                placeholder={search.placeholder}
                size={'small'}
                onChange={handleInputChange}
                style={{ marginRight: '10px', flex: '1' }}
            />
            <Button
                onClick={handleSearch}
                variant="contained"
                style={{ height: '40px', fontSize: '16px' }}
            >
                {search.searchBtnName}
            </Button>
        </div>
    );
};

export default SearchBar;