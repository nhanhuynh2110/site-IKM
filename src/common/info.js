import React from 'react'

class HeaderInfo extends React.PureComponent {
  render () {
    return (
      <div id='header_info'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-6 info-col-l d-none d-sm-flex'>
              <div><a href='mailto:info@isokoma.vn' target='_top' className='txt-blur'><i className='far fa-envelope' /> info@isokoma.vn</a></div>
            </div>
            <div className='col-12 col-sm-6 info-col-r'>
              {/* <div className='txt-blur'>
                <a href='index8dbc.html?control=user&amp;action=login' className='txt-blur'>
                  Đăng nhập</a>
                  hoặc
                  <a className='txt-blur' href='#'>Tạo tài khoản</a>
              </div> */}
              {/* <div className='dropdown ml-3 pl-3 border-left'>
                <a href='#' className='dropdown-toggle txt-blur' data-toggle='dropdown'>Ngôn ngữ</a>
                <div className='dropdown-menu dropdown-menu-right'>
                  <a className='dropdown-item' href='#'>Tiếng Việt</a>
                  <a className='dropdown-item' href='#'>Tiếng Anh</a>
                </div>
              </div> */}
              <div className='txt-blur'><i className='fas fa-phone' /> 028 6650 5565</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderInfo