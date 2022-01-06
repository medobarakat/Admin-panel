import React from "react";
import "./SideBar.css";
import {
  LineStyle,
  Person,
  Category,
  Timeline,
  AttachMoney,
  TrendingUp,
  Dashboard,
  MailOutline,
  DynamicFeed,
  ChatBubble,
  Info,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-title">
          <h3>Dashboard</h3>
        </div>
        <ul className="sidebar-list">
          <li className="active">
            <Link to="/">
              <LineStyle className="sidebar-icon" />
              Analytics
            </Link>
          </li>
          <li>
            <Timeline className="sidebar-icon" />
            Sales
          </li>
          <li>
            <TrendingUp className="sidebar-icon" />
            Home
          </li>
        </ul>
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-title">
          <h3>Quick Menu</h3>
        </div>
        <ul className="sidebar-list">
          <li className="">
            <Link to="user">
              <Person className="sidebar-icon" />
              Users
            </Link>
          </li>
          <li>
            <Category className="sidebar-icon" />
            Products
          </li>
          <li>
            <AttachMoney className="sidebar-icon" />
            Transitions
          </li>
          <li>
            <Dashboard className="sidebar-icon" />
            Reports
          </li>
        </ul>
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-title">
          <h3>Notification</h3>
        </div>
        <ul className="sidebar-list">
          <li className="">
            <MailOutline className="sidebar-icon" />
            Mail
          </li>
          <li>
            <DynamicFeed className="sidebar-icon" />
            FeedBack
          </li>
          <li>
            <ChatBubble className="sidebar-icon" />
            Messages
          </li>
        </ul>
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-title">
          <h3>Staff</h3>
        </div>
        <ul className="sidebar-list">
          <li className="">
            <LineStyle className="sidebar-icon" />
            Mange
          </li>
          <li>
            <Info className="sidebar-icon" />
            About
          </li>
        </ul>
      </div>
    </div>
  );
}
