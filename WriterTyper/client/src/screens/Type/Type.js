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

  async componentDidMount(z) {
    const authorId = this.props.match.params.authorId
    const textId = this.props.match.params.textId
    const text = await readOneByAuthor(authorId, textId)
    const str = text.content
    const strArr = str.split('')
    const firstLetter = strArr.shift()
    // const upcomingArr = strArr.slice(0, 1)
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
      console.log('correct')
    }
  }

  render() {
    return (
      <>
        <textarea
          value={this.state.currentChar}
          disabled='disabled'
        >
        </textarea>
        <textarea
          onKeyUp={this.handleType}
        >
        </textarea>
      </>
    );
  }
}

export default withRouter(Type);
