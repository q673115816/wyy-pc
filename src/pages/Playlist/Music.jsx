import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { apiPlaylistDetail } from '@/api';
import { setPlaylistDetail } from '@/redux/actions';

export default () => {
  const [fulfilled, setFulfilled] = useState(false);
  const { id } = useParams();
  const {
    playlist,
    privileges,
  } = useSelector(({ playlist }) => playlist);
  const dispatch = useDispatch();
  const handleGet = async () => {
    try {
      const {
        code,
        playlist,
        privileges,
      } = await apiPlaylistDetail({
        id,
      });
      if (code === 200) {
        dispatch(setPlaylistDetail({
          playlist,
          privileges,
        }));
        setFulfilled(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);
  if (!fulfilled) return <div>loading</div>;
  return (
    <div className="domPlaylistDetail">
      <div className="domPlaylistDetail_header">
        <div className="cover">
          <img className="ui_containimg" src={`${playlist.coverImgUrl}?params=200y200`} alt="" />
        </div>
        <div className="info">
          <div className="name">
            <span className="type">歌单</span>

            {playlist.name}
          </div>
          <div className="creator">
            <Link to="/" className="avator">
              <img className="ui_containimg" src={`${playlist.creator.avatarUrl}?params=50y50`} alt="" />
            </Link>
            <Link to="/" className="nickname gray">{playlist.creator.nickname}</Link>
              &nbsp;
            <span className="gray">
              {dayjs(playlist.createTime).format('YYYY-MM-DD')}
              创建
            </span>
          </div>
          <div className="actions">
            <button type="button" className="btn play">
              <svg className="icon icon-tabler icon-tabler-player-play" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 4v16l13 -8z" />
              </svg>
              播放全部
              +
            </button>
            <button type="button" className="btn">
              {
                playlist.subscribed
                  ? <i className="material-icons">favorite</i>
                  : <i className="material-icons">favorite_border</i>
              }
              收藏
              (
              {playlist.subscribedCount}
              )
            </button>
            <button type="button" className="btn">
              <i className="material-icons">share</i>
              分享
              (
              {playlist.shareCount}
              )
            </button>
            <button type="button" className="btn">
              <i className="material-icons">save_alt</i>
              下载全部
            </button>

          </div>
          <div className="tags">
            <span>标签</span>
            {playlist.tags.map((tag) => (
              <Link to="/" className="tag gray">{tag}</Link>
            ))}
          </div>
          <div>
            <span>
              歌曲：
              {playlist.trackCount}
            </span>
            <span>
              播放：
              {playlist.playCount}
            </span>
          </div>
          <div>
            <span>简介：</span>
            <pre>{playlist.description}</pre>
          </div>
        </div>
      </div>
      <div className="domPlaylistDetail_main">
        <div />
      </div>
    </div>
  );
};