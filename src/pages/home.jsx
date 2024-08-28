import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {endpoints} from "../config/endpoints";
import SearchBar from "../components/SearchBar";
import RecipesTable from "../components/RecipesTable";

export default function Home() {

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    const { data: recipes, isLoading, error } = useFetch(endpoints.recipes.getAll(searchTerm));

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!recipes) {
        return <div>Recetas no encontrada</div>;
    }

    return (
        <>
            <h1 className="text-2xl mb-2">Food Recipes</h1>
            <SearchBar onSearch={handleSearch} />
            <a  className="block underline py-2" href="#" onClick={() => navigate(`/ratings`)}>
                Ver valoraciones
            </a>
            <RecipesTable recipes={recipes} />
        </>
    );
}
