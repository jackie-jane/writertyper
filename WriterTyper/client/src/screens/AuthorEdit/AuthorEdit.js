import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { readOneAuthor, editAuthor } from '../../services/Crud'


class AuthorEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: []
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeBio = this.handleChangeBio.bind(this)
    this.handleChangeCon = this.handleChangeCon.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  async componentDidMount() {
    const id = this.props.match.params.authorId
    const res = await readOneAuthor(id)
    console.log(res)
    this.setState({
      author: res
    })
  }

  handleChangeName = (e) => {
    e.preventDefault()
    const value = e.target.value
    this.setState({
      author: {
        ...this.state.author,
        name: value
      }
    })
  }
  handleChangeBio = (e) => {
    e.preventDefault()
    const value = e.target.value
    this.setState({
      author: {
        ...this.state.author,
        biography: value
      }
    })
  }
  handleChangeCon = (e) => {
    e.preventDefault()
    const value = e.target.value
    this.setState({
      author: {
        ...this.state.author,
        controversy: value
      }
    })
  }
  async handleSubmit(e) {
    e.preventDefault()
    const id = this.props.match.params.authorId
    const authorData = this.state.author
    await editAuthor(id, authorData)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          className='authNameInput'
          value={this.state.author.name}
          onChange={this.handleChangeName}
        ></input>
        <input
          type='text'
          name='biography'
          className='authBioInput'
          value={this.state.author.biography}
          onChange={this.handleChangeBio}
        ></input>
        <input
          type='text'
          name='controversy'
          className='authNameInput'
          value={this.state.author.controversy}
          onChange={this.handleChangeCon}
        ></input>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default withRouter(AuthorEdit);