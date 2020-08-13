import React, { Component } from 'react';
import { readOneByAuthor } from '../../services/Crud'
import { withRouter } from 'react-router-dom'
import './Edit.css'

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
      wordCount: 0,
      characterCount: 0,
    }

  }
  async componentDidMount() {
    const authorId = this.props.match.params.authorId
    const textId = this.props.match.params.textId
    const textToEdit = await readOneByAuthor(authorId, textId)
    this.setState({
      text: textToEdit
    })
  }
  wordCount(str) {
    textArr = str.split(' ')
    this.setState({
      wordCount: textArr.length
    })
  }
  characterCount(str) {
    textArr = str.split('')
    this.setState({
      characterCount: textArr.length
    })
  }
  handleChange = (event) => {
    const newText = event.target
    this.setState({
      text: {
        content: newText
      }
    })
    wordCount(newText)
    characterCount(newText)
  }
  render() {
    const text = this.state.text
    return (
      <>
        <textarea
          defaultValue={text.content}
          onChange={this.handleChange}
        >
        </textarea>
      </>
    );
  }
}

export default withRouter(Edit);
