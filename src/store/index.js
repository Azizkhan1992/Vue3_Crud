import { createStore } from "vuex";
import api from '../services/api'

const store = createStore({
    state: {
        users: [],
        categories: [
            {
                id: 1,
                name: 'Sportswear'
            },
            {
                id: 2,
                name: 'Mens'
            },
            {
                id: 3,
                name: 'Womens'
            },
            {
                id: 4,
                name: 'Kids'
            },
            {
                id: 5,
                name: 'Fashion'
            },
            {
                id: 6,
                name: 'Household'
            },
            {
                id: 7,
                name: 'Interior'
            },
            {
                id: 8,
                name: 'Clothing'
            },
            {
                id: 9,
                name: 'Bags'
            },
            {
                id: 10,
                name: 'Shoes'
            }
        ],
        products: [
            {
                id: 1,
                name: 'Womens Easy Polo Black Edition',
                price: 56,
                image: 'product1.jpg',
                cat_id: 3
            },
            {
                id: 2,
                name: 'Mens Easy Polo Black Edition',
                price: 40,
                image: 'product2.jpg',
                cat_id: 2
            },
            {
                id: 3,
                name: 'Womens Easy Polo Black Edition',
                price: 65,
                image: 'product3.jpg',
                cat_id: 3
            },
            {
                id: 4,
                name: 'Womens Easy Polo Black Edition',
                price: 56,
                image: 'product4.jpg',
                isNew: true,
                cat_id: 3
            },
            {
                id: 5,
                name: 'Womens Easy Polo Black Edition',
                price: 65,
                image: 'product5.jpg',
                isSale: true,
                cat_id: 3
            },
            {
                id: 6,
                name: 'Womens Easy Polo Black Edition',
                price: 56,
                image: 'product6.jpg',
                cat_id: 3
            }
        ],
        isToggle: true
    },
    actions: {
        getCarouselPhotos(){
            return api.get('photos')
            .then(resp => {
                let items = resp.data
                return items.slice(0, 12)
            })
        }
    },
    mutations: {
        setUser(state, user){
            state.users.push(user)
            console.log(state.users)
        },
        setToggle(state){
            state.isToggle = !state.isToggle
        }
    },
    getters: {
        getUsers(state){
            return state.users
        },
        getToggler(state){
            return state.isToggle
        }
    }
});

export default store;