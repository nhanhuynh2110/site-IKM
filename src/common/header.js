import React from 'react'

import Info from './info'
import HeaderLogo from './logo'
import HeaderMenu from './menu'

class Headers extends React.PureComponent {
  render () {
    return (
      <>
        <Info />
        <HeaderLogo />
        <HeaderMenu categories={this.props.categories}/>
      </>
    )
  }
}

export default Headers
