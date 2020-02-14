import React from "react";
import styled from "styled-components";

const UserCard = props => {
  console.log(props.followers);

  const Image = styled.img`
    width: 200px;
    height: 200px;
  `;

  return (
    <div>
      <h2>The Followers</h2>
      {props.followers.map(per => {
        return (
          <div className="follower-card">
            <Image src={per.avatar_url} />
            <h4>{per.login}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
