import React from "react";

// components
import { SongCollectPopContent, SongCollectDesc, ControllArea } from "./style";
import SongList from "@/components/SongList";

const SongCollectPop = (props) => {
  const { info, toggle } = props;

  console.log(toggle);

  return (
    <SongCollectPopContent>
      <SongCollectDesc>
        <div className="cover">
          <img src={`${info.coverImgUrl}?params200y200`} alt="" />
        </div>
        <div className="info">
          <div className="title">{info.name}</div>
          <p className="desc">{info.description}</p>
          <p className="play-count">
            <i className="iconfont icon-3209257-controllaunchplaystarttriangle"></i>
            {info.playCount}
          </p>
        </div>
      </SongCollectDesc>
      <SongList listData={info.songList} />
      <ControllArea>
        <div className="item">
          <i className="iconfont icon-xihuan"></i>喜欢
        </div>
        <div className="item">
          <i className="iconfont icon-guangpan"></i>播放
        </div>
        <div className="item" onClick={() => toggle(false)}>
          <i className="iconfont icon-shouqi"></i>收起
        </div>
      </ControllArea>
    </SongCollectPopContent>
  );
};

export default SongCollectPop;
