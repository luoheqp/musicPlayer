import React from "react";
import dayjs from "dayjs";
import { UserDashboardContent, BasicInfo } from "./style";

const UserDashboard = (props) => {
  const { info } = props;

  return (
    <UserDashboardContent>
      <BasicInfo>
        <div className="avatar">
          <img src={info.avatarUrl} alt="" />
        </div>
        <div className="desc">
          <p className="nickname">{info.nickname}</p>
          <p className="birthday">
            {dayjs(+info.birthday).format("YYYY - MM - DD")}
          </p>
        </div>
      </BasicInfo>
    </UserDashboardContent>
  );
};

export default UserDashboard;
