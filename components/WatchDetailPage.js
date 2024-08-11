const WatchDetail={
    /*html*/
    template: `
        <div >
            <div v-if="watch" class="watch-detail-cont">
                <div class="img-cont">
                <img :src="watch.image" class="img-fluid" alt="Watch">
                </div>
                <div>
                    <h1>{{ watch.name }}</h1>
                    <p><strong>Brand:</strong> {{ watch.brand }}</p>
                    <p><strong>Price:</strong> {{ watch.price }}</p>
                    <p><strong>Gender:</strong> {{ watch.gender }}</p>
                    <p><strong>Strap:</strong> {{ watch.strap }}</p>
                    <p><strong>Other Features:</strong>
                        <ul> 
                        <li v-for="feature in watch.feature">
                            {{feature}}
                        </li>
                        </ul>
                    </p>
                    <button class="btn btn-success" v-on:click="addToCart">Add to Cart</button> <span></span>
                    <button class="btn btn-danger" v-on:click="removeFromCart">Remove from Cart</button>
                </div>
            </div>
            <a href="/" class="btn btn-primary back-home" >Back to Home</a>
        </div>
    `,
    data() {
        return {
            watch: null
        }
    },
    methods:{
        addToCart() {

            this.$emit('add-to-cart', this.watch.id)
        },
        removeFromCart() {

            this.$emit('remove-from-cart', this.watch.id)
        }
    },
    created() {
        
        this.watch =  JSON.parse(sessionStorage.getItem('currentSelectedWatch')) || [];
    }
};

app.component('watch-detail-page',WatchDetail);