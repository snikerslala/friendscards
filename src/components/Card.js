import React from "react";

const Card = ({ id, username, name, email, phone }) => {
  return (
    <div className="bg-lightest-blue hover-bg-light-blue grow pointer ba br3 shadow-5 w5 bw1 dib ma2 pa3 pa3-ns tc near-black code">
      <img
        alt="friend's face"
        src={`https://robohash.org/${id}?set=set4`}
        className="h4 w4 dib"
      />
      <div>
        <h1 className="ttu f3">{username}</h1>
        <h3>({name})</h3>
        <p>{email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
};

export default Card;
