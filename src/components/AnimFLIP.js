import React, { Component } from 'react'
import Radium from 'radium'

import Button from './Button'

class ItemBase extends Component {
  render() {
    const {letter, index, step} = this.props
    return (
      <div style={[
        stylesItem.container,
        step >= 2 && { transform: `translateY(${index === 0 ? '360px' : '-180px'})` },
      ]}>

        <div style={[
          stylesItem.containerInner,
          stylesItem.containerDOM,
          step >= 1 && stylesItem.containerDOMStep1,
        ]}>
          <div style={stylesItem.letter}>{letter}</div>
        </div>

        <div style={[
          stylesItem.containerInner,
          stylesItem.containerGraphic,
          step >= 1 && stylesItem.containerGraphicStep1,
          step >= 2 && stylesItem.containerGraphicStep2,
          step >= 3 && { transform: `translateZ(100px) translateX(100px) translateY(${index === 0 ? '-360px' : '180px'})`, opacity: 1 },
          step >= 4 && { transform: `translateZ(100px) translateX(100px)` },
        ]}>
          <div style={stylesItem.letter}>{letter}</div>
        </div>

      </div>
    )
  }
}

const stylesItem = {
  container: {
    width: 320,
    height: 160,
    margin: 10,
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform ease 2s,opacity ease 2s',
  },
  containerInner: {
    position: 'absolute',
    top: 0, left: 0,
    bottom: 0, right:0,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d',
    transition: 'transform ease 2s,opacity ease 2s',
  },

  containerDOM: {
    border: 'dashed black 10px',
  },
  containerDOMStep1: {
    transform: 'translateZ(-100px) translateX(-100px)',
  },

  containerGraphic: {
    backgroundColor: 'white',
  },
  containerGraphicStep1: {
    transform: 'translateZ(100px) translateX(100px)',
  },
  containerGraphicStep2: {
    opacity: 0.4,
  },

  letter: {
    fontSize: 60,
    fontWeight: 'bold',
  },
}

const Item = Radium(ItemBase)

class AnimFLIP extends Component {

  state = {
    step: 0,
  }

  addStep = () => {
    const nextStep = this.state.step + 1
    this.setState({
      step: nextStep > 4 ? 0 : nextStep,
    })
  }

  render () {
    const { step } = this.state

    return (
      <div>
        <div style={[
          styles.container,
          step >= 1 && styles.containerStep1,
        ]}>
          <Item letter="A" index={0} step={step} />
          <Item letter="B" index={1} step={step} />
          <Item letter="C" index={2} step={step} />
        </div>
        <div style={styles.control}>
          <Button onClick={this.addStep}>Next Step</Button>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    //backgroundColor: 'rgba(0,0,0,0.2)',
    transformStyle: 'preserve-3d',
    transition: 'transform ease 2s,opacity ease 2s',
  },
  containerStep1: {
    transform: 'rotateY(36deg)',
  },
  control: {
    transform: 'translateY(100px)',
    textAlign: 'right',
  }
}

export default Radium(AnimFLIP)
