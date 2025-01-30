import "./App.css";
//import Lesson10 from "./lessons/lesson10/Lesson10";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";
import FetchFox from "./components/fetchfox/FetchFox";
import Cat from "./components/cat/Cat";
import NoPage from "./components/noPage/NoPage";
import HomePage from "./components/homePage/HomePage";
import { h2 } from "framer-motion/client";
import Lesson04 from "./lessons/lesson04/Lesson04";
//import Homework_08 from "./Homeworks/HM08/variant_1/Homework_08";
//import Lesson09 from "./lessons/lesson09/Lesson09";

//import Bitcoin from "./konsultation/bitcoin/Bitcoin";
//import Cocktail from "./konsultation/fetchPraktika/Cocktail";
//import Homework08 from "./Homework/HM08/Homework08";
//import Lesson09 from "./lessons/lesson09/Lesson09";
//import Lesson_08 from "./lessons/lesson08/Lesson_08";

//import UserProfil from "./Homework/HM07/UserProfil";

//import ChangeTitel from "./components/changeTitelDokumenttitel/ChangeTitel";

//import CarShop from "./lesson07/car/carshop/CarShop";
//import Playground from "./lesson07/playground/Playground";
//import RandomDog from "./lesson07/random/RandomDog";
//import Playground from "./lesson07/playground/Playground";
//import RandomDog from "./lesson07/random/RandomDog";
//import Sandwich from "./components/sandwich/Sandwich";

//import Counter from "./components/counter/Counter";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="fetch-cat" element={<Cat />} />
          <Route path="lesson-01" element={<h2>Lesson</h2>} />
          <Route path="lesson-02" element={<h2>Lesson</h2>} />
          <Route path="lesson-03" element={<Cat />} />
          <Route path="lesson-04" element={<Lesson04 />} />
          <Route path="lesson-" element={<Lesson05 />} />
          <Route path="lesson-" element={<Cat />} />
          <Route path="lesson-" element={<Cat />} />
          <Route path="lesson-" element={<Cat />} />
          <Route path="lesson-" element={<Cat />} />
          <Route path="lesson-" element={<Cat />} />
          <Route path="lesson-" element={<Cat />} />

          <Route path="fetch-fox" element={<FetchFox />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
