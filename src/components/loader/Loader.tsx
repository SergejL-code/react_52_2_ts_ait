import { useState } from "react";
import "./loader.css";
function Loader() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return <div className="loader"></div>;
}

export default Loader;
