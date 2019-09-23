import React from 'react'

import Paging from './paging'
import conf from '../../../config'
const domain = conf.server.domain

class ListProduct extends React.PureComponent {
  
  render() {
    const {products, catId, pageSize, page = 1, total, onChangePaging} = this.props
    return (
      <div className='col-12 col-sm-9 content-r'>
        <div className='row'>
          {products.map(el => {
            const link = '/' + catId + '/' + el.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9 ]/g, '').replace(/[ ]/g, '-').toLowerCase() + '-' + el._id
            return (
              <div key={el._id} className='col-12 col-sm-3 r-item'>
                <div className='card box-product'>
                  <div className='wrap-img'>
                    <a href={link}><img className='card-img-top' src={`${domain}/${el.image}`} alt='image' /></a>
                  </div>
                  <div className='card-body'>
                    <p className='product-name'>
                      <a href={link}>{el.title}</a>
                    </p>
                    <p className='text-center text-danger'>
                      <b>{el.price}<sup>đ</sup></b>
                    </p>
                  </div>
                  <div className='pre-order'>Pre-order</div>
                </div>
              </div>
            )
          })}
        </div>
        <Paging page={page} total={total} pageSize={pageSize} changePage={onChangePaging}/>
      </div>
    )
  }
}

export default ListProduct