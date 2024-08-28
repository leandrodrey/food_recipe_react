import {useNavigate} from "react-router-dom";

const RecipesTable = ({recipes}) => {

    const navigate = useNavigate();

    return (
        <>
            <table className="table-auto">
                <thead>
                <tr>
                    <th className="px-4 py-2 text-center">Nombre</th>
                    <th className="px-4 py-2 text-center">Promedio</th>
                </tr>
                </thead>
                <tbody>
                {recipes.map((recipe) => (
                    <tr key={recipe.id}>
                        <td className="border px-4 py-2">
                            <a href="#" className="underline text-blue-300 hover:text-blue-500"
                                onClick={() => navigate(`/detail/${recipe.id}`)}>
                                {recipe.name}
                            </a>
                        </td>
                        <td className="border px-4 py-2 text-center">{recipe.score}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default RecipesTable;
