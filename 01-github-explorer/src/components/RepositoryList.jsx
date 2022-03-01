import '../styles/repositories.scss';
import React, { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';

//

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'http://www.github.com'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/eduardocar83/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}