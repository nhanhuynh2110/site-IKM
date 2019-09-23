import React from 'react'

class HeaderLogo extends React.PureComponent {
  render () {
    return (
      <>
        <div id='header_logo' className='container'>
            <div className='row'>
                <div className='col-12 col-sm-4 logo-col-l d-none d-sm-flex'>
                  <a href='/'><img src='/public/img/logo.jpg' alt='image' /></a>
                </div>
                <div className='col-12 col-sm-8 text-center logo-col-c d-none d-sm-block'>
                  
                </div>
            </div>
            <div className='hr-line' />
        </div>
      </>
    )
  }
}

export default HeaderLogo
