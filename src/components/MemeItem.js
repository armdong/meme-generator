import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMeme } from '../actions'

class MemeItem extends Component {
  state = {
    hovered: false
  }

  postMeme = () => {
    const { meme, textTop, textBottom, createMeme } = this.props
    const memeObj = {
      template_id: meme.id,
      text0: textTop,
      text1: textBottom
    }
    createMeme(memeObj)
  }

  render() {
    const { meme } = this.props
    const { hovered } = this.state

    return (
      <div
        className="meme-item"
        onMouseEnter={() => this.setState(prevState => ({
          hovered: true
        }))}
        onMouseLeave={() => this.setState(prevState => ({
          hovered: false
        }))}
        onClick={this.postMeme}
      >
        <img
          className={
            hovered
             ? "meme-img darken-img"
             : "meme-img"
          }
          src={meme.url}
          alt={meme.name}
        />
        <p className={
          hovered
            ? "meme-txt"
            : "no-txt"
        }>
          {meme.name}
        </p>
      </div>
    )
  }
}

export default connect(null, { createMeme })(MemeItem)