import React, { useEffect, useState } from 'react';
import { apiDjSublist } from '@/api';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default () => {
  const { profile } = useSelector(({ account }) => account);
  const { push } = useHistory();
  const [data, setData] = useState([]);
  const handleInit = async () => {
    try {
      const { djRadios } = await apiDjSublist();
      setData(djRadios);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="overflow-auto">
      <div className="domSublist_nav">
        <span className="h1">我的电台</span>
      </div>
      <div className="domSublist_headerBar">
        <b className="title">我订阅的电台</b>
        &nbsp;
        <span className="gray">
          (
          {data.length}
          )
        </span>
      </div>
      <div className="domSublist_list">
        {data.map((item) => (
          <div role="button" onClick={() => push(`/djlist/${item.id}`)} key={item.id} className="item">
            <div className="cover">
              <img className="containimg" src={item.picUrl} alt="" />
            </div>
            <div className="name text-overflow">
              {item.name}
            </div>
            <div className="creator">
              {item.dj.nickname}
            </div>
            <div className="size gray">
              节目
              {item.programCount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};