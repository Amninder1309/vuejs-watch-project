
const app = Vue.createApp({
    data(){
        return{
            title:"Watch Corner",
            cart:[],
            favourites:[],
            favouriteArray:[],
            extra:[{'id':1,'name':'aaaa'},{'id':2,'name':'bbbb'}]
        }
    },
    methods:{
        updateFavourite(obj){
            this.favouriteArray = JSON.parse(sessionStorage.getItem('favourites')) || [];
            
            const exists = this.favouriteArray.some(item => item.id === obj.id);
            if (!exists) {
                this.favouriteArray.push(obj);
            }
            sessionStorage.setItem('favourites', JSON.stringify(this.favouriteArray));
            console.log(this.favourites)
        },
        getFavourites(){
            const favouriteArray = JSON.parse(sessionStorage.getItem('favourites')) || [];
            return favouriteArray;
        },
        updateCart(id) {
            
            this.cart= JSON.parse(sessionStorage.getItem('cart')) || [];
            this.cart.push(id)
            sessionStorage.setItem('cart', JSON.stringify(this.cart));
        },
        removeFromCart(id) {
            this.cart= JSON.parse(sessionStorage.getItem('cart')) || [];
            const exists = this.cart.includes(id);
            if (!exists) {
                alert("Cannot remove as this item is not currently in Cart");
                return;
            }
            for(var i = this.cart.length - 1; i >= 0; i--) {
              if (this.cart[i] === id) {
                 this.cart.splice(i, 1);
                 break;
              }
            }
            sessionStorage.setItem('cart', JSON.stringify(this.cart));
          }
    },
    created() {
                
                this.favouriteArray = JSON.parse(sessionStorage.getItem('favourites')) || [];
                this.cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            }
})



