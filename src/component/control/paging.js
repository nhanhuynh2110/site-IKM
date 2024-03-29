import React from 'react'

class Paging extends React.PureComponent {
  render () {

    const { page = 1, total, pageSize = 1, changePage } = this.props
    var count = Math.ceil(parseInt(total) / parseInt(pageSize))

    var pages = []

    const pageNumber = parseInt(page)

    var pre = (pageNumber > 1) ? pageNumber - 1 : 1
    var next = (pageNumber < count) ? pageNumber + 1 : count

    let start = 1
    if (pageNumber > 3) {
      start = pageNumber - 2
    }

    if (count > 2) pages.push(<li key='first' data-page={1} onClick={changePage} className='page-item'><a className='page-link'>First</a></li>)
    pages.push(<li key='pre' data-page={pre} onClick={changePage} className='page-item'><a className='page-link'>{'<'}</a></li>)

    for (var i = start; i <= count; i++) {
      if (pageNumber + 3 === i) break
      var active = i === pageNumber ? 'paginate_button active' : 'paginate_button'
      pages.push(<li key={i} data-page={i} onClick={changePage} className={'page-item ' + active}><a className='page-link'>{i}</a></li>)
    }

    pages.push(<li key='next' data-page={next} onClick={changePage} className='page-item'><a className='page-link'>{'>'}</a></li>)
    if (count > 2) pages.push(<li key='last' data-page={count} onClick={changePage} className='page-item'><a className='page-link'>Last</a></li>)
    return <ul className='pagination justify-content-center box-pagination'>{pages}</ul>
  }
}

export default Paging
