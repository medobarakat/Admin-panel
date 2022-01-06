import React from "react";
import "./FeaturedInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured-full">
      <div className="featured-item">
        <div className="featured-title">Revenu</div>
        <div className="featured-container">
          <div className="featured-money">$2.452</div>
          <div className="featured-info">
            -2.3 <i className="fas fa-arrow-down down"></i>
          </div>
        </div>
        <div className="featured-sub">Compared to the last month</div>
      </div>
      <div className="featured-item">
        <div className="featured-title">Sales</div>
        <div className="featured-container">
          <div className="featured-money">$5.326</div>
          <div className="featured-info">
            -1.3 <i className="fas fa-arrow-down down"></i>
          </div>
        </div>
        <div className="featured-sub">Compared to the last month</div>
      </div>
      <div className="featured-item">
        <div className="featured-title">Cost</div>
        <div className="featured-container">
          <div className="featured-money">$7.622</div>
          <div className="featured-info">
            +2.3 <i className="fas fa-arrow-up up"></i>
          </div>
        </div>
        <div className="featured-sub">Compared to the last month</div>
      </div>
    </div>
  );
}
