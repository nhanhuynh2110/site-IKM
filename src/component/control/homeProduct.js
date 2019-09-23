import React from 'react'
import config from '../../../config'
const domain = config.server.domain

class HomeProduct extends React.PureComponent {
  render () {
    let productsNew = []
    let productsHot = []
    if (this.props.productsNew) productsNew = this.props.productsNew
    if (this.props.productsHot) productsHot = this.props.productsHot
    const {categories} = this.props
    console.log('cats', categories)
    return (
      <>
        <div className='container home_home_product'>
          <h5 className='text-left'>SẢN PHẨM MỚI</h5>
          <div className='row'>
            {productsNew.map((el, k) => {
              console.log(el)
              let category = categories.find(e => e._id === el.categoryId)
              console.log('category', category)
              const catgoryLink = _.get(category, 'link')
              return (
                <div key={el._id} className='col-12 col-sm-3'>
                  
                  <div className='card box-product'>
                    <div className='wrap-img'>
                      <a href={'/' + catgoryLink + '/' + el.link + '-' +  el._id}>
                        <img className='card-img-top' src={domain + '/' + el.image} alt='image' />
                      </a>
                    </div>
                    <div className='product-info a-center'> 
                      <h3 className='product-name'> 
                        <a href={'/' + catgoryLink + '/' + el.link + '-' +  el._id} title={el.title}>
                          <span>{el.title}</span>
                        </a>
                      </h3>
                    <div className='price-box clearfix'>
                      <div className='special-price'>
                        <span className='price product-price'>{el.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='container home_home_product'>
          <h5 className='text-left'>SẢN PHẨM NỔI BẬT</h5>
          <div className='row'>
            {productsHot.map((el, k) => {
              let category = categories.find(e => e._id === el.categoryId)
              const catgoryLink = _.get(category, 'link')
              return (
                <div key={el._id} className='col-12 col-sm-3'>
            
                  <div className='card box-product'>
                    <div className='wrap-img'>
                      <a href={'/' + catgoryLink + '/' + el.link + '-' +  el._id}>
                        <img className='card-img-top' src={domain + '/' + el.image} alt='image' />
                      </a>
                    </div>
                    <div className='product-info a-center'> 
                      <h3 className='product-name'> 
                        <a href={'/' + catgoryLink + '/' + el.link + '-' +  el._id} title={el.title}>
                          <span>{el.title}</span>
                        </a>
                      </h3>
                    <div className='price-box clearfix'>
                      <div className='special-price'>
                        <span className='price product-price'>{el.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='top-policy container ' id='service-0'>
          <div className='row'>
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='block-wrapper support'>
                <div className='img-icon'>
                  <img src='https://industech.exdomain.net/image/cache/catalog/services/bkg-support-80x80.png' alt='Sản phẩm chính hãng' className='fa' />
                </div>
                <div className='text-des'>
                    <h3>Sản phẩm chính hãng</h3>
                    <p></p><p>Chúng tôi cam kết 100% sản phẩm là hàng chính hãng, chất lượng cao</p><p></p>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='block-wrapper support BGFBAF5D'>
                <div className='img-icon'>
                  <img src='https://industech.exdomain.net/image/cache/catalog/services/bkg-return-80x80.png' alt='Bảo hành chuyên nghiệp' className='fa' />
                </div>
                <div className='text-des'>
                    <h3>Bảo hành chuyên nghiệp</h3>
                    <p></p><p>Dịch vụ bảo hành tận nơi chuyên nghiệp, tận tình và chu đáo cho khách hàng</p><p></p>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='block-wrapper support BG00AEEF'>
                <div className='img-icon'>
                  <img src='https://industech.exdomain.net/image/cache/catalog/services/bkg-ship-80x80.png' alt='Giá tốt nhất tại Việt Nam' className='fa' />
                </div>
                <div className='text-des'>
                    <h3>Giá tốt nhất tại Việt Nam</h3>
                    <p></p><p>Tự tin là nhà cung cấp sản phẩm nội thất với giá cả tốt nhất tại Việt Nam</p><p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default HomeProduct
