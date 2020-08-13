import React, { Component } from 'react';
import { readOneByAuthor } from '../../services/Crud'
import { withRouter } from 'react-router-dom'
import './Edit.css'

class Edit extends Component {
  constructor(props) {
    super(props);

  }
 
  async componentDidMount() {
    const authorId = this.props.match.authorId
    const textId = this.props.match.textId
    console.log(this.props)
    console.log(authorId)
    console.log(textId)
    const textToEdit = await readOneByAuthor(authorId, textId)
    console.log(textToEdit)
  }
  render() {
    return (
      <>
      </>
    );
  }
}

Edit.propTypes = {

};

export default withRouter(Edit);
