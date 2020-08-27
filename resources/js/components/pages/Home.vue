<template>
    <div>
        <div v-if="errorLoading">ошибка</div>
        <template v-else>
            <div class="container" v-if="loading">
                <div class="row">
                    <div class="lds-roller" style="margin: 0 auto; margin-top: 300px"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
            <template v-else >
                <div class="container">
                    <div class="row marginbot">
                        <div class="card col-3 offset-1 marginbot" v-for="pizz in pizza"><!--v-for="pizz in pizza"-->
                            <h5 class="card-title">{{pizz.title}}</h5>
                            <img class="card-img-top" src="https://i.artfile.ru/2400x1600_802916_[www.ArtFile.ru].jpg" alt="Card image cap">
                            <div class="card-body">
                                <h2>{{pizz.price}} Руб</h2>
                                <p class="card-text">{{pizz.description}}</p>
                            </div>
                        </div>
                        <nav aria-label="Page navigation" style="margin: 0 auto;">
                            <ul class="pagination">
                                <li class="page-item" v-bind:class="{disabled : !prev_page_url}">
                                    <a class="page-link" href="#" aria-label="Previous" v-on:click="getPosts(prev_page_url)">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item" v-for="page in last_page"><a class="page-link" v-on:click="getPosts('http://127.0.0.1:8000/api/pizza?page='+page)">{{page}}</a></li>
                                <li class="page-item" v-bind:class="{disabled : !next_page_url}">
                                    <a class="page-link" aria-label="Next" v-on:click="getPosts(next_page_url)">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loading: true,
            errorLoading: false,
            pizza: '',
            last_page:'',
            next_page_url:'',
            prev_page_url:''
        }
    },
    methods:{
        getPosts(page_url){
            page_url = page_url || 'http://127.0.0.1:8000/api/pizza';
            axios.get(page_url)
            .then(res => {
                this.loading = true;
                console.log(res);
                this.last_page = res.data.name.last_page;
                this.next_page_url = res.data.name.next_page_url;
                this.prev_page_url = res.data.name.prev_page_url;
                console.log(this.next_page_url + " " + this.prev_page_url);
                this.pizza = res.data.name.data;
            })
            .catch(() => {this.errorLoading = true})
            .finally(() => {this.loading = false});
        }
    },
    mounted() {
        this.getPosts()
    }
}
</script>

<style scoped>
    .marginbot{
        margin-bottom: 40px;
    }
    .lds-roller {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-roller div {
        animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 40px 40px;
    }
    .lds-roller div:after {
        content: " ";
        display: block;
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: black;
        margin: -4px 0 0 -4px;
    }
    .lds-roller div:nth-child(1) {
        animation-delay: -0.036s;
    }
    .lds-roller div:nth-child(1):after {
        top: 63px;
        left: 63px;
    }
    .lds-roller div:nth-child(2) {
        animation-delay: -0.072s;
    }
    .lds-roller div:nth-child(2):after {
        top: 68px;
        left: 56px;
    }
    .lds-roller div:nth-child(3) {
        animation-delay: -0.108s;
    }
    .lds-roller div:nth-child(3):after {
        top: 71px;
        left: 48px;
    }
    .lds-roller div:nth-child(4) {
        animation-delay: -0.144s;
    }
    .lds-roller div:nth-child(4):after {
        top: 72px;
        left: 40px;
    }
    .lds-roller div:nth-child(5) {
        animation-delay: -0.18s;
    }
    .lds-roller div:nth-child(5):after {
        top: 71px;
        left: 32px;
    }
    .lds-roller div:nth-child(6) {
        animation-delay: -0.216s;
    }
    .lds-roller div:nth-child(6):after {
        top: 68px;
        left: 24px;
    }
    .lds-roller div:nth-child(7) {
        animation-delay: -0.252s;
    }
    .lds-roller div:nth-child(7):after {
        top: 63px;
        left: 17px;
    }
    .lds-roller div:nth-child(8) {
        animation-delay: -0.288s;
    }
    .lds-roller div:nth-child(8):after {
        top: 56px;
        left: 12px;
    }
    @keyframes lds-roller {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

</style>
