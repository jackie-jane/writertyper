import React, { Component } from 'react';
import { readOneByAuthor } from '../../services/Crud'
import { withRouter } from 'react-router-dom'
class Type extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
      upcoming: [],
      completed: [],
      currentChar: '',
    }
  }

  async componentDidMount() {
    const authorId = this.props.match.params.authorId
    const textId = this.props.match.params.textId
    const text = await readOneByAuthor(authorId, textId)
    const str = text.content
    const strArr = str.split('')
    const firstLetter = strArr.shift()
    this.setState({
      text: str,
      currentChar: firstLetter,
      upcoming: strArr
    })
  }

  handleType = (e) => {
    const userInput = e.target.value
    const char = this.state.currentChar
    if (userInput === char) {
      const newCompleted = this.state.completed
      const newUpcoming = this.state.upcoming
      const nextChar = newUpcoming.shift()
      newCompleted.push(userInput)
      console.log(newCompleted)
      console.log(newUpcoming)
      console.log(nextChar)
      this.setState({
        upcoming: newUpcoming,
        completed: newCompleted,
        currentChar: nextChar
      })
      e.target.value = ''
    }
  }

  render() {
    const completeRender = this.state.completed.join('')
    const upcomingRender = this.state.upcoming.join('')
    return (
      <>
        {this.state.completed ?
          <>
            <p
              style={{
                color: "white"
              }}>
              {completeRender}
            </p>
            <p
              style={{
                color: "white"
              }}>
              {this.state.currentChar}
            </p>
            <p
              style={{
                color: "white"
              }}>
              {upcomingRender}
            </p>
            <textarea
              onKeyUp={this.handleType}>
            </textarea>
          </>
          :
          <>
            <textarea
              value={this.state.currentChar}
              disabled='disabled'
            ></textarea>
            <textarea
              onKeyUp={this.handleType}
            ></textarea>
          </>
        }
      </>
    );
  }
}

export default withRouter(Type);
