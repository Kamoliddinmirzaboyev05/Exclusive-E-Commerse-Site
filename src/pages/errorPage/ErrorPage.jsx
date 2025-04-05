import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="errorPage">
      <div className="container">
        <div className="pageWay">
          <p>Home</p>
          <p>/</p>
          <p className="activePage">404 Error</p>
        </div>
        <div className="mainText">
          <h1>404 Not Found</h1>
          <p>Your visited page not found. You may go home page.</p>
          <Link to={"/"}>
            <button className="viewBtn">Back to home page</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
