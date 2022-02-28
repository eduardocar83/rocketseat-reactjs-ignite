import './styles/global.scss';
import React from 'react';
import { RepositoryList } from './components/RepositoryList';
import { Counter } from './components/Counter';


export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}