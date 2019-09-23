import React from 'react'
import config from '../../../config'
const domain = config.server.domain

class HomeCategory extends React.PureComponent {
  render () {
    let categories = []

    if (this.props.categories) categories = this.props.categories
    return (
      <div id='home_home_category' className='container'>
        <div className='row'>
          {categories.map((el, k) => {
            return (
              <div key={el._id} className='col-12 col-sm-4'>
                <div className='card'>
                  <img className='card-img-top' src={domain + '/' + el.img} alt='image' />
                  <div className='card-img-overlay'>
                  <a href={'/' + el.link}><h5 className='card-title'>{el.title}</h5></a>
                    <p className='card-text txt-blur'>{el.description}</p>
                    <a href={'/' + el.link}>XEM <i className='fas fa-chevron-circle-right' /></a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default HomeCategory