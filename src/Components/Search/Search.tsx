import React, { useState, SyntheticEvent, ChangeEvent } from 'react'

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<Props> = ({onSearchSubmit, search, handleSearchChange} : Props): JSX.Element => {

    
    return (
        <>
        <form onSubmit={onSearchSubmit}>
            <input value={search} onChange={handleSearchChange} />
        </form>
        </>
    )
}
