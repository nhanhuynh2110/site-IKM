import React from 'react'

import Slider from '../../../component/control/slider'
import HomeProduct from '../../../component/control/homeProduct'
import HomeCategory from '../../../component/control/homeCategory'
import { withContainer } from '../../../context'

class HomePage extends React.PureComponent {
  componentDidMount () {
    this.props.api.home.get()
  }

  render () {
    let categoriesIsHome = []
    let {categories, galleries, productsNew, productsHot} = this.props
    if (categories) categoriesIsHome = categories.filter(cat => cat.isHome === true)
    if (!galleries) galleries = []
    return (
      <div id='content' className='site-content'>
        <Slider galleries={galleries}/>
        <HomeProduct categories={categories || []} productsNew={productsNew} productsHot={productsHot} />
        <HomeCategory categories={categoriesIsHome} />
      </div>
    )
  }
}

// export default HomePage

export default withContainer(HomePage, (c, props) => ({
  api: c.api,
  galleries: c.data.galleries || [],
  categories: c.data.categories || [],
  productsNew: c.data.productsNew || [],
  productsHot: c.data.productsHot || []
}))
