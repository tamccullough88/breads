const React = require('react')
const Default = require('./layouts/default')

function edit ({bread, bakers}) {
console.log("edit page", bread.hasGluten)
    return (
      <Default>
        
        <h2>Edit A Bread</h2>
        <form  action={`/breads/${bread.id}?_method=PUT`} method="POST">
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
          <label htmlFor="baker">Baker</label>
      <select name="baker" id="baker" defaultValue={bread.baker}>
          {bakers.map((baker) => {
              return(
                  <option value={baker.id} key={baker.id}>{baker.name}</option>
              )
          })}
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





