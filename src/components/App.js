import React, { Component } from 'react'
import { connect } from 'react-redux'
import MemeItem from './MemeItem'
import MyMemes from './MyMemes'

import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

import '../styles/style.css'

class App extends Component {
  state = {
    memeLimit: 10,
    textTop: '',
    textBottom: ''
  }

  render() {
    const { memes } = this.props
    const { memeLimit } = this.state
    const limitMemes = memes.slice(0, this.state.memeLimit)

    return (
      <div>
        <h2><u>Welcome to the Meme Generator!</u></h2>
        <MyMemes />
        <h4><i>Write Some Text</i></h4>

        <Form inline={true}>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            {' '}
            <FormControl
              type="text"
              value={this.state.textTop}
              inputRef={node => this.inputTop = node}
              onChange={event => this.setState(prevState => ({
                textTop: this.inputTop.value
              }))}
            ></FormControl>
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            {' '}
            <FormControl
              type="text"
              value={this.state.textBottom}
              inputRef={node => this.inputBottom = node}
              onChange={event => this.setState(prevState => ({
                textBottom: this.inputBottom.value
              }))}
            ></FormControl>
          </FormGroup>
        </Form>

        {limitMemes.map((meme, index) =>
          <MemeItem
            key={index}
            meme={meme}
            textTop={this.state.textTop}
            textBottom={this.state.textBottom}
          />
        )}

        <div
          className="meme-button"
          onClick={() => this.setState(prevState => ({
            memeLimit: prevState.memeLimit + 10
          }))}
        >
          Load 10 more memes
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, null)(App)