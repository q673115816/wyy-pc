import {
  SET_LOGIN_INFO,
  SET_LOGIN_INFO_UPDATE,
  SET_LIKELIST,
  SET_PLAYLIST,
  SET_ARTIST_SUBLIST,
  SET_ARTIST_SUBLIST_ADD,
  SET_TOPIC_SUBLIST,
  SET_ALBUM_SUBLIST,
  SET_MV_SUBLIST,
  SET_LIKELIST_ADD,
  SET_LIKELIST_DEL,
} from './actionTypes';

export const setLoginInfo = (payload) => ({
  type: SET_LOGIN_INFO,
  payload,
});

export const setLoginInfoUpdate = (payload) => ({
  type: SET_LOGIN_INFO_UPDATE,
  payload,
});

export const setLikelist = (payload) => ({
  type: SET_LIKELIST,
  payload,
});

export const setPlaylist = (payload) => ({
  type: SET_PLAYLIST,
  payload,
});

export const setLikelistAdd = (payload) => ({
  type: SET_LIKELIST_ADD,
  payload,
});

export const setLikelistDel = (payload) => ({
  type: SET_LIKELIST_DEL,
  payload,
});

export const setArtistSublist = (payload) => ({
  type: SET_ARTIST_SUBLIST,
  payload,
});

export const setArtistSublistAdd = (payload) => ({
  type: SET_ARTIST_SUBLIST_ADD,
  payload,
});

export const setTopicSublist = (payload) => ({
  type: SET_TOPIC_SUBLIST,
  payload,
});

export const setAlbumSublist = (payload) => ({
  type: SET_ALBUM_SUBLIST,
  payload,
});

export const setMVSublist = (payload) => ({
  type: SET_MV_SUBLIST,
  payload,
});
