import React, { Component } from 'react'
import { readScore } from '../../../services/Crud'
import { withRouter } from 'react-router-dom'
import './Score.css'
class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: '',
      username: '',
      vaild: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  async componentDidMount() {
    const writerId = this.props.match.params.authorId
    const textId = this.props.match.params.textId
    let scoreInfo = await readScore(writerId, textId)
    if (scoreInfo.length < 1) {
      this.setState({
        valid: false
      })
    } else {
      const topScore = scoreInfo[0]
      const newUsername = topScore.username
      const newScore = topScore.score
      this.setState({
        score: newUsername,
        username: newScore,
        valid: true
      })
    }
  }
  render() {
    return (
      <>
        {this.state.valid ?
        <div className='score'>
          <h3 className='topScore'>Top Score</h3>
          <p>{this.state.username} - {this.state.score}</p>
        </div>
        :
        <div className='score'>
          <h3 className='topScore'>Top Score</h3>
          <p>No scores yet recorded</p>
        </div>
      }
      </>
    );
  }
}

export default withRouter(Score);
