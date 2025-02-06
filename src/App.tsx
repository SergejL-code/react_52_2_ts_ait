import "./App.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";

import NoPage from "./components/noPage/NoPage";
import HomePage from "./homePage/HomePage";

import Lesson04 from "./lessons/lesson04/Lesson04";
import UsersPage from "./components/usersPage/UsersPage";

import ConsultationPage from "./ConsultationsPage/ConsultationPage";
import Lesson12 from "./lessons/lesson12/Lesson12";
import Lesson11 from "./lessons/lesson11/Lesson11";
import FormGender from "./lessons/lesson12/formGender/FormGender";
import Cat from "./components/cat/Cat";
import ComponentenPage from "./componentensPage/ComponentenPage";
import ChangeTitel from "./components/changeTitelDocumentitel/ChangeTitel";
import FormBeispiel from "./lessons/lesson12/formBeispiel/FormBeispiel";
import Lesson13 from "./lessons/lesson13/Lesson13";
import Lesson14 from "./lessons/lesson14/Lesson14";
import ProductPage from "./components/productPage/ProductPage";
import Lesson15 from "./lessons/lesson15/Lesson15";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import Lesson16 from "./lessons/lesson16/lesson16";

function App(): JSX.Element {
  return (
    <CartProvider>
      <HashRouter>
        {/* импортируем компонент Routes (пути) вокруг всех компонентов приложения */}
        <Routes>
          {/* В обертке Route (один путь) - передаем пропсами: element - компонент назначаемый на путь, path - путь до компонента */}
          <Route path="/" element={<Layout />}>
            {/* компоненты ниже придут в Layout на место Outlet */}
            {/* path - это путь до компонента */}
            {/* это же значение 'path' мы используем в навигационных элементах Link в пропсе 'to', чтобы они работали, как ссылка на компонент */}
            <Route path="/" element={<HomePage />} />

            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductPage />} />
            <Route path="cart" element={<Cart />} />

            <Route path="lesson-1" element={<h2>in Entwicklung</h2>} />
            <Route path="lesson-2" element={<h2>in Entwicklung</h2>} />
            <Route path="lesson-3" element={<h2>in Entwicklung</h2>} />
            <Route path="lesson-4" element={<Lesson04 />} />
            <Route path="lesson-5" element={<Lesson05 />} />
            <Route path="lesson-6" element={<UsersPage />} />
            <Route path="lesson-7" element={<h2>in Entwicklung</h2>} />
            <Route path="lesson-8" element={<h2>in Entwicklung</h2>} />
            <Route path="lesson-9" element={<h2>in Entwicklung</h2>} />
            <Route
              path="lesson-10"
              element={<h2>Lesson 10. react practice ⚡️</h2>}
            />
            <Route path="lesson-11" element={<Lesson11 />} />
            <Route path="lesson-12" element={<Lesson12 />} />
            <Route path="lesson-13" element={<Lesson13 />} />
            <Route path="lesson-13" element={<Lesson13 />} />
            <Route path="lesson-14" element={<Lesson14 />} />
            <Route path="lesson-14/:id" element={<ProductPage />} />
            <Route path="lesson-15" element={<Lesson15 />} />
            <Route path="lesson-16" element={<Lesson16 />} />

            <Route path="cats" element={<Cat />} />

            <Route path="con" element={<ConsultationPage />} />
            <Route path="/consul-5" element={<UsersPage />} />

            <Route path="allcomponent" element={<ComponentenPage />} />
            <Route path="/changetitle" element={<ChangeTitel />} />

            {/* компонент по пути * будет отображаться по всем путям, которые явно не описаны в маршрутизации  */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}
// оборачиваем все приложение в компонент HashRouter из библиотеки React Router

export default App;
