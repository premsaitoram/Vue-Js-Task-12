import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: [],
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product); // Add product to cart
    },
  },
  persist: true,
});
