import React from 'react';
// import Card from '../src/Card';
// import CardTitle from '../src/CardTitle';
import { Button, Card, CardImage, CardTitle, Row, Col } from 'react-materialize'
import './CardImage.css';


export default function Header(props){
  return <div className="cardContainer">
    <Card className='small'
      header={<CardTitle image='sample.jpg'>Card Title</CardTitle>}
      actions={[<a href='#'>This is a Link</a>]}>
      I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
    </Card>
  </div>
}
