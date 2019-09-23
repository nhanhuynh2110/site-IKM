import React from 'react'
import conf from '../../../config'
const domain = conf.server.domain

class Slider extends React.PureComponent {
  render () {
    const {galleries}= this.props
    return (
      <div id='home_home_carousel' className='carousel slide' data-ride='carousel'>
        <ul className='carousel-indicators'>
          {galleries.map((el, k) => {
            if (k === 0) return <li data-target='#home_home_carousel' data-slide-to='0' className='active'></li>
            else return <li data-target='#home_home_carousel' data-slide-to={k}></li>
          })}
        </ul>

        <div className='carousel-inner'>
          {galleries.map((el, k) => {
            const active = k === 0 ? 'active' : ''
            return (
              <div key={el._id} className={`carousel-item ${active}`}>
                <img src={`${domain}/${el.image}`} alt='image' />
              </div>
            )
          })}
          
          {/* <div className='carousel-item'>
            <img src='/public/img/home_banner2.jpg' alt='image' />
          </div>
          <div className='carousel-item'>
            <img src='/public/img/home_banner3.jpg' alt='image' />
          </div> */}
        </div>

        <a className='carousel-control-prev' href='#home_home_carousel' data-slide='prev'>
          <span className='carousel-control-prev-icon'></span>
        </a>

        <a className='carousel-control-next' href='#home_home_carousel' data-slide='next'>
          <span className='carousel-control-next-icon'></span>
        </a>
      </div>
    )
  }
}

export default Slider
