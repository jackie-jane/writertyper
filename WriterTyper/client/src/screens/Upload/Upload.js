import React, { Component } from 'react';
import { createText, readAllAuthors } from '../../services/Crud'

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
      authorId: ''
    }
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
    this.setState({
      text: {
        title: e.target.value
      }
    })
  }
  handleChange = (e) => {
    this.setState({
      text: {
        authorId: e.target.value
      }
    })
  }
  handleInput = (e) => {
    const newText = e.target.value
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
    const authorId = this.state.authorId
    const textData = this.state.text
    createText(authorId, textData)
    console.log('created')
  }
  render() {
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
              onChange={this.handleInput}>
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