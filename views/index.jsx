const React = require('react')
const Default = require('./layouts/default')

function Index ({breads, bakers}) {

    return (
      <Default title={breads.title}>
        <h2>Index Page</h2>

        <h3>Bakers</h3>
        <ul>
          {
            bakers.map((baker) => {
              return (
                <li key = {baker.id}>
                  <a href={`bakers/${baker.id}`}>{baker.name}</a>
                </li>
              )
            })
          }
        </ul>
        <h3>Breads</h3>
        <ul> 
          {
            breads.map((bread, id) => {
              return (
                <li key={id}>
                  <a href={`/breads/${bread.id}`}>
                    {bread.name}
                  </a> 
                </li>
            )
          })
          }
        </ul>

        <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>

      </Default>
    )
}

module.exports = Index
