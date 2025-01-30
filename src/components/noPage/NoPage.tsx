import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div>
      <h2> 404: No such Page</h2>
      <Link to="/">To home Page🥅</Link>
    </div>
  );
}

export default NoPage;
