import React, { Component } from 'react'
import FlipMove from 'react-flip-move'

import Button from '../Button'
import Item from './item'

const itemCount = 20
const arrayDatas = Array(itemCount).fill('a').map((value, index) => ({ key: index }))


class WrapLayout extends Component {
  state = {
    data: arrayDatas
  }

  suffle = () => {
    this.setState({
      data: this.state.data.concat().sort(() => Math.random() > 0.5 ? -1 : 1)
    })
  }

  render () {
    return (
      <div>
        <FlipMove
          style={styles.container}
          easing="ease-in-out"
          duration={1500}
        >
        {
          this.state.data.map((datum) =>
            <Item key={datum.key} index={datum.key} />
          )
        }
        </FlipMove>

        <div style={styles.control}>
          <Button onClick={this.suffle}>Suffle</Button>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
    //backgroundColor: 'rgba(0,0,0,0.5)',
  },
  control: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateY(60px)',
    textAlign: 'right',
  }
}

export default WrapLayout
