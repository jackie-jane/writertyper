import React, { Component } from 'react';
import { createText, readAllAuthors } from '../../services/Crud'
import './Upload.css'

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {
        title: '',
        words: '',
        characters: '',
        content: '',
      },
      authorId: '',
      authors: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async componentDidMount() {
    try {
      const authorsList = await readAllAuthors()
      this.setState({ authors: authorsList })
    } catch (err) {
      console.log(`encountered an error described here: ${err}`)
    }
  }
  handleTitleInput = (e) => {
    const newTitle = e.target.value
    this.setState({
      text: {
        ...this.state.text,
        title: newTitle
      }
    })
  }
  handleChange = (e) => {
    this.setState({
      authorId: e.target.value
    })
  }
  handleInput = (e) => {
    const newText = e.target.value
    const wordArr = newText.split(' ').length
    const charArr = newText.split('').length
    this.setState({
      text: {
        ...this.state.text,
        content: newText,
        words: wordArr,
        characters: charArr
      }
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const authorId = this.state.authorId
    const textData = this.state.text
    console.log(textData)
    createText(authorId, textData)
    console.log('created')
  }
  render() {
    const authors = this.state.authors
    const valid = this.state.authorId
    return (
      <>
        <form className='formUpload'>
          <label className='labelUpload'>
            Choose a writer:
          </label>
          <select
            name="selectRead"
            id="selectRead"
            className='selectRead'
            onChange={this.handleChange}>
            {authors.map(element =>
              <>
                <option
                  value={element.id}>
                  {element.name}
                </option>
              </>
            )}
          </select>
        </form>
        {valid ?
          <form
            onSubmit={this.handleSubmit}>
            <input
              placeholder='copy and paste title here'
              onChange={this.handleTitleInput}>
            </input>
            <textarea
              placeholder='copy and paste text here'
              onChange={this.handleInput}
            >
            </textarea>
            <button type='submit'>Submit</button>
          </form>
          :
          null
        }
      </>
    );
  }
}

export default Upload;