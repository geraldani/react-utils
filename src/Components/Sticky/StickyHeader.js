import React, { Component, createRef } from 'react'
import style from './styles'

class StickyHeader extends Component {
  constructor (props) {
    super(props)
    this.header = createRef()
    this.state = {
      heightHeader: 0
    }
  }

  scrollChange = (top = 0) => {
    if(window.pageYOffset > top){
      this.header.current.classList.add('sticky')
      this.header.current.classList.remove('shadow')
    }else{
      this.header.current.classList.remove('sticky')
      this.header.current.classList.add('shadow')
    }
  }

  componentDidMount () {
    console.log(this.header)
    const topHeader = this.header.current.offsetTop
    window.addEventListener('scroll', () => { this.scrollChange(topHeader) })
    this.setState({
      heightHeader: this.header.current.clientHeight
    })
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', () => this.scrollChange());
  }

  render () {
    return (
      <style.header ref={this.header} height={this.state.heightHeader} className='shadow'>
        {this.props.children}
      </style.header>
    )
  }
}

export default StickyHeader
