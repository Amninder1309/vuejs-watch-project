/* this is basic Home Page

It have video display section

*/

const HomePage={
    template: 
    /*html*/
    `
        <div class="container">
            <header class="my-4">
                <h1>Welcome to Watch Corner</h1>
                <p>Find the perfect watch for you.</p>
            </header>
            <div class="video-group">
                
                <div>
                        <div>
                        <input type="radio" id="demo" value="demo" v-model="videotype">
                        <label for="demo"> Click to see a look of final watch</label>
                    </div>
                    <div>
                        <input type="radio" id="manufacture" value="manufacture" v-model="videotype">
                        <label for="manufacture">   Click to see how we manufactue watch</label>
                    </div>
                </div>
                <div v-if="videotype == 'demo'">
                <video class="vdo"  autoplay loop muted>
                <source :src="'assets/videos/' + videotype + '.mp4'" type="video/mp4"  >
                Your browser does not support the video tag.
                </video>
                </div>
                <div v-else-if="videotype == 'manufacture'">
                <video class="vdo2"  autoplay loop muted>
                <source :src="'assets/videos/' + videotype + '.mp4'" type="video/mp4"  >
                Your browser does not support the video tag.
                </video>
                </div>
                
            </div>
        </div>
    `,
    data() {
        return {
            videotype: 'demo',
            
        }
    }
}
app.component('home-page',HomePage)
