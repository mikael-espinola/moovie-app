import React from "react";
import "../../style/ErrorScreen.css";

import { LiaExclamationCircleSolid } from "react-icons/lia";

export default function ErrorScreen({ inputSearch }) {
  if (!inputSearch) return;
  return (
    <div className="error_container">
      <div className="error_div">
        <div className="icon">
          <LiaExclamationCircleSolid />
        </div>
        <h4>{`${inputSearch.toUpperCase()}`} wasn't found!</h4>
      </div>
    </div>
  );
}
