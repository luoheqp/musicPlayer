import request from "./request";

export const Song = {};
export const SongList = {};
export const Common = {};

// 根据关键字查询歌曲
Song.getSongSearchInfoByKeywords = (keywords) =>
  request.get(`search?keywords=${keywords}`);

// 获取歌曲链接
Song.getSongUrl = (id) => request.get(`song/url?id=${id}`);

// 获取歌曲详情
Song.getSongDetail = (id) => request.get(`song/detail?ids=${"" + id}`);

// 获取歌曲歌词
Song.getSongLyric = (id) => request.get(`lyric?id=${id}`);

// 获取歌单分类
SongList.getSongCatList = () => request.get("/playlist/catlist");

// 获取歌单
SongList.getSongListByCat = (cat) => request.get(`/top/playlist?cat=${cat}`);

// 获取歌单
SongList.getSongList = (id) => request.get(`playlist/detail?id=${id}`);

// 登录
Common.postToLogin = ({ email, password }) =>
  request.post(`/login?email=${email}&password=${password}`);
