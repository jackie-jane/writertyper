import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { readAllAuthors, readAllTextByAuthor, readOneAuthor, deleteText } from '../../services/Crud'
import './Read.css'

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      valueId: 0,
      texts: [],
      submit: false,
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
  async componentDidUpdate() {
    if (this.state.submit === true) {
      try {
        const id = this.state.valueId
        const writerTexts = await readAllTextByAuthor(id)
        const writerInfo = await readOneAuthor(id)
        this.setState({
          texts: writerTexts,
          submit: false
        })
      } catch (err) {
        console.log(`encountered an error described here: ${err}`)
      }
    } else {
      console.log('nothing needs to be changed')
    }
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState({
      valueId: value,
      submit: true
    })
  }
  handleDelete = (e) => {
    const textId = e.target.value
    const authId = this.state.valueId
    deleteText(authId, textId)
    this.setState({
      submit: true
    })
  }
  render() {
    const author = this.state.valueId
    const authors = this.state.authors
    const texts = this.state.texts
    return (
      <>
        <form className='formRead'>
          <label htmlFor="authorSelect"
            className='labelRead'>
            Choose a writer:
            </label>
          <select
            name="author_id"
            id="author_id"
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
        {texts ?
          <>
            <div className='textCont'>
                <div className='topDivRead'>
                  <div className='titleAndAuthor'>
                    <h2>{this.state.texts[0].author.name}</h2>
                  </div>
                  <Link to={`/edit/${author}/${element.id}`}>
                    <button
                      className='editButtonOnRead'>
                      Edit
                      </button>
                  </Link>
                  <button
                    className='deleteButtonOnRead'
                    onClick={this.handleDelete}
                    value={element.id}>
                    Delete
                    </button>
                </div>
                <p className='contentOnRead'>{element.content}</p>
              </div>
            {texts.map(element =>
              <div className='textCont'>
                <div className='topDivRead'>
                  <div className='titleAndAuthor'>
                    <h2>{element.title}</h2>
                    <h4>{element.author.name}</h4>
                  </div>
                  <Link to={`/edit/${author}/${element.id}`}>
                    <button
                      className='editButtonOnRead'>
                      Edit
                      </button>
                  </Link>
                  <button
                    className='deleteButtonOnRead'
                    onClick={this.handleDelete}
                    value={element.id}>
                    Delete
                    </button>
                </div>
                <p className='contentOnRead'>{element.content}</p>
              </div>
            )}
          </>
          :
          null
        }
      </>
    );
  }
}
export default Read;
