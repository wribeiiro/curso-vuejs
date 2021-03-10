export default {
    state: {
        news: [{
            id: 1,
            title: 'Começam os treinos para a nova temporada',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab vitae blanditiis nisi, sit error et commodi aspernatur saepe, consequatur molestias fuga expedita labore quaerat accusamus ipsum recusandae soluta. Ea, itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ducimus, animi laudantium qui labore sit saepe nostrum voluptatem dicta sapiente! Accusantium quasi pariatur nihil facere nostrum quod impedit, ut doloremque!',
            date: '2020-01-01',
            img: 'news1.jpg',
            imgInfo: 'Notícia 1'
        }, {
            id: 2,
            title: 'Jogo de quarta-feira termina empatado',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab vitae blanditiis nisi, sit error et commodi aspernatur saepe, consequatur molestias fuga expedita labore quaerat accusamus ipsum recusandae soluta. Ea, itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ducimus, animi laudantium qui labore sit saepe nostrum voluptatem dicta sapiente! Accusantium quasi pariatur nihil facere nostrum quod impedit, ut doloremque!',
            date: '2020-01-07',
            img: 'news2.jpg',
            imgInfo: 'Notícia 2'
        }, {
            id: 3,
            title: 'A inauguração do novo estádio será na semana que vem',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab vitae blanditiis nisi, sit error et commodi aspernatur saepe, consequatur molestias fuga expedita labore quaerat accusamus ipsum recusandae soluta. Ea, itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ducimus, animi laudantium qui labore sit saepe nostrum voluptatem dicta sapiente! Accusantium quasi pariatur nihil facere nostrum quod impedit, ut doloremque!',
            date: '2020-01-20',
            img: 'news3.jpg',
            imgInfo: 'Notícia 3'
        }]
    },
    getters: {
        getNews(state) {
            return state.news;
        },
        getNewsFromId: state => id => {
            
            let notice = state.news.find(item => {
                return (item.id == id)
            });

            return notice;

        }
    }
}