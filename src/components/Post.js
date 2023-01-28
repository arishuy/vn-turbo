import React from 'react'
import '../styles/Post.css'

const Post = () => {
  return (
        <div className="post">
          <div className="post__header">
            <div className="post__header__avatar">
              <img
                src="https://designs.vn/wp-content/images/09-08-2013/logo_lagi_8_resize.JPG"
                alt="avatar"
              />
            </div>
            <div className="post__header__info">
              <div className="post__header__info__name">
                <a href="#">Nguyễn Văn A</a>
              </div>
              <div className="post__header__info__time">
                <span>1 giờ trước</span>
              </div>
            </div>
          </div>
          <div className="post__body">
            <div className="post__body__content">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae.{" "}
              </p>
            </div>
            <div className="post__body__image">
              <img
                src="https://designs.vn/wp-content/images/09-08-2013/logo_lagi_8_resize.JPG"
                alt="image"
              />
            </div>
          </div>
          <div className="post__footer">
            <div className="post__footer__like">
              <i className="fa-solid fa-heart"></i>
              <span>Thích</span>
            </div>
            <div className="post__footer__comment">
              <i className="fa-solid fa-comment"></i>
              <span>Bình luận</span>
            </div>
            <div className="post__footer__share">
              <i className="fa-solid fa-share"></i>
              <span>Chia sẻ</span>
            </div>
          </div>
        </div>
  )
}

export default Post