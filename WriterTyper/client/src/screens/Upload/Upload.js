import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { createText, readAllAuthors, createAuthor } from '../../services/Crud'
import './Upload.css'

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {},
      authors: [],
      author: {},
      newWriter: 0
    }
    this.handleTextSubmit = this.handleTextSubmit.bind(this)
    this.handleAuthSubmit = this.handleAuthSubmit.bind(this)
    this.handleAuthInput = this.handleAuthInput.bind(this)
  }
  async componentDidMount() {
    try {
      const authorsList = await readAllAuthors()
      this.setState({ authors: authorsList })
    } catch (err) {
      console.log(`encountered an error described here: ${err}`)
    }
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
  handleAuthInput(e) {
    const { name, value } = e.target
    this.setState({
      author: {
        ...this.state.author,
        [name]: value
      }
    })
  }
  async handleAuthSubmit(e) {
    e.preventDefault()
    const author = this.state.author
    await createAuthor(author)
    this.props.history.push('./read')
  }
  WordCount = (e) => {
    const str = e.target.value
    const wordCount = str.split(' ').length
    const charCount = str.split('').length
    this.setState({
      text: {
        ...this.state.text,
        content: str,
        words: wordCount,
        characters: charCount
      }
    })
  }
  handleTextInput = (e) => {
    const { name, value } = e.target
    this.setState({
      text: {
        ...this.state.text,
        [name]: value
      }
    })
  }
  async handleTextSubmit(e) {
    e.preventDefault()
    const author_id = this.state.text.author_id
    const textData = this.state.text
    console.log(textData)
    await createText(author_id, textData)
    this.props.history.push('./read')
  }
  render() {
    const newAuthor = this.state.newWriter
    const authors = this.state.authors
    return (
      <>
        <form className='formUpload'>
          <select
            className='selectUpload'
            name="selectRead"
            id="selectRead"
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
            onSubmit={this.handleAuthSubmit}
            className='formUpload'>
            <input
              placeholder="Writer's name"
              name='name'
              className='shortInput'
              onChange={this.handleAuthInput}>
            </input>
            <textarea
              placeholder="Writer's biography"
              name='biography'
              className='longInput'
              onChange={this.handleAuthInput}
            ></textarea>
            <textarea
              placeholder="Notable controversy"
              name='controversy'
              className='longInput'
              onChange={this.handleAuthInput}
            >
            </textarea>
            <button type='submit'>
              Submit
              </button>
          </form>
          :
          null
        }
        {newAuthor === 2 ?
          <form
            onSubmit={this.handleTextSubmit}>
            <input
              placeholder='copy and paste title here'
              name='title'
              onChange={this.handleTextInput}>
            </input>
            <textarea
              placeholder='copy and paste text here'
              name='content'
              onChange={this.WordCount}
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

export default withRouter(Upload);