<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo notícias do: {{ championship }}</h3>
            </div>
        </div>
        
        <transition name="fade-view" mode="out-in">
            <router-view></router-view>
        </transition>

        <div class="container">
            <div class="row my-club mt-5">
                <div class="col-6">
                    <h2>Seu clube é: {{ myClub }}</h2>
                </div>
                <div class="col-6">
                    <HcodeInput />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HcodeInput from './HcodeInput'
import { mapGetters } from 'vuex'

export default {
    components: {
        HcodeInput
    },
    data() {
        return {
            
        }
    },
    props: {
        currentComponent: String
    },
    computed: {
        ...mapGetters({
            championship: 'getChampionship',
            myClub: 'getClubName'
        })
    }
}
</script>

<style scoped>
.fade-view-enter, .fade-view-leave-to {
    opacity: 0;
}
.fade-view-enter-active, .fade-view-leave-active {
    transition: opacity .5s ease-in-out;
}
</style>