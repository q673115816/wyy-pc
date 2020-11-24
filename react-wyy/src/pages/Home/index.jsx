import React, {useState} from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import HomeRecommend from "./pages/Recommend";
import HomeToplist from "./pages/Toplist";
import HomePlaylist from "./pages/Playlist";
import HomeArtist from "./pages/Artist";
import HomeNewest from "./pages/Newest";
import HomeDj from "./pages/Dj";

const nav = [
  {
    path: '/home/recommend',
    name: '个性推荐'
  },
  {
    path: '/home/playlist',
    name: '歌单'
  },
  {
    path: '/home/dj',
    name: '主播电台'
  },
  {
    path: '/home/toplist',
    name: '排行榜'
  },
  {
    path: '/home/artist',
    name: '歌手'
  },
  {
    path: '/home/newest',
    name: '最新音乐'
  },
]

export const HomeContent = React.createContext()

export default () => {
  const [isBottom, setIsBottom] = useState(false)
   const handleScroll = ({ target }) => {
    const { scrollHeight, scrollTop, clientHeight } = target
    if (scrollTop + clientHeight + 300 > scrollHeight) {
      setIsBottom(true)
    } else {
      setIsBottom(false)
    }
  }
  return (
    <div className="domhome">
      <div className="domhome_nav">
        {nav.map((item) => (
          <NavLink
            className="domhome_nav_link"
            activeClassName="on"
            to={item.path}
            key={item.path}
          >
            {item.name}
          </NavLink>
        ))}

      </div>
      <HomeContent.Provider value={isBottom} >
        <div className="domhome_content" onScroll={handleScroll}>
            <Switch>
              <Route path="/home/recommend">
                <HomeRecommend />
              </Route>
              <Route path="/home/toplist">
                <HomeToplist />
              </Route>
              <Route path="/home/playlist">
                <HomePlaylist />
              </Route>
              <Route path="/home/artist">
              <HomeArtist/>
              </Route>
              <Route path="/home/newest">
                <HomeNewest />
              </Route>
              <Route path="/home/dj">
                <HomeDj />
              </Route>
              <Redirect to="/home/recommend" />
            </Switch>
          </div>
      </HomeContent.Provider>
    </div>
  );
};
