import React, { Component } from 'react'
import Radium from 'radium'

import { FlipMoveItem } from '../../lib/react-flip-move'

class Item extends Component {
  render () {
    const { index } = this.props
    return (
      <FlipMoveItem
        style={Object.assign({},
          styles.item,
          { /*flexGrow: index+1,*/ flexBasis: (index+1)*0.5*30 },
        )}
        easing="ease-in-out"
        duration={1500}
      >
        <div style={[
          styles.layer,
          { backgroundColor: `hsl(0, 0%, ${index * 5}%)` }
        ]} key="layer"></div>
      </FlipMoveItem>
    )
  }
}

const styles = {
  item: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 25,
    margin: 10,
    height: 60,
    position: 'relative',
    willChange: 'transform',
  },
  layer: {
    position: 'absolute',
    top: 0, bottom: 0,
    left: 0, right: 0,
    backgroundColor: '#FFF',
    //boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)',
    transformOrigin: '0 0',
    willChange: 'transform',
  },
}

export default Radium(Item)
