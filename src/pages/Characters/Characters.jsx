import "./Characters.css";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(1);

    useEffect(() => {
        setLoading(true);
        setCharacters([]);
        fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=10`)
            .then((res) => res.json())
            .then((res) => {
                setCharacters(res.items);
                setLoading(false);
                setLimit(res.meta.totalPages);
            });
    }, [page]);

    return (
        <div className='characters-container'>
            <div className='characters-cards'>
                {loading && <Loader />}
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
                <Pagination page={page} setPage={setPage} limit={limit} />
            </div>
        </div>
    );
};

export default Characters;
