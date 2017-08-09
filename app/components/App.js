import React from 'react'
import Header from './Header'
import CardImage from './CardImage'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.onLikeButtonClick = this.onLikeButtonClick.bind(this)
    this.state = {
      talks: []
    }
    this.populateTalks()
    
  }

  populateTalks() {
    var newTalksList = this.state.talks.push("hello")
    this.setState({
      talks: newTalksList
    })
  }



  render() {
    const { likesCount, colors } = this.state
    return <div>
      <Header/>

      <CardImage
        description={this.talks[0]}
      />
    </div>
  }
}
