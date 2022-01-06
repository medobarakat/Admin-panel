import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="fs-2 mt-2 title">
              <a href="/">Ahmed Admin Panel</a>
            </h1>
          </div>
          <div className="col mx-auto">
            <div className="row">
              <div className="col icons">
                <div className="icon">
                  <NotificationsNone />
                  <span className="icon-span">2</span>
                </div>
                <div className="icon">
                  <Language />
                  <span className="icon-span">7</span>
                </div>
                <div className="icon">
                  <Settings />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
