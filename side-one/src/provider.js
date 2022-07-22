import React, { useState } from "react";

import Sigma from "./context";

const Provider = props => {
  const [mission, setMission] = useState({
    mname: "Go to Russia",
    agent: "007",
    accept: "Not accepted"
  });
  return (
    <Sigma.Provider
       value={{                                                                 
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: "ACCEPTED" });
        }
      }}
    >
      {props.children}
    </Sigma.Provider>
  );
};

export default Provider;


