const React = require('react')
const Default = require('./layouts/default')

function edit ({bread, id}) {
console.log("edit page", bread.hasGluten)
    return (
      <Default>
        
        <h2>Edit A Bread</h2>
        <form  action={`/breads/${id}?_method=PUT`} method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue = {bread.name}
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue = {bread.image}
            />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={bread.hasGluten}
          />
          <br />
          <select name="baker" id="baker" defaultValue = {bread.bakers}>
            <option value="Rachel">Rachel</option>
            <option value="Monica">Monica</option>
            <option value="Joey">Joey</option>
            <option value="Chandler">Chandler</option>
            <option value="Ross">Ross</option>
            <option value="Phoebe">Phoebe</option>
          </select>
          <br />
          <input type="submit" value="Update Bread" />
        </form>
        <div className="backButton">
          <a href="/breads"><button>Go back to the index</button></a>
        </div>

      </Default>
    )
}

module.exports = edit