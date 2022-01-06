import React from "react";
import "./WidgetLg.css";
import Button from "@mui/material/Button";

export default function WidgetLg() {
  return (
    <div className="WidgetLg">
      <div className="WidgetLgFull-title">
        <h3>Lastest Transition</h3>
      </div>
      <table className="WidgetLg-table">
        <tr className="WidgetLg-tr">
          <td className="WidgetLg-td">Customer</td>
          <td className="WidgetLg-td">Date</td>
          <td className="WidgetLg-td">Amount</td>
          <td className="WidgetLg-td">Status</td>
        </tr>
        <tr className="WidgetLg-tr">
          <th className="WidgetLg-th">
            <img
              src="https://i.pinimg.com/736x/b8/03/78/b80378993da7282e58b35bdd3adbce89.jpg"
              alt="avatr"
            />
            <span className="WidgetLg-th-txt">Susan</span>
          </th>
          <th className="WidgetLg-th">5 jun 2022</th>
          <th className="WidgetLg-th">$640 </th>
          <th className="WidgetLg-th">
            <Button id="approved">Approved</Button>
          </th>
        </tr>
        <tr className="WidgetLg-tr">
          <th className="WidgetLg-th">
            <img
              src="https://i.pinimg.com/736x/b8/03/78/b80378993da7282e58b35bdd3adbce89.jpg"
              alt="avatr"
            />
            <span className="WidgetLg-th-txt">Rahma</span>
          </th>
          <th className="WidgetLg-th">5 jun 2022</th>
          <th className="WidgetLg-th">$430 </th>
          <th className="WidgetLg-th">
            <Button id="approved">Approved</Button>
          </th>
        </tr>
        <tr className="WidgetLg-tr">
          <th className="WidgetLg-th">
            <img
              src="https://i.pinimg.com/736x/b8/03/78/b80378993da7282e58b35bdd3adbce89.jpg"
              alt="avatr"
            />
            <span className="WidgetLg-th-txt">Susan</span>
          </th>
          <th className="WidgetLg-th">5 jun 2022</th>
          <th className="WidgetLg-th">$250 </th>
          <th className="WidgetLg-th">
            <Button id="declined">Declined</Button>
          </th>
        </tr>
        <tr className="WidgetLg-tr">
          <th className="WidgetLg-th">
            <img
              src="https://i.pinimg.com/736x/b8/03/78/b80378993da7282e58b35bdd3adbce89.jpg"
              alt="avatr"
            />
            <span className="WidgetLg-th-txt">Susan</span>
          </th>
          <th className="WidgetLg-th">5 jun 2022</th>
          <th className="WidgetLg-th">$150 </th>
          <th className="WidgetLg-th">
            <Button id="approved">Approved</Button>
          </th>
        </tr>
      </table>
    </div>
  );
}
