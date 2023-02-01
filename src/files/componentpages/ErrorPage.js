import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base";
import "./pages.css";

function ErrorPage() {
  return (
    <Base>
      <Page />
    </Base>
  );
}

export default ErrorPage;

function Page() {
  const history = useHistory();
  return (
    <div className="Pageserror">
      <p className="pageno">404</p>
      <p>Page Not Found</p>
      <p>It looks like you found a glitch in the matrix...</p>
      <button onClick={() => history.push("/")}>Back to Dashoard</button>
    </div>
  );
}
