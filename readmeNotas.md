COMPONENTE PARA AGREGAR CON UN BOTON ELEMENTOS DE UN ARRAY - EJEMPLO ANTES DE USAR MAS HOOKS

export const GitExpertApp = () => {   
// const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; este era con ejemplo sin el useState
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    
    const handleAdd = () => {
        setCategories([...categories, 'Bulma'])                 //USAR SPRED OPERATION - no puedo usar el push porque no me deja mutar el State
       //setCategories(cats => [...cats, 'Bulma])               //puede recibir un callback con el estado anterior
    }

    return (
    <>
        <h2>GitExpertApp</h2>
        <hr />
        
        <button onClick={handleAdd}>Agregar</button>

        <ol>
            {
                categories.map(category => {
                    return <li key={category}>{category}</li>   // esta key (id de bases de datos)debe usarse asi, no usar el index del map porque genera errores al momento de modificar el array
                })
            }
        </ol>
    </>
    )
}
----------------------------------------------------------------------------------------------------------------------
