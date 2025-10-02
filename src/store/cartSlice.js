import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // {id, title, price, quantity, stock, image, etc}
    purchasedItems: {}, // { productId: totalPurchasedQuantity }
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      // ✅ Hitung stock available (stock asli - yang udah dibeli)
      const totalPurchased = state.purchasedItems[product.id] || 0;
      const availableStock = product.stock - totalPurchased;

      if (existingItem) {
        // ✅ Cek stock available sebelum menambah quantity
        if (existingItem.quantity < availableStock) {
          existingItem.quantity += 1;
        } else {
          alert("Stok tidak mencukupi!");
        }
      } else {
        // ✅ Cek apakah masih ada stock available
        if (availableStock > 0) {
          state.items.push({ 
            ...product, 
            quantity: 1, 
            stock: product.stock || 20,
            availableStock: availableStock // Simpen available stock
          });
        } else {
          alert("Produk ini stoknya habis!");
        }
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        // ✅ Hitung stock available
        const totalPurchased = state.purchasedItems[item.id] || 0;
        const availableStock = item.stock - totalPurchased;
        
        if (item.quantity < availableStock) {
          item.quantity += 1;
        } else {
          alert("Stok tidak mencukupi!");
        }
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },

    // ✅ Checkout Cart - update purchased items dan clear cart
    checkoutCart: (state, action) => {
      const cartItems = action.payload;
      
      // Loop setiap item dan update purchasedItems
      cartItems.forEach(cartItem => {
        const currentPurchased = state.purchasedItems[cartItem.id] || 0;
        state.purchasedItems[cartItem.id] = currentPurchased + cartItem.quantity;
      });
      
      // Clear cart setelah checkout
      state.items = [];
    },

    // ✅ Reset purchased items (untuk testing/reset)
    resetPurchasedItems: (state) => {
      state.purchasedItems = {};
    },
  },
});

export const { 
  addToCart, 
  increaseQuantity, 
  decreaseQuantity, 
  removeFromCart, 
  clearCart,
  checkoutCart,
  resetPurchasedItems
} = cartSlice.actions;

export default cartSlice.reducer;