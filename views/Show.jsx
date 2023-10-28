const React = require('react')
const Default = require('./layouts/default')

function Show ({bread, index}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)

    return (
        <Default>
        <h3>{bread.name}</h3>
        <p>{
            bread.hasGluten
            ? <span> Contains Gluten </span>
            : <span> Does Not Contain Gluten</span>
        }
        </p>
        <img src={bread.image} alt={bread.name} />
        <button href="/breads">Go home</button>
        
        <form action={`/breads/${index}?_method=DELETE`} method="POST">
        <input type='submit' value="DELETE"/>
</form> 

    </Default>  
    )}
    


module.exports = Show