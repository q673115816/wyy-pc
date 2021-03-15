import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconCheck,
} from '@tabler/icons';
import classNames from 'classnames';

import { setTheme } from '@/reducers/setting/actions';
import './style.scss';

const themes = [
  ['酷炫黑', 'themeBlack'],
  ['官方红', 'themeRed'],
  ['可爱粉', 'themePink'],
  ['天际蓝', 'themeBlue'],
  ['清新绿', 'themeGreen'],
  ['土豪金', 'themeGold'],
];

const colors = [
  ['hotpink'],
  ['lightpink'],
  ['lightblue'],
  ['lightcoral'],
  ['lightcyan'],
  ['lightgray'],
  ['lightgreen'],
  ['lightsalmon'],
  ['lightseagreen'],
  ['lightskyblue'],
  ['lightslategray'],
  ['lightsteelblue'],
];

export default () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(({ common }) => common);
  const [current, setCurrent] = useState(0);
  const [RGB, setRGB] = useState(0);
  const [HSL, setHSL] = useState(80);

  const handleSelectTheme = (theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className="domHeader_popup_skin" id="skin">
      <div className="nav">
        <button
          onClick={() => setCurrent(0)}
          type="button"
          className={classNames('link', { on: current === 0 })}
        >
          主题
        </button>
        <button
          onClick={() => setCurrent(1)}
          type="button"
          className={classNames('link', { on: current === 1 })}
        >
          纯色
        </button>
      </div>
      <div className="skins">
        <div className="themes mt-2.5 grid gap-2.5" style={{ display: current === 0 ? null : 'none' }}>
          {
            themes.map(([name, classname, stylename]) => (
              <button
                onClick={() => handleSelectTheme(classname)}
                key={name}
                type="button"
                className={classNames('focus:outline-none skinbtn theme', classname)}
              >
                <span className="name">{name}</span>
                {
                  theme === classname
                  && <i className="ico"><IconCheck size={16} stroke={2} /></i>
                }
              </button>
            ))
          }
        </div>
        <div className="colors" style={{ display: current === 1 ? null : 'none' }}>
          <div className="default mt-2.5 grid gap-2.5">
            {
              colors.map(([stylename]) => (
                <button
                  key={stylename}
                  onClick={() => handleSelectTheme(stylename)}
                  type="button"
                  className="focus:outline-none skinbtn color"
                  style={{ '--currentColor': stylename }}
                >
                  {
                    theme === stylename
                    && <i className="ico"><IconCheck size={16} stroke={2} /></i>
                  }
                </button>
              ))
            }
          </div>
          <div style={{ marginTop: '3em', marginBottom: '1em' }}>自定义颜色</div>
          <div className="custom">
            <button
              type="button"
              className="focus:outline-none colour"
            >
              {
                /custom/.test(theme)
                && <i className="ico"><IconCheck size={16} stroke={2} /></i>
              }
            </button>
            <div className="ranges">
              <input
                className="rgb"
                type="range"
                min="0"
                max="259"
                value={RGB}
                onChange={(e) => setRGB(e.target.value)}
                style={{ backgroundImage: 'linear-gradient(to right, hsl(0, 100%, 0) 0, hsl(0, 100%, 50%) 100%)' }}
              />
              <input
                className="hsl"
                type="range"
                min="0"
                max="80"
                value={HSL}
                onChange={(e) => setHSL(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};