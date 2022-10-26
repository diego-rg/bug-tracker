import React, { useState, useEffect } from "react";

import bugsAPI from "../apis/bugs";

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    getBugs();
  }, []);

  const getBugs = async () => {
    try {
      const { data } = await bugsAPI.get("/bugs");
      setBugs(data.bugs);
    } catch (error) {
      console.log(error);
    }
  };

  const renderBugs = bugs.map((bug) => {
    return <p key={bug._id}>{bug.name}</p>;
  });

  return (
    <div>
      <h1>Hi</h1>
      <div>{renderBugs}</div>
    </div>
  );
};

export default BugList;
