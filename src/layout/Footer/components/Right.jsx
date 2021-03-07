import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconEar,
  IconVolume,
  IconList,
} from '@tabler/icons';
import { setVolume } from '@/reducers/audio/actions';
import { setPopup } from '@/reducers/common/actions';

export default () => {
  const dispatch = useDispatch();
  const {
    popupStatus,
  } = useSelector(({ common }) => common);
  const { volume } = useSelector(({ audio }) => audio);
  const handleVolume = (e) => {
    dispatch(setVolume(e.target.value));
  };
  const handlesetPopup = () => {
    if (popupStatus === 'playlist') {
      dispatch(setPopup({ popupStatus: '' }));
    } else {
      dispatch(setPopup({ popupStatus: 'playlist' }));
    }
  };

  return (
    <div className="domfooter_right flex items-center justify-end flex-1 space-x-3">
      <button type="button" className="tone border border-current px-1 rounded-sm text-gray-500">
        标准
      </button>
      <button type="button" title="打开音效">
        <IconEar size={28} stroke={1} />
      </button>
      <button type="button" className="volume_btn" title="静音/恢复音量">
        <IconVolume size={28} stroke={1} />
      </button>
      <input
        type="range"
        className="volume_value"
        title="音量调节"
        min="0"
        max="100"
        step="1"
        onChange={handleVolume}
        value={volume}
        style={{ '--volume': volume }}
      />
      <button type="button" onClick={handlesetPopup}>
        <IconList size={26} stroke={1} />
      </button>
    </div>
  );
};
