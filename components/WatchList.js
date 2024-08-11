/* this component is list of watches user can view 
*/

const WatchList={
    template: 
    /*html*/
    `
            <section class="my-4">
                <h2 class="sec-head">Our Watches</h2>
                <div class="watch-list-cont">
                    <div v-for="(watch,index) in watches" :key="watch.id" class="card m-2" style="width: 18rem;"
                    @mouseover="updateProduct(index)">
                        <img :src="watch.image" class="watch-img" alt="Watch">
                        <div class="card-body">
                            <h5 class="card-title">{{ watch.name }}</h5>
                            <p class="card-text">{{ watch.brand }}</p>
                            <p class="card-text">{{ watch.price }}</p>
                            
                            <div class="watch-btn-cont">
                            <a href="watch.html" class="btn btn-primary">View</a>
                            <button  class="btn btn-warning" v-on:click="addToFavourite"
                            :disabled="watch.isfav">Add to Fav</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
    `,
    data() {
        return {
            currentSelectedWatch:0,
            gender: '',
            watches: [
                { id: 1, name: 'Argos Apollo III - Olive Green Silver', brand: 'Argos', price: '$100', gender: 'male', image: 'assets/images/watch1.jpg', strap:'Italian suede' , feature:['Life Time Warranty','Stainless Steel','Scratch Proof'], isfav:false},
                { id: 2, name: 'Men Big Dial Analog Digital Black Silicone Sport', brand: 'PINDOWS', price: '$150', gender: 'male', image: 'assets/images/watch2.jpg', strap:'TPU band' ,feature:['2 year Warranty','Waterproof','HD Lighting'],isfav:false},
                { id: 3, name: 'NQ1043BM01 Edge Analog', brand: 'Titan', price: '$300', gender: 'male', image: 'assets/images/watch3.jpg', strap:'leather' ,feature:['4 years Warranty','Stainless Steel','2-hand Quartz movement'],isfav:false},
                { id: 4, name: 'NQ2606WM10 Raga', brand: 'Titan', price: '$250', gender: 'female', image: 'assets/images/watch4.jpg',strap:'chain bracelet type',feature:['4 years Warranty','Stainless Steel','2-hand Quartz movement'] ,isfav:false},
                { id: 5, name: 'Women Rose Gold-Toned Embellished Dial ', brand: 'Nordgreen', price: '$250', gender: 'female', image: 'assets/images/watch5.jpg' , strap:'chain band', feature:['2 years Warranty','Stainless Steel Dial','Quartz movement'] ,isfav:false},
                { id: 6, name: 'Womens Stainless Steel Round Shaped Mechanical Watch', brand: 'OliPinke', price: '$250', gender: 'female', image: 'assets/images/watch6.jpg', strap:'chain band' ,feature:['3 years Warranty','Stainless Steel'],isfav:false},
                
            ]
        }
    },
    methods:{
        addToFavourite(){
            this.watches[this.currentSelectedWatch].isfav=true
            
            this.$emit('add-to-favourite', this.watches[this.currentSelectedWatch])
        },
        updateProduct(index){
            this.currentSelectedWatch = index;
            sessionStorage.setItem('currentSelectedWatch', JSON.stringify(this.watches[this.currentSelectedWatch]));
            
        }
    }   
}
app.component('watch-list',WatchList)
