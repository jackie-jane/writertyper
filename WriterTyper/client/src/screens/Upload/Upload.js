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
        author_id: '',
      },
      authors: [],
      author: [],
      newWriter: 0
    }
    this.handleTextSubmit = this.handleTextSubmit.bind(this)
    this.handleAuthSubmit = this.handleAuthSubmit.bind(this)
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
    const value = e.target.value
    if (value < 1) {
      this.setState({
        newWriter: 1
      })
    } else {
      this.setState({
        text: {
          ...this.state.text,
          author_id: e.target.value
        },
        newWriter: 2
      })
    }
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
  handleAuthInput(e) {
    console.log('jimmy jam')
  }
  handleAuthSubmit(e) {
    console.log('jimmy jam')
  }
  handleTextSubmit(e) {
    e.preventDefault()
    const author_id = this.state.text.author_id
    const textData = this.state.text
    console.log(textData)
    createText(author_id, textData)
  }
  render() {
    const newAuthor = this.state.newWriter
    const authors = this.state.authors
    const valid = this.state.text.author_id
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
            <option
              value='default'>
              Choose a writer
                </option>
            <option
              value='0'>
              Add a writer
                </option>
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
        {newAuthor === 1 ?
          <form
            onSubmit={this.handleAuthSubmit}>
            <input
              placeholder="Writer's name"
              onChange={this.handleAuthInput}>
            </input>
            <textarea
              placeholder="Writer's biography"
              onChange={this.handleAuthInput}
            ></textarea>
            <textarea
              placeholder="Notable controversy"
              onChange={this.handleAuthInput}
            >
            </textarea>
            <button type='submit'>Submit</button>
          </form>
          :
          null
        }
        {newAuthor === 2 ?
          <form
            onSubmit={this.handleTextSubmit}>
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