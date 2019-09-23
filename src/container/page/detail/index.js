import React from 'react'
import Breadcrunbs from '../../../component/control/breadcrumbs.js'
import { withContainer } from '../../../context'
import Nav from '../../../component/control/nav'
import conf from '../../../../config'
const domain = conf.server.domain

class Detail extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      catId: null,
      category: null,
      nav: [],
      postlink: null,
      data: null,
      mainImg: ''
    }

    this.changeMainImg = this.changeMainImg.bind(this)
  }

  createMarkup (html) {
    return { __html: html }
  }

  changeMainImg (e) {
    const img = e.target.getAttribute('data-img')
    this.setState({mainImg: img})
  }

  componentDidMount () {
    this.getDetail()
  }

  componentDidUpdate () {
    if (this.props.catId !== this.state.catId || this.props.postlink !== this.state.postlink) {
      // this.getDetail()
    }
  }

  getDetail () {
    let {catId, postlink} = this.props
    const arr = postlink.split('-')
    const postId = arr[arr.length - 1]
    this.props.api.detail.get({id: postId}, (err, data) => {
      if (err) return
      this.setState({
        catId: catId,
        category: data.category,
        nav: data.categories,
        postlink: postlink,
        data: data.product,
        mainImg: data.product.image
      })
    })
  }


  render() {
    const { data } = this.state
    const mainImg = _.get(this.state, 'mainImg')
    const galleries = _.get(data, 'gallery') || []
    console.log('data', data)
    return (
      <>
        <Breadcrunbs category={this.props.category} categories={this.props.categories} />
        <div id='product_detail_content' className='container'>
          <div className='row detail-product'>
            <Nav nav={this.props.nav || []} />
            <div className='col-12 col-sm-9 content-r'>
              <div className='row'>
                <div className='col-12 col-sm-6'>
                  <div className='main-img'>
                    {/* {data.price && data.price} */}
                    {data && <img src={`${domain}/${mainImg || ''}`} alt='image' />}
                  </div>
                  <div className='sub-img'>
                    {galleries.map((el, index) => {
                      return (
                        <div key={el.image + index}>
                          <img data-img={el} onClick={this.changeMainImg} src={`${domain}/${el}`} alt='image' />
                        </div>
                      )
                    })}
                  </div>
                  {
                    // data && data.gallery && <div className='sub-img'>
                    //   {data.gallery.map((el, index) => {
                    //     return (
                    //       <div key={el.image + index}>
                    //         <img src='http://localhost:3100//product/74ad51ccc15f959b261e9818bb1c944f6b0b7741.jpg' alt='image' />
                    //       </div>
                    //     )
                    //   }) }
                    // </div>
                  }
                  
                </div>
                <div className='col-12 col-sm-6'>
                  <div className='text-uppercase mb-3 name-product'>{data ? data.title : null}</div>
                  <div className='txt-blur mb-2'><b>MSP:</b> {data ? data.code : null}</div>
                  <div className='txt-blur mb-3'><b>SIZE:</b> 400%</div>
                  <div className='mb-3'>
                    <span className='price-product'>{data ? data.price : null}<sup>đ</sup></span>
                  </div>
                </div>
                <div className='col-12 col-sm-12'>
                  <div className="tab-link current" data-tab="tab-description">
                    <h5 href="#tab-description" data-toggle="tab"> <span>Mô tả</span></h5>
                  </div>
                  <div className='tab-description tab-content current' id='tab-description'>
                    <div className='rte'>
                      {data ? data.description : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </>
    )
  }
}

class Wrapper extends React.PureComponent {
  render () {
    const {categories} = this.props
    let category = null
    let nav = []
    let {catId, postlink} = this.props.match.params

    if (categories && categories.length > 0) {
      category = categories.find(el => el.link === catId)
      const parentId = category.parentId ? category.parentId : category._id
      nav = categories.filter(el => el.parentId === parentId)
    }
    return (
      <React.Fragment>
        <Detail api={this.props.api} catId={catId} categories={this.props.categories} category={category} nav={nav} postlink={postlink} />
      </React.Fragment>
    )
  }
}
export default withContainer(Wrapper, (c, props) => ({
  api: c.api,
  categories: c.data.categories
}))