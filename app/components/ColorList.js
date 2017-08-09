import React from 'react'

function listItem(color, index) {
  return <li key={index}>{color}</li>
}

export default function ColorList(props){
  return <ul>
    // {props.colors.map(function(color, index){
    {props.colors.map(function(color, index){
      return <li key={index}>{color}</li>
    })}
    </ul>
}
