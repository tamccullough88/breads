const React = require('react')
const Default = require('./layouts/default')

function error404 () {
    return (
        <Default>
        <h3>404</h3>
        <p>Oops, the page you are looking for does not exist!
        </p>
    </Default>  
    )
}

module.exports = error404