<template>
    <div class="row div-news">
        <div class="col-3">
            <img :src="require('../assets/' + this.imgName)" :alt="imgInfo">
        </div>
        <div class="col-9">
            <slot name="title"></slot>
            <slot>Notícia Padrão</slot>
            <span class="font-italic">{{ formatDate(newsDate) }}</span>
        </div>
    </div>
</template>

<script>
import Utils from './../mixins/UtilsMixin'

export default {
    props: {
        imgName: {
            type: String,
            required: true
        },
        imgInfo: {
            type: String,
            required: true
        },
        newsDate: {
            type: String,
            required: true
        }
    },
    mixins: [Utils]
}
</script>

<style>
.div-news {
    margin-bottom: 30px;
}
.div-news img {
    width: 100%;
}
.div-news h2 {
    cursor: pointer;
    color: #7159C1;
}

.div-news p, span {
    color: #fff;
}
</style>