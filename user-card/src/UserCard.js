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

export const Retrospect = () => {
  return (
    <div className="retrospect">
      <h3>The Retrospect of this Project</h3>
      <p>
        When I first saw React.Component, I was nervous. It took a while to
        understand the super() extension, and all the parts to it. I couldn't
        wrap my head around how using class objects from functions was going to
        work.
      </p>
      <p>
        After watching and reading others thoughts and practices on class vs
        functions, I think I prefer class. Though, I still have a lot to learn
        with React, at the end of the day, I want what will be most practical
        and efficient that will get me to my goals.
      </p>
      <p>
        <strong>With more fuel in the tank...</strong> styling may have been
        better. Though, I'm known to not have good taste, I still tried to make
        this look somewhat nice.{" "}
      </p>
    </div>
  );
};

export default UserCard;
