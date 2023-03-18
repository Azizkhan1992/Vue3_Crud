import { createStore } from "vuex";
import api from "../services/api";

const store = createStore({
  state: {
    admin: {
      email: "goadmin@gmail.com",
      password: "admin321",
    },
    users: [],
    categories: [
      {
        id: 1,
        name: "Sportswear",
        visibility: true,
      },
      {
        id: 2,
        name: "Mens",
        visibility: true,
      },
      {
        id: 3,
        name: "Womens",
        visibility: true,
      },
      {
        id: 4,
        name: "Kids",
        visibility: true,
      },
      {
        id: 5,
        name: "Fashion",
        visibility: true,
      },
      {
        id: 6,
        name: "Household",
        visibility: false,
      },
      {
        id: 7,
        name: "Interior",
        visibility: true,
      },
      {
        id: 8,
        name: "Clothing",
        visibility: true,
      },
      {
        id: 9,
        name: "Bags",
        visibility: false,
      },
      {
        id: 10,
        name: "Shoes",
        visibility: true,
      },
    ],
    products: [
      {
        id: 1,
        name: "Womens Easy Polo Black Edition",
        price: 56,
        image: "product1.jpg",
        isNew: false,
        cat_id: 3,
      },
      {
        id: 2,
        name: "Mens Easy Polo Black Edition",
        price: 40,
        image: "product2.jpg",
        isNew: true,
        cat_id: 2,
      },
      {
        id: 3,
        name: "Womens Easy Polo Black Edition",
        price: 65,
        image: "product3.jpg",
        isNew: true,
        cat_id: 3,
      },
      {
        id: 4,
        name: "Womens Easy Polo Black Edition",
        price: 56,
        image: "product4.jpg",
        isNew: true,
        cat_id: 3,
      },
      {
        id: 5,
        name: "Womens Easy Polo Black Edition",
        price: 65,
        image: "product5.jpg",
        isNew: false,
        cat_id: 3,
      },
      {
        id: 6,
        name: "Womens Easy Polo Black Edition",
        price: 56,
        image: "product6.jpg",
        cat_id: 3,
      },
      {
        id: 7,
        name: "Sport Wear",
        price: 65,
        image: "gallery2.jpg",
        isNew: false,
        cat_id: 1,
      },
      {
        id: 8,
        name: "Kids Wear",
        price: 25,
        image: "gallery1.jpg",
        isNew: true,
        cat_id: 4,
      },
      {
        id: 9,
        name: "New Fashion",
        price: 100,
        image: "girl1.jpg",
        isNew: true,
        cat_id: 5,
      },
      {
        id: 10,
        name: "New Fashion",
        price: 120,
        image: "girl2.jpg",
        isNew: true,
        cat_id: 5,
      },
      {
        id: 11,
        name: "New Fashion",
        price: 90,
        image: "girl3.jpg",
        isNew: true,
        cat_id: 5,
      },
    ],
    customers: [
      {
        id: 1,
        name: "Adam Taylor",
        email: "taylor-adam@example.com",
        country: "Russia",
        spent: 32500,
        phone: "+38 (094) 730-24-25",
        image: "customer3.jpg",
      },
      {
        id: 2,
        name: "Anna Wilson",
        email: "wilson-anna@example.com",
        country: "Italy",
        spent: 25800,
        image: "customer1.png",
      },
      {
        id: 3,
        name: "Charlotte Jones",
        email: "jones-charlotte@example.com",
        country: "Canada",
        spent: 45600,
        phone: "+38 (094) 730-24-25",
        image: "customer4.png",
      },
      {
        id: 4,
        name: "Olivia Smith",
        email: "smith-olivia@example.com",
        country: "China",
        spent: 34200,
        image: "customer2.jpg",
      },
      {
        id: 5,
        name: "Jessica Moore",
        email: "moore-jessica@example.com",
        country: "USA",
        spent: 42300,
        image: "customer5.png",
      },
    ],
    orders: [
      {
        id: 1,
        number: 3201,
        date: "2021-05-26",
        customerName: "Anna Wilson",
        customer_id: 2,
        paid: true,
        status: false,
        items: 3,
        total: 200,
      },
      {
        id: 2,
        number: 1937,
        date: "2022-02-23",
        customerName: "Charlotte Jones",
        customer_id: 3,
        paid: false,
        status: false,
        items: 1,
        total: 720,
      },
      {
        id: 3,
        number: 1603,
        date: "2022-07-27",
        customerName: "Olivia Smith",
        customer_id: 4,
        paid: true,
        status: false,
        items: 12,
        total: 3700,
      },
      {
        id: 4,
        number: 1501,
        date: "2023-01-20",
        customerName: "Adam Taylor",
        customer_id: 1,
        paid: false,
        status: true,
        items: 2,
        total: 1900,
      },
      {
        id: 5,
        number: 1288,
        date: "2023-03-12",
        customerName: "Jessica Moore",
        customer_id: 5,
        paid: false,
        status: true,
        items: 4,
        total: 4200,
      },
    ],
    isToggle: true,
    cart: [],
    contactInfo: {
      name: "E-Shopper Inc",
      location: "Uzbekistan, Tashkent",
      address: "Tashkent city, Yunusobod 9",
      phone: "+998-90-925-55-25",
      email: "eshopper@gmail.com",
    },
  },
  actions: {
    getCarouselPhotos() {
      return api.get("photos").then((resp) => {
        let items = resp.data;
        return items.slice(0, 12);
      });
    },
  },
  mutations: {
    setUser(state, user) {
      state.users.push(user);
    },
    setToggle(state) {
      state.isToggle = !state.isToggle;
    },
    addToCart(state, data) {
      state.cart.push(data);
    },
    removeFromCart(state, id) {
      state.cart = state.cart.filter((e) => e.id !== id);
    },
    increaseCartItemQty(state, itemIndex) {
      state.cart[itemIndex].qty++;
    },
    decreaseCartItemQty(state, itemIndex) {
      if (state.cart[itemIndex].qty == 1) {
        return;
      }

      state.cart[itemIndex].qty--;
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getToggler(state) {
      return state.isToggle;
    },
    getCartItems(state) {
      return state.cart;
    },
  },
});

export default store;
