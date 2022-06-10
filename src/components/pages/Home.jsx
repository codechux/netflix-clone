import React from "react";
import { Main, Row } from "../index";

import requests from "../../requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row Id="1" title="Popular" fetchURL={requests.getPopular} />
    </div>
  );
};

export default Home;
