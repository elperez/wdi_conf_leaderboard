console.log('react');

// var React = require('react');
import React from 'react'
import ReactDom from 'react-dom'
import Slider from './components/Slider'
import App from './components/App'

ReactDom.render(<App />, document.querySelector('#root'))
