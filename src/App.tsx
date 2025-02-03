import "./App.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";

import NoPage from "./components/noPage/NoPage";
import HomePage from "./components/homePage/HomePage";

import Lesson04 from "./lessons/lesson04/Lesson04";
import UsersPage from "./components/usersPage/UsersPage";

import ConsultationPage from "./konsultation/ConsultationPage";
import Lesson12 from "./lessons/lesson12/Lesson12";
import Lesson11 from "./lessons/lesson11/Lesson11";
import FormGender from "./lessons/lesson12/formGender/FormGender";
import Cat from "./components/cat/Cat";

function App() {
  return (
    // оборачиваем все приложение в компонент HashRouter из библиотеки React Router
    <HashRouter>
      {/* импортируем компонент Routes (пути) вокруг всех компонентов приложения */}
      <Routes>
        {/* В обертке Route (один путь) - передаем пропсами: element - компонент назначаемый на путь, path - путь до компонента */}
        <Route path="/" element={<Layout />}>
          {/* компоненты ниже придут в Layout на место Outlet */}
          {/* path - это путь до компонента */}
          {/* это же значение 'path' мы используем в навигационных элементах Link в пропсе 'to', чтобы они работали, как ссылка на компонент */}
          <Route path="/" element={<HomePage />} />
          <Route path="lesson-1" element={<h2>in Entwicklung</h2>} />
          <Route path="lesson-2" element={<h2>in Entwicklung</h2>} />
          <Route path="lesson-3" element={<h2>in Entwicklung</h2>} />
          <Route path="lesson-4" element={<Lesson04 />} />
          <Route path="lesson-5" element={<Lesson05 />} />
          <Route path="lesson-6" element={<UsersPage />} />
          <Route path="lesson-7" element={<h2>in Entwicklung</h2>} />
          <Route path="lesson-8" element={<h2>in Entwicklung</h2>} />
          <Route path="lesson-9" element={<h2>in Entwicklung</h2>} />
          <Route path="lesson-10" element={<h2>in Entwicklung</h2>} />
          <Route path="lesson-11" element={<Lesson11 />} />
          <Route path="lesson-12" element={<Lesson12 />} />
          <Route path="form_gender" element={<FormGender />} />
          <Route path="cats" element={<Cat />} />

          <Route path="con" element={<ConsultationPage />} />
          <Route path="/consul-5" element={<UsersPage />} />

          {/* компонент по пути * будет отображаться по всем путям, которые явно не описаны в маршрутизации  */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
