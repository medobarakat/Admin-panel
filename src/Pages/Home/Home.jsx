import React from "react";
import WidgetSm from "../../Components/WidgetSm/WidgetSm";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";
import FeaturedInfo from "../../Components/FeaturedInfo/FeaturedInfo";
import Charts from "../../Components/Charts/Charts";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts />
      <div className="row">
        <div className="col-md-4">
          <WidgetSm />
        </div>
        <div className="col-md-8">
          <WidgetLg />
        </div>
      </div>
    </div>
  );
}
