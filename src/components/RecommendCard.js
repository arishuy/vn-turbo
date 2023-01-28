import React from "react";

const RecommendCard = () => {
  return (
    <div className="recommend__body__item">
      <div className="recommend__body__item__avatar">
        <img
          src="https://designs.vn/wp-content/images/09-08-2013/logo_lagi_8_resize.JPG"
          alt="avatar"
        />
      </div>
      <div className="recommend__body__item__info">
        <div className="recommend__body__item__info__name">
          <span>Nguyễn Văn A</span>
        </div>
        <div className="recommend__body__item__info__follow">
          <span>Theo dõi</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
