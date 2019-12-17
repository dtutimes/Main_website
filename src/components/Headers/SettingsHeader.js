import React from "react";

// reactstrap components

// core components

function SettingsHeader() {
  return (
    <>
      <div
        className="page-header page-header-xs settings-background"
        style={{
          backgroundImage:
            "url(" + require("assets/img/sections/joshua-earles.jpg") + ")"
        }}
      >
        <div className="filter" />
      </div>
    </>
  );
}

export default SettingsHeader;
