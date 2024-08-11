/*component to show the favourite item list 

user can view them
user can remove them

*/

const FavouriteList={
    template: 
    /*html*/
    `
    <ul>
    <div class="fav-list-cont" v-for="watch in favouriteArray" :key="watch.id" @mouseover="updateCurrent(watch.id)">
            <img :src="watch.image" alt="not found" style="width: 100px;">
            <div class="fav-info">
                <h3>{{watch.brand}}, {{watch.name}}</h3>
                <p>{{watch.price}}</p>
            </div>
            <div >
            <button  class="btn btn-secondary" v-on:click="removeFromFavourites(watch.id)"
            :disabled="!watch.isfav">Remove from Fav</button>
            </div>
                            
        </div>
    </ul>
    `,
    data() {
        return {
            currentWatch: 0,
            favouriteArray:[],
            
        }
    },
    methods:{
        updateCurrent(id){
            this.currentWatchId=id
            console.log(this.currentWatchId)
        },
        removeFromFavourites(id){
            
                    // this.watches[this.currentSelectedWatch].isfav=true
                    
                    for(var i = this.favouriteArray.length - 1; i >= 0; i--) {
                      if (this.favouriteArray[i].id === id) {
                         this.favouriteArray.splice(i, 1);
                      }
                    }
                    sessionStorage.setItem('favourites', JSON.stringify(this.favouriteArray));  
              
            
        }
    },
    created() {
                
                this.favouriteArray = JSON.parse(sessionStorage.getItem('favourites')) || [];
            }
}
app.component('favourite-list',FavouriteList)
