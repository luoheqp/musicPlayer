import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatTime } from "@/utils";

// components
import {
  MoveableCardGroupContent,
  Card,
  AuthorContent,
  Player,
  PlayerProgress,
} from "./style";
import { handleChangePlayState, handleSetMediaPlayNow } from "@r/player/action";

const MoveableCardGroup = (props) => {
  const dispatch = useDispatch();
  const { cardGroupInfo } = props;

  const playState = useSelector(({ player }) => player.playState);
  const source = useSelector(({ player }) => player.source);

  const [groupInfo, setGroupInfo] = useState([]); // 全部数据
  const [showInfo, setShowInfo] = useState([]); // 展示数据 默认展示两张
  const [currentTime, setCurrentTime] = useState(0); // 展示数据 默认展示两张

  const [movePos, setMovePos] = useState({ x: 0, y: 0 }); // 初始点击坐标
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 }); // 当前位置
  const [moveProgress, setMoveProgress] = useState(0); // 移动进度

  const flags = useRef(false);
  const moveRef = useRef();
  const backRef = useRef();

  const handleChangeShowInfo = () => {
    if (!groupInfo.length) return;

    let showInfoTemp = JSON.parse(JSON.stringify(showInfo));
    let groupInfoTemp = JSON.parse(JSON.stringify(groupInfo));
    showInfoTemp.shift();
    showInfoTemp.push(...groupInfoTemp.splice(0, 1));

    setGroupInfo(groupInfoTemp);
    setShowInfo(showInfoTemp);
  };

  const handleTouchStart = (e) => {
    flags.current = true;
    moveRef.current.style.transition = "unset";

    // 获取初始点击坐标
    let { clientX, clientY } = e.touches[0];
    setMovePos({ x: clientX, y: clientY });
  };

  const handleTouchMove = (e) => {
    if (!flags.current) return;

    // 获取触摸点位移动距离
    let touch = e.touches[0];
    let nx = touch.clientX - movePos.x;
    let ny = touch.clientY - movePos.y;

    let rightPos = +Number(-nx + currentPos.x).toFixed(0);
    let bottomPos = +Number(-ny + currentPos.y).toFixed(0);
    let rotateDeg = +Number((-45 * rightPos) / 300);
    setMoveProgress(Math.abs(rightPos / 80) > 1 ? 1 : Math.abs(rightPos / 80));

    moveRef.current.style.cssText = `right: ${rightPos}px; bottom: ${bottomPos}px; transform: rotate(${rotateDeg}deg)`;
  };

  const handleTouchEnd = (e) => {
    const { current: moveRefPos } = moveRef;
    flags.current = false;

    let right = +moveRefPos.style.right.replace("px", "");
    let bottom = +moveRefPos.style.bottom.replace("px", "");

    if (Math.abs(right) < 80) {
      moveRefPos.style.cssText =
        "right: 0px; bottom: 0px; transition: all .3s linear";
      setCurrentPos({ x: 0, y: 0 });
      setMoveProgress(0);
    } else {
      moveRefPos.style.cssText = `right: ${right * 10}px; bottom: ${
        bottom * 10
      }px; transition: all .3s linear`;
      setTimeout(() => {
        handleChangeShowInfo();
      }, 300);
    }
  };

  const togglePlayState = (item) => {
    if (playState === "playing") {
      dispatch(handleChangePlayState("ready"));
    } else {
      dispatch(handleSetMediaPlayNow(item));
      dispatch(handleChangePlayState("playing"));
    }
  };

  useEffect(() => {
    if (!backRef.current) return;

    // 计算缩放
    let scaleNum = 0.1 * moveProgress + 0.9;
    scaleNum = Math.min(scaleNum, 1);

    // 计算透明度
    let opacityNum = 0.6 * moveProgress + 0.4;
    opacityNum = Math.min(opacityNum, 1);

    // 计算偏移
    let translateYNum = -20 * (1 - moveProgress) + "px";

    backRef.current.style.cssText = `transform: scale(${scaleNum}) translateY(${translateYNum}); opacity: ${opacityNum}`;
  }, [moveProgress]);

  useEffect(() => {
    const temp = JSON.parse(JSON.stringify(cardGroupInfo));

    setShowInfo(temp.splice(0, 2));
    setGroupInfo(temp);
  }, [cardGroupInfo]);

  useEffect(() => {
    source.addEventListener("timeupdate", (e) => {
      setCurrentTime(Number(source.currentTime).toFixed(0));
    });
  }, [source]);

  return (
    <MoveableCardGroupContent>
      {showInfo?.map((item, index) => (
        <div
          className="card-contant"
          key={item.id}
          ref={(ref) => (index ? (backRef.current = ref) : null)}
        >
          <Card
            className="swiper-no-swiping"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={(ref) => (index ? null : (moveRef.current = ref))}
            src={`${item.album.picUrl}?params=600y600`}
            key={item.id}
          >
            <div className="cover"></div>
            <AuthorContent src={`${item.artists[0].picUrl}?params=50y50`}>
              <div className="avatar"></div>
              <p className="name">{item.artists[0].name}</p>
            </AuthorContent>
            <p className="name">{item.name}</p>
            <Player>
              <div className="controller">
                <div
                  className={`player iconfont ${
                    playState === "ready" ? "icon-play2" : "icon--pause"
                  }`}
                  onClick={() => togglePlayState(item)}
                ></div>
              </div>
              <div className="progress">
                <div className="time">
                  {formatTime(currentTime)}/{formatTime(item.duration, true)}
                </div>
                <PlayerProgress
                  progress={Number(
                    (currentTime / (item.duration / 1000)) * 100
                  ).toFixed(0)}
                ></PlayerProgress>
              </div>
            </Player>
          </Card>
        </div>
      ))}
    </MoveableCardGroupContent>
  );
};

export default MoveableCardGroup;
