<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-5 text-center principal-news">
                    <h2>Veja os últimos resultados do campeonato</h2>
                </div>
                <div class="col-5 offset-2 text-center principal-news">
                    <h2>Venha conhecer o Centro de Treinamentos da Hcode</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
section {
    margin-top: 25px;
}

.container .row {
    height: 300px;
}

.container .row .col-5:first-child {
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url('../assets/football.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
}

.container .row .col-5:nth-child(2) {
    background: url('../assets/football2.jpg') no-repeat;
    background-size: 100%;
}

h2 {
    margin: 25% 0;
    color: #F6B64E;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10px;
}

.principal-news {
    cursor: pointer;
}
</style>