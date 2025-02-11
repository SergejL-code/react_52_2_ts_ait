import { createSlice } from "@reduxjs/toolkit";
import { IProductState } from "./types";
import { loadLimitProduct, loadProducts } from "./productsActions";
// * создаем начальный объект-состояние для slice
const initialState: IProductState = {
  // ключ с самими данными
  products: [],
  // ключ с индикатором загрузки (пришли данные или нет)
  isLoading: false,
  // ключ для передачи ошибки
  error: "",
};

// * объект с логикой обработки данных для передачи в store
export const productSlice = createSlice({
  // уникальное имя для объекта slice
  name: "productsSlice",
  // передаем начально состояние для slice (имя ключа и имя переменной здесь совпадают)
  initialState,
  // логика работы с синхронными данными
  reducers: {},
  // работа с асинхронными данными
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload as string;
      })
      .addCase(loadLimitProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadLimitProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(loadLimitProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload as string;
      });
  },
});

export default productSlice;
// export const {} = productsSlice.actions;
