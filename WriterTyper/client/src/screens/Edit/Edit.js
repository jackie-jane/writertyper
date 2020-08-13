import React, { Component } from 'react';
import { readOneByAuthor, editText } from '../../services/Crud'
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
  wordCount = (str) => {
    const textArr = str.split(' ')
    this.setState({
      wordCount: textArr.length
    })
  }
  characterCount = (str) => {
    const textArr = str.split('')
    this.setState({
      characterCount: textArr.length
    })
  }
  handleChange = (event) => {
    const newText = event.target.value
    const wordArr = newText.split(' ').length
    const charArr = newText.split('').length
    this.setState({
      text: {
        content: newText,
        words: wordArr,
        characters: charArr
      }
    })
  }
  handleSubmit = () => {
    const authorId = this.props.match.params.authorId
    const textId = this.props.match.params.textId
    const textData = this.state.text
    editText(authorId, textId, textData)
    console.log('edited')
  }
  render() {
    const text = this.state.text
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <textarea
            defaultValue={text.content}
            onChange={this.handleChange}
          >
          </textarea>
          <button type='submit'>Submit</button>
        </form>
      </>
    );
  }
}

export default withRouter(Edit);
