import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { readOneAuthor, editAuthor } from '../../services/Crud'


class AuthorEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: []
    }
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
        ...this.state.profile,
        [name]: value
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const id = this.props.match.params.authorId
    const authorData = this.state.autho
    editAuthor(id, authorData)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          className='authNameInput'
          defaultValue={this.state.author.name}
          onChange={this.handleChange}
        ></input>
        <input
          type='text'
          name='biography'
          className='authBioInput'
          defaultValue={this.state.author.biography}
          onChange={this.handleChange}
        ></input>
        <input
          type='text'
          name='controversy'
          className='authNameInput'
          defaultValue={this.state.author.controversy}
          onChange={this.handleChange}
        ></input>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default withRouter(AuthorEdit);