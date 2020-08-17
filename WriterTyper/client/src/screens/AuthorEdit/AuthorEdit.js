import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { readOneAuthor, editAuthor } from '../../services/Crud'

class AuthorEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async componentDidMount() {
    const id = this.props.match.params.authorId
    const res = await readOneAuthor(id)
    console.log(res)
    this.setState({
      author: res
    })
  }
  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({
      author: {
        ...this.state.author,
        [name]: value
      }
    })
  }
  async handleSubmit(e) {
    e.preventDefault()
    const id = this.props.match.params.authorId
    const authorData = this.state.author
    await editAuthor(id, authorData)
    this.props.history.push('/read')
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          className='authNameInput'
          value={this.state.author.name}
          onChange={this.handleChange}
        ></input>
        <input
          type='text'
          name='biography'
          className='authBioInput'
          value={this.state.author.biography}
          onChange={this.handleChange}
        ></input>
        <input
          type='text'
          name='controversy'
          className='authNameInput'
          value={this.state.author.controversy}
          onChange={this.handleChange}
        ></input>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default withRouter(AuthorEdit);