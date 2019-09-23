import React from 'react'

import conf from '../../../config'

const domain = conf.server.domain

class Breadcrumbs extends React.PureComponent {
  render() {
    const { category, categories } = this.props
    return (
      <div className='box-breadcrumb'>
        <img src={`${domain}/${category && category.img}`} alt='image' />
        <div className='banner-text text-center'>
          <h4 className='mb-0'>{category && category.title}</h4>
          <div className='d-none d-sm-block'><a href='/'>Trang chủ</a> &gt; {category && category.title}</div>
        </div>
      </div>
    )
  }
}

export default Breadcrumbs