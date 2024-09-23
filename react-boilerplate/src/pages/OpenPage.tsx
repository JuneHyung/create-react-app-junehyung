import { Link } from "react-router-dom";
import "@/assets/scss/pages/openPage.scss";

export const OpenPage = () => {
  return (
    <div className="open-page">
      <h1>Let's See Layout</h1>
      <ul>
        <li>
          <Link to="/page01">Layout01</Link>
        </li>
        <li>
          <Link to="/page02">Layout02</Link>
        </li>
      </ul>
    </div>
  );
};

