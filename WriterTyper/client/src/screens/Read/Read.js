import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { deleteAuthor, readAllAuthors, readAllTextByAuthor, readOneAuthor, deleteText } from '../../services/Crud'
import './Read.css'

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      valueId: '',
      texts: [],
      submit: false,
      writerInfo: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAuthDelete = this.handleAuthDelete.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAuthDelete = this.handleAuthDelete.bind(this)
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
          submit: false,
          writerInfo: writerInfo
        })
      } catch (err) {
        console.log(`encountered an error described here: ${err}`)
      }
    }
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState({
      valueId: value,
      submit: true
    })
  }
  async handleAuthDelete() {
    const id = this.state.valueId
    await deleteAuthor(id)
    window.location.reload(false);
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
    const writer = this.state.writerInfo
    return (
      <>
        <div className='selectCont'>
          <form className='formRead'>
            <select
              name="author_id"
              id="author_id"
              className='selectRead'
              onChange={this.handleChange}>
              <option>
                Choose a writer
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
        </div>
        {author ?
          <>
            <div className='textCont'>
              <div className='topDivRead'>
                <div className='titleAndAuthor'>
                  <h2>{writer.name}</h2>
                </div>
                <Link to={`/author/${this.state.valueId}`}>
                  <button
                    className='editButtonOnRead'>
                    Edit
                      </button>
                </Link>
                <button
                  className='deleteButtonOnRead'
                  onClick={this.handleAuthDelete}
                  value={this.state.valueId}>
                  Delete
                    </button>
              </div>
              <p className='contentOnRead'>{writer.biography}
                <br></br><br></br>
              </p>
              {writer.controversy}
            </div>
            {texts.map(element =>
              <div className='textCont'>
                <div className='topDivRead'>
                  <div className='titleAndAuthor'>
                    <h2>{element.title}</h2>
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
                <textarea
                  className='contentOnRead'
                  value={element.content}
                  disabled="disabled" >
                </textarea>
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
