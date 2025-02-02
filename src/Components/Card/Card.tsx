import React, { SyntheticEvent } from 'react'
import "./Card.css";
import { CompanySearch } from '../../company';
import { AddPortfolio } from '../Portfolio/AddPortfolio/AddPortfolio';
interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

export const Card: React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props): JSX.Element => {
    return (
        <div className='card'>
            <img src="https://images.unsplash.com/photo-1672617195387-1a890be98e28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="company logo" />
            <div className='details'>
                <h2>{searchResult.name} ({searchResult.symbol})</h2>
                <p>{searchResult.currency}</p>
            </div>
            <p className='info'>{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
        </div>
    )
}
