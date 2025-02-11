import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import authSlice from "../features/auth/authSlice";
// import counterReducer from "../features/counter/counterSlice"

// import { itemsSlice } from '../features/shopFeature/shopSlice'
// import authSlice from '../features/auth/authSlice'

// * в store хранятся данные из всего react приложения
// они изменяются с помощью функции reducer, в которую передается action

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // подключаем функции reducer для обработки данных из файлов slice
    products: productsSlice.reducer,
    // shop: itemsSlice.reducer,
    auth: authSlice.reducer,
    // здесь могли бы быть ваши редьюсеры
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
