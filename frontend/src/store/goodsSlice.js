import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Создаем асинхронное действие для загрузки товаров
export const fetchGoods = createAsyncThunk("goods/fetchGoods", async () => {
  const response = await fetch("http://localhost:3500/getProducts"); // Используем новый эндпоинт
  const goods = await response.json();
  return goods;
});

// Остальной код остается без изменений

export const goodsSlice = createSlice({
  name: "goods",
  initialState: {
    goods: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.goods = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectGoods = (state) => state.goods.goods;
export const selectGoodsStatus = (state) => state.goods.status;
export const selectGoodsError = (state) => state.goods.error;

export default goodsSlice.reducer;
