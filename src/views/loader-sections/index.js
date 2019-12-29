import React from "react";
import {
  BoxLoading,
  BlockLoading,
  WindMillLoading,
  MeteorRainLoading,
  CircleLoading,
  RollBoxLoading,
  EatLoading
} from "react-loadingg";

const pickRandomComponent = () => {
  const r = Math.floor(Math.random() * 7);

  switch (r) {
    case 0:
      return <MeteorRainLoading />;
    case 1:
      return <WindMillLoading />;
    case 2:
      return <BlockLoading />;
    case 3:
      return <CircleLoading />;
    case 4:
      return <RollBoxLoading />;
    case 5:
      return <EatLoading />;
    default:
      return <BoxLoading />;
  }
};

const LandingLoader = () => (
  <>
    <div
      className="section"
      style={{
        height: "100vh"
      }}
    >
      {/* <div className="filter filter-dark" /> */}
      <div className="content-center">{pickRandomComponent()}</div>
    </div>
  </>
);

export default LandingLoader;
