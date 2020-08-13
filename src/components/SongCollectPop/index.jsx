import React from "react";

// components
import { SongCollectPopContent, SongCollectDesc } from "./style";
import SongList from "@/components/SongList";

const SongCollectPop = (props) => {
  const { info } = props;

  return (
    <SongCollectPopContent>
      <SongCollectDesc src={`${info.coverImgUrl}?params200y200`}>
        <div className="mask-wrap">
          <p className="title">{info.name}</p>
          <p className="desc">{info.description}</p>
          <p className="play-count">
            <i className="iconfont icon-3209257-controllaunchplaystarttriangle"></i>
            {info.playCount}
          </p>
        </div>
      </SongCollectDesc>
      <SongList listData={info.songList} />
    </SongCollectPopContent>
  );
};

export default SongCollectPop;
