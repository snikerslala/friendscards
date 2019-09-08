import React from "react";
import Card from "./Card";

const CardList = ({ friends }) => {
  const cardsArray = friends.map((friend, i) => {
    return (
      <Card
        key={i}
        id={friend.id}
        username={friend.username}
        name={friend.name}
        email={friend.email}
        phone={friend.phone}
      />
    );
  });

  return (
    <div className="flex flex-wrap justify-center avenir">{cardsArray}</div>
  );
};

export default CardList;
