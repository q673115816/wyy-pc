import classNames from 'classnames';
import React, {
  useState,
  useEffect,
  memo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  IconX,
  IconPlayerPlay,
  IconPlayerPause,
  IconPlayerSkipBack,
  IconPlayerSkipForward,
  IconMusic,
} from '@tabler/icons';
import { setGlobalLrcInset, setGlobalLrcStartInset } from '@/reducers/inset/actions';
import { setGlobalLrcHide, setLyricToggle } from '@/reducers/lrc/actions';
import {
  setAudioRunningToggle,
  setAudioPrev,
  setAudioNext,
} from '@/reducers/audio/actions';
import './style.scss';
import { setDragInit } from '@/reducers/drag/actions';

const DomLrcContent = memo(() => {
  const { currentTime } = useSelector(({ audio }) => audio);
  const { lrcList } = useSelector(({ lrc }) => lrc);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let nextIndex = 0;
    lrcList.forEach(({ time }, index) => {
      if (time < currentTime) {
        nextIndex = index;
      }
    });
    setPercentage(() => {
      if (!(lrcList[nextIndex] && lrcList[nextIndex + 1])) return 0;
      const { time: time1 } = lrcList[nextIndex];
      const { time: time2 } = lrcList[nextIndex + 1];
      // console.log((currentTime - time) / ((min2 * 60 + sec2 * 1) - time));
      return (currentTime - time1) / (time2 - time1) * 100;
    });
    if (nextIndex !== currentLineIndex) setCurrentLineIndex(nextIndex);
  }, [currentTime]);
  return (
    <div
      id="global_lrc_text"
      className="text-center select-none text-transparent whitespace-pre-line pointer-events-none px-4"
      style={{ '--p': `${percentage}%` }}
    >
      {lrcList?.[currentLineIndex]?.word}
      &nbsp;
    </div>
  );
});

const DomLrc = memo(() => {
  const { currentSong } = useSelector(({ audio }) => audio);
  const { lrcList } = useSelector(({ lrc }) => lrc);
  if (currentSong && !currentSong.name) return '网易云音乐';
  if (!lrcList.length) return '纯音乐，请您欣赏';
  return <DomLrcContent />;
});

export default memo(() => {
  const dispatch = useDispatch();
  const {
    globalLrcX: x,
    globalLrcY: y,
    globalLrcWidth: width,
    globalLrcHeight: height,
  } = useSelector(({ inset }) => inset);
  const { globalLrcVisibility } = useSelector(({ lrc }) => lrc);
  const { running } = useSelector(({ audio }) => audio);
  const [dragger, setDragger] = useState(false);
  const [active, setActive] = useState(false);

  const handleDropMove = (e) => {
    e.preventDefault();
    return dispatch(setGlobalLrcInset({
      x: e.clientX,
      y: e.clientY,
    }));
  };

  const handleDropUp = () => {
    setDragger(false);
    setActive(true);
  };

  const handleDropDown = (e) => {
    setDragger(true);
    dispatch(setGlobalLrcStartInset({
      x: e.clientX,
      y: e.clientY,
    }));
    dispatch(setDragInit({
      onMouseMove: handleDropMove,
      onMouseUp: handleDropUp,
    }));
  };

  if (!globalLrcVisibility) return null;
  return (
    <div
      className={classNames('flex-center z-40 text-xl', !dragger ? 'fixed' : 'relative')}
      style={{ width, height, ...(dragger ? { transform: `translate(${x}px, ${y}px)` } : { top: y, left: x }) }}
    >
      <div onMouseEnter={() => setActive(true)}>
        <DomLrc />
      </div>
      {
        (active || dragger)
        && (
          <div
            onMouseLeave={() => setActive(false)}
            className={`absolute w-full h-full bg-black bg-opacity-20 border border-gray-400 shadow pointer-events-${(active || dragger) ? 'auto' : 'none'}`}
          >
            <div className="w-full h-full" onMouseDown={handleDropDown} />
            <div className="absolute left-0 right-0 mx-auto flex items-center space-x-4 top-0 w-min z-10 text-white my-2">
              <button type="button" className="relative z-10" onClick={() => dispatch(setLyricToggle())}>
                <IconMusic size={16} stroke={2} />
              </button>
              <button type="button" className="relative z-10" onClick={() => dispatch(setAudioPrev())}>
                <IconPlayerSkipBack size={16} className="fill-current" stroke={2} />
              </button>
              <button type="button" className="relative z-10" onClick={() => dispatch(setAudioRunningToggle())}>
                {
                  running
                    ? <IconPlayerPause size={16} className="fill-current" stroke={2} />
                    : <IconPlayerPlay size={16} className="fill-current" stroke={2} />
                }
              </button>
              <button type="button" className="relative z-10" onClick={() => dispatch(setAudioNext())}>
                <IconPlayerSkipForward size={16} className="fill-current" stroke={2} />
              </button>
              <button type="button" className="relative z-10" onClick={() => dispatch(setGlobalLrcHide())}>
                <IconX size={16} stroke={2} />
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
});
