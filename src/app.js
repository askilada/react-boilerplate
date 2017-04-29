import React from 'react'
import ReactDOM from 'react-dom'
import MainComponent from './components/main'

window.onload = function () {
    ReactDOM.render(<MainComponent />, document.getElementById('app'))
}

