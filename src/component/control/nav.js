import React from 'react'

class NavList extends React.PureComponent {
  render() {
    const {nav} = this.props
    return (
      <div className='col-12 col-sm-3 content-l'>
        <div className='l-menu'>
          <h5>THƯƠNG HIỆU</h5>
          <div className='list-group'>
            {nav.map(el => {
               return (
                <a key={el._id} href={'/' + el.link} className='text-uppercase'>
                  {el.title}
                </a>
                )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default NavList