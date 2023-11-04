const React = require('react')
const Default = require('./layouts/default')

function Show ({bread, id}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)

    return (
        <Default>
        <h3>{bread.name}</h3>
        <p>{
            bread.hasGluten
            ? <span> Contains Gluten </span>
            : <span> Dose Not Contain Gluten</span>
        } 
        </p>
        <img src={bread.image} alt={bread.name}></img>
        <p>Baked By: {bread.baker}</p>
        <button><a href="/breads">Go home</a></button>

        <button> <a href={`/breads/${id}/edit`}>
                    Edit
                    </a> 
                </button> 
        
        <form action={`/breads/${id}?_method=DELETE`} method="POST">
        <input type='submit' value="DELETE"/>
</form> 

    </Default>  
    )}
    


module.exports = Show