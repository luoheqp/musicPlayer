import React, { useEffect, useState, useRef } from "react";
import { formatTime } from "@/utils";

// components
import { MoveableCardGroupContent, Card, AuthorContent, Player } from "./style";

const MoveableCardGroup = (props) => {
  const { cardGroupInfo } = props;

  const [groupInfo, setGroupInfo] = useState([]); // 全部数据
  const [showInfo, setShowInfo] = useState([]); // 展示数据 默认展示两张

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

  useEffect(() => {
    if (!backRef.current) return;

    let scaleNum = 0.1 * moveProgress + 0.9;
    scaleNum = scaleNum > 1 ? 1 : scaleNum;

    let opacityNum = 0.6 * moveProgress + 0.4;
    opacityNum = opacityNum > 1 ? 1 : opacityNum;

    let translateYNum = -20 * (1 - moveProgress);
    translateYNum = translateYNum + "px";

    backRef.current.style.cssText = `transform: scale(${scaleNum}) translateY(${translateYNum}); opacity: ${opacityNum}`;
  }, [moveProgress]);

  useEffect(() => {
    const temp = JSON.parse(JSON.stringify(cardGroupInfo));

    setShowInfo(temp.splice(0, 2));
    setGroupInfo(temp);
  }, [cardGroupInfo]);

  return (
    <MoveableCardGroupContent>
      {showInfo?.map((item, index) => (
        <div
          className="card-contant"
          key={item.id}
          ref={(ref) => (index ? (backRef.current = ref) : null)}
        >
          <Card
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
                <div className="player iconfont icon-play"></div>
              </div>
              <div className="progress">
                <div className="time">
                  00:00/{formatTime(item.duration, true)}
                </div>
                <div className="line"></div>
              </div>
            </Player>
          </Card>
        </div>
      ))}
    </MoveableCardGroupContent>
  );
};

export default MoveableCardGroup;
