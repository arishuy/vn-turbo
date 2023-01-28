import React from 'react'
import '../styles/Recommend.css'
import RecommendCard from './RecommendCard'

const Recommend = () => {
  return (
    <div className="recommend">
        <div className="recommend__header">
            <div className="recommend__header__title">
                <span>Gợi ý cho bạn</span>
            </div>
            <div className="recommend__header__see-all">
                <span>Xem tất cả</span>
            </div>
        </div>
        <div className="recommend__body">
            <RecommendCard />
            <RecommendCard />
            <RecommendCard />
            <RecommendCard />
            <RecommendCard />
        </div>
    </div>
  )
}

export default Recommend