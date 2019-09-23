import React from 'react'

class Footer extends React.PureComponent {
  render () {
    return (
      <>
        <div id='footer_content' className='container'>
          <div className='container'>
            <div className='row'>
                <div className='col-12 col-sm-3'>
                  <p><b>Danh mục</b></p>
                  <ul>
                    <li><a href='index0a86.html?control=product&amp;category=1' className='txt-blur'>Toys</a></li>
                    <li><a href='index1bf4.html?control=product&amp;category=2' className='txt-blur'>Tranh</a></li>
                    <li><a href='index8114.html?control=product&amp;category=3' className='txt-blur'>Thời trang</a></li>
                    <li><a href='index4515.html?control=product&amp;category=4' className='txt-blur'>Đồ điện tử</a></li>
                    <li><a href='index061c.html?control=product&amp;category=5' className='txt-blur'>Hàng gia dụng</a></li>
                    <li><a href='index8df0.html?control=product&amp;category=6' className='txt-blur'>Thực phẩm</a></li>
                  </ul>
                </div>
                <div className='col-12 col-sm-3'>
                  <p><b>Thông tin</b></p>
                  <ul>
                    <li><a href='indexb807.html?control=about' className='txt-blur'>Giới thiệu</a></li>
                    <li><a href='indexca4c.html?control=contact' className='txt-blur'>Liên hệ</a></li>
                    <li><a href='#' className='txt-blur'>Điều khoản và điều kiện</a></li>
                    <li><a href='#' className='txt-blur'>Chính sách bảo mật</a></li>
                    <li><a href='#' className='txt-blur'>Dịch vụ khách hàng</a></li>
                    <li><a href='#' className='txt-blur'>Câu hỏi thường gặp</a></li>
                  </ul>
                </div>
                <div className='col-12 col-sm-3'>
                  <p><b>Tài khoản</b></p>
                  <ul>
                    <li><a href='#' className='txt-blur'>Tài khoản của tôi</a></li>
                    <li><a href='#' className='txt-blur'>Theo dõi đơn hàng</a></li>
                    <li><a href='#' className='txt-blur'>Danh sách yêu thích</a></li>
                    <li><a href='index790f.html?control=cart' className='txt-blur'>Giỏ hàng</a></li>
                    <li><a href='#' className='txt-blur'>Thanh toán</a></li>
                  </ul>
                </div>
                <div className='col-12 col-sm-3 text-right'>
                  <p><b>Đăng kí nhận tin</b></p>
                  <p className='txt-blur'>Đăng ký ngay để được giảm 15% trên bất kỳ sản phẩm nào</p>
                <div className='input-group'>
                  <input type='email' className='form-control txt-email-subscribe' placeholder='Email của bạn' />
                  <div className='input-group-append'>
                    <button className='btn btn-subscribe' type='button'><i className='fas fa-angle-right' /></button> 
                  </div>
                </div>
                </div>
              </div>
          </div>
        </div>

        <div id='footer_rights' className='container text-center txt-blur'>&copy; <a href='index-2.html'><b>Isokoma VN</b></a> - All rights Reserved</div>
      </>
    )
  }
}

export default Footer
