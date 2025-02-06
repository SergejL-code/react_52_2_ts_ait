import { createContext, useContext, useState } from "react";
// типизируем элемент корзины
interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// типизируем содержание контекста
// это те данные которые будут доступны для всех компонентов
// обернутых компонентом-оберткой с этим контекстом
// обернутые компоненты получат доступ к этим данным и функция
interface ICartContextType {
  // массив из элементов корзины
  cart: ICartItem[];
  // функция добавления в корзину
  addToCart: (product: ICartItem) => void;
  // удаление элемента из корзины
  removeFromCart: (id: number) => void;
  // очистка корзины
  clearCart: () => void;
}

// * 1. создаем контекст c помощью встроенного в  react метода createContext() и передаем начальное значение
export const CartContext = createContext<ICartContextType | undefined>(
  undefined
);

// * 2. обертка для компонентов с использованием контекстом

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // * ниже мы пропишем содержимой для передачи в контекст

  // переменная состояния для корзины
  const [cart, setCart] = useState<ICartItem[]>([]);

  // добавление элемента в корзину
  const addToCart = (product: ICartItem) => {
    setCart((prevCart) => {
      // проверяем есть ли такой продукт в корзине сравнив id переданного продукта с id внутри массива из корзины
      const productExist = prevCart.find((item) => item.id === product.id);
      // если продукт уже существует мы на одно значение увеличиваем его кол-во и возвращаем новый массив с изменениями
      if (productExist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // если продукта нет, то копируем старый массив с добавлением нового продукта выставив кол-во 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // удаление элемента из корзины
  const removeFromCart = (id: number) => {
    // в метод filter() - мы передаем условие для фильтрации
    // в ответ получаем новый массив элементов
    // если элемент удовлетворяет условию - он попадает в новый массив
    // если ни один из элементов не совпал с условием - мы получим пустой массив
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // очистка корзины
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {/* за место children придут обернутые компоненты */}
      {children}
    </CartContext.Provider>
  );
};
// ! функция для получения данных из этого контекста
// будет использована не здесь, а в тех компонентах, где будут нужны данные для корзины
// объявляем здесь но экспортируем и используем не здесь
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  // используем хук useContext для получения данных из выбранного контекста (в данном случае контекста корзины)
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("no such context 🫣");
  }
  return context;
};
