// import styles from './lesson16.module.css'

import { color } from "framer-motion";
import ChildrenProps from "../../components/childrenProps/ChildrenProps";

function Lesson16(): JSX.Element {
  return (
    <div>
      <h2>Lesson 16: practice before test</h2>
      <ChildrenProps func={() => console.log("много разных пропсов 🙇‍♂️")}>
        {/* обернутые данные придут на место children */}
        <p style={{ color: "red" }}>переданные данные</p>
        <ul>
          <li>данные из lesson 16</li>
          <li>можно передать много данных</li>
        </ul>
      </ChildrenProps>
    </div>
  );
}
export default Lesson16;
