import React from 'react'

class HeaderMenu extends React.PureComponent {
  render() {
    const parents = this.props.categories.filter(el => !el.parentId)
    return (
      <nav id='header_menu' className='navbar navbar-expand-sm sticky-top'>
        <a className='navbar-brand d-sm-none' href='/'>
          <img src='/public/img/logo.jpg' />
        </a>

        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsible_navbar'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='collapsible_navbar'>
          <ul className='navbar-nav'>
            <li className='nav-item m-active'>
                <a className='nav-link' href='/'>Trang Chu</a>
              </li>
            {parents.map((el, k) => {
              const children = this.props.categories.filter(element => element.parentId === el._id)
              if (children.length > 0) {
                return (
                  <li key={k} className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' data-toggle='dropdown' href={'/' + el.link}>{el.title}</a>
                    <div className='dropdown-menu'>
                      {children.map(e => <a key={e._id} className='dropdown-item' href={'/' + e.link}>{e.title}</a>)}
                    </div>
                  </li>
                )
              } else {
                return (
                  <li key={k} className='nav-item'>
                    <a className='nav-link' href={'/' + el.link}>{el.title}</a>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </nav>
    )
  } 
}

export default HeaderMenu
