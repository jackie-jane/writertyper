import React, { Component } from 'react';
import { readOneByAuthor, readScore } from '../../services/Crud'
import { withRouter } from 'react-router-dom'
import Score from '../../components/TYPE/Score/Score'
import './Type.css'
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
          <div
            className='typeCont'>
            <p>
              <span
                className='completedText'>
                {completeRender}
              </span>
              <mark
                className='currentChar'>
                {this.state.currentChar}
              </mark>
              <span
                className='upcomingText'>
                {upcomingRender}
              </span>
            </p>
            <textarea
              className='userInput'
              onKeyUp={this.handleType}>
            </textarea>
          </div>
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
        <Score />
      </>
    );
  }
}

export default withRouter(Type);
