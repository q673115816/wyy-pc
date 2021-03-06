import React, { memo } from 'react';
import { Link } from 'react-router-dom';

export default memo(({ list = [] }) => (
  <div className="list">
    {list.map((item) => (
      <Link
        to={`/friend/${item.actId}`}
        key={item.actId}
        className="item py-1 pl-5 flex hover:bg-gray-100"
      >
        <div className="cover w-10 h-10 flex-none">
          <img className="rounded" src={`${item.sharePicUrl}?param=50y50`} alt="" />
        </div>
        <div className="content px-2 flex-auto">
          <div className="title flex items-center">
            #
            <span className="truncate" style={{ maxWidth: 160 }}>
              {item.title}
            </span>
            #
          </div>
          <div className="participateCount text-gray-300">
            {`${item.participateCount}人参与`}
          </div>
        </div>
      </Link>
    ))}
  </div>
));
