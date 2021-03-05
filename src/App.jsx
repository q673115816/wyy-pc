import React, {
  useCallback, useEffect, useState,
} from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconChevronDownRight } from '@tabler/icons';
import DomPlayer from './pages/Player';
import './styles/index.scss';
import DomHeader from './layout/Header';
import DomMain from './layout/Main';
import DomFooter from './layout/Footer';

import { setGlobalInset } from './reducers/mask/actions';
import DialogLogin from './components/Dialog/Login';
import DialogShare from './components/Dialog/Share';
import DialogShareWX from './components/Dialog/ShareWX';
import DialogUploadAvatar from './components/Dialog/UploadAvatar';
import DialogCreatePlaylist from './components/Dialog/CreatePlaylist';
import DialogUnSubscription from './components/Dialog/UnSubscription';
import Playlist from './components/Playlist';
import Letter from './components/Letter';
import Tosat from './components/Toast';
import Contextmenu from './components/Contextmenu';
import HeaderSearch from './components/HeaderSearch';

export default () => {
  const dispatch = useDispatch();
  const { popupStatus, loginVisibility } = useSelector(({ common }) => common);
  const { screen } = useSelector(({ mask }) => mask);
  const { theme } = useSelector(({ setting }) => setting);
  const {
    toastTitle,
    globalLastX,
    globalLastY,
    globalWidth,
    globalHeight,
    searchVisibility,
    contextMenuVisibility,
    dialogShareVisibility,
    dialogShareWXVisibility,
    dialogUploadAvatarVisibility,
    dialogCreatePlaylistVisibility,
    dialogUnSubscriptionVisibility,
  } = useSelector(({ mask }) => mask);
  const [dragger, setDragger] = useState(false);
  const [dragInset, setDragInset] = useState({ x: 0, y: 0 });
  const [dragStartInset, setDragStartInset] = useState({ x: 0, y: 0 });
  const [dragLastInset, setDragLastInset] = useState({ x: 0, y: 0 });
  const [resizer, setResizer] = useState(false);
  const [resizeInset, setResizeInset] = useState({ x: 0, y: 0 });
  const [resizeStartInset, setResizeStartInset] = useState({ x: 0, y: 0 });
  const [resizeInitRect, setResizeInitRect] = useState({ width: 1022, height: 670 });
  const [resizeRect, setResizeRect] = useState(resizeInitRect);
  const dragdown = useCallback((e) => {
    setDragStartInset({
      x: e.clientX,
      y: e.clientY,
    });
    setDragger(true);
  }, []);

  const dragmove = (e) => {
    if (dragger) {
      const x = e.clientX - dragStartInset.x + dragLastInset.x;
      const y = e.clientY - dragStartInset.y + dragLastInset.y;
      setDragInset({
        x, y,
      });
      dispatch(setGlobalInset({
        globalLastX: x,
        globalLastY: y,
      }));
    }
  };

  const dragup = () => {
    setDragLastInset(dragInset);
    setDragger(false);
  };

  const resizedown = (e) => {
    setResizer(true);
    setResizeStartInset({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const resizemove = (e) => {
    if (resizer) {
      const x = e.clientX - resizeStartInset.x;
      const y = e.clientY - resizeStartInset.y;
      setResizeInset({
        x, y,
      });
      setResizeRect({
        width: resizeInitRect.width + x,
        height: resizeInitRect.height + y,
      });
      // dispatch(setGlobalInset({
      //   globalLastX: x,
      //   globalLastY: y,
      // }));
    }
  };
  const resizeup = () => {
    setResizeInitRect(resizeRect);
    setResizer(false);
  };

  useEffect(() => {
    const fn = (e) => e.preventDefault();
    document.addEventListener('contextmenu', fn);
    return () => {
      document.removeEventListener('contextmenu', fn);
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <div
          id="NeteaseCloudMusic"
          className="domWrapper flex flex-col absolute shadow-lg select-none"
          style={{
            transform: `translate(${dragInset.x}px, ${dragInset.y}px)`,
            '--themeColor': `var(--${theme}, --themeRed)`,
            '--WIDTH': `${resizeRect.width}px`,
            '--HEIGHT': `${resizeRect.height}px`,
          }}
        >
          <DomHeader handleDrap={dragdown} />
          <Switch>
            <Route path="/player/:type/:vid">
              <DomPlayer />
            </Route>
            <Route>
              <DomMain />
              <DomFooter />
            </Route>
          </Switch>
          { popupStatus === 'playlist' && <Playlist />}
          { popupStatus === 'privateLetter' && <Letter />}
          {
            contextMenuVisibility && (
              <Contextmenu />
            )
          }
          {dialogShareVisibility && (
            <DialogShare />
          )}
          {dialogShareWXVisibility && (
            <DialogShareWX />
          )}
          {dialogUploadAvatarVisibility && (
            <DialogUploadAvatar />
          )}
          {dialogCreatePlaylistVisibility && (
            <DialogCreatePlaylist />
          )}
          {dialogUnSubscriptionVisibility && (
            <DialogUnSubscription />
          )}
          {
            searchVisibility
            && <HeaderSearch />
          }
          {
            toastTitle?.toString()
            && <Tosat />
          }
          {screen === 'normal'
            && (
            <div
              className="absolute right-0 bottom-0 text-gray-500"
              style={{ cursor: 'se-resize' }}
              onMouseDown={resizedown}
            >
              <IconChevronDownRight />
            </div>
            )}
        </div>
        {loginVisibility && <DialogLogin />}
        {dragger && (
          <div
            className="absolute inset-0"
            onMouseUp={dragup}
            onMouseMove={dragmove}
          />
        )}
        {
          resizer && (
          <div
            className="absolute inset-0"
            onMouseMove={resizemove}
            onMouseUp={resizeup}
          />
          )
        }
      </Router>
    </div>
  );
};
