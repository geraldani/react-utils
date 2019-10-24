import React, { Component, createRef } from 'react'
import style from './styles'

class StickyElement extends Component {
  constructor (props) {
    super(props)
    this.header = createRef()
    this.state = {
      heightElement: 0,
      spaceNextElement: 0
    }
  }

  handleScroll = (top = 0) => {
    if(window.pageYOffset > top){
      this.header.current.classList.add('sticky')
      this.header.current.classList.remove('shadow')
    }else{
      this.header.current.classList.remove('sticky')
      this.header.current.classList.add('shadow')
    }
  }

  componentDidMount () {
    const nextElement = document.querySelector('#stickyContainer+*') //obtengo el elemento que le sigue al sticky
    const elementStyle = getComputedStyle(nextElement) //obtengo los estilos de ese elemento
    const space = parseInt(elementStyle.paddingTop) + parseInt(elementStyle.marginTop) //sumo el padding y el margin de ese elemento
    const topHeader = this.header.current.offsetTop

    this.setState({
      heightElement: this.header.current.clientHeight,
      spaceNextElement: space
    })

    window.addEventListener('scroll', () => this.handleScroll(topHeader))

  }

  componentWillUnmount () {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  render () {
    return (
      <style.div id='stickyContainer' ref={this.header} {...this.state} className='shadow'>
        {this.props.children}
      </style.div>
    )
  }
}

export default StickyElement
