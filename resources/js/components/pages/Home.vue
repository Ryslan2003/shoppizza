<template>
    <div>
        <div>home</div>
        <div v-if="errorLoading">ошибка</div>
        <template v-else>
            <h3 v-if="loading">Загружаеться....</h3>
            <template v-else >
                <div class="container">
                    <div class="row marginbot">
                        <div class="card col-3 offset-1 marginbot" v-for="pizz in pizza">
                            <h5 class="card-title">{{pizz.title}}</h5>
                            <img class="card-img-top" src="https://i.artfile.ru/2400x1600_802916_[www.ArtFile.ru].jpg" alt="Card image cap">
                            <div class="card-body">
                                <h2>{{pizz.price}} РУБ</h2>
                                <p class="card-text">{{pizz.description}}</p>
                            </div>
                        </div>
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
            pizza: ''
        }
    },
    mounted() {
        setTimeout(() => {
            axios.get('http://127.0.0.1:8000/api/pizza')
                .then(res => {
                    console.log(res.data.name);
                    this.pizza = res.data.name;
                })
                .catch(() => {this.errorLoading = true})
                .finally(() => {this.loading = false});
        },1000)
    }
}
</script>

<style scoped>
    .marginbot{
        margin-bottom: 40px;
    }
</style>
