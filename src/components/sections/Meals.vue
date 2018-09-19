
<template lang="pug">
    
    section.section-meals
        ul.meals-showcase.clearfix
            li
                figure.meal-photo
                    img(:src="require('../resources/img/1.jpg')" alt="Korean bibimbap with egg and vegetables")
            li
                figure.meal-photo
                    img(:src="require('../resources/img/2.jpg')" alt="Any description...")
            li
                figure.meal-photo
                    img(:src="require('../resources/img/3.jpg')" alt="Any description...")
            li
                figure.meal-photo
                    img(:src="require('../resources/img/4.jpg')" alt="Any description...")
        ul.meals-showcase.clearfix
            li
                figure.meal-photo
                    img(:src="require('../resources/img/5.jpg')" alt="Any description...")
            li
                figure.meal-photo
                    img(:src="require('../resources/img/6.jpg')" alt="Any description...")
            li
                figure.meal-photo
                    img(:src="require('../resources/img/7.jpg')" alt="Any description...")
            li
                figure.meal-photo
                    img(:src="require('../resources/img/8.jpg')" alt="Any description...")

        
</template>

<script>
export default {
    data(){
        return{            

        }
    }
    
}
</script>

<style scoped>

    /* Section por si já tem padding. Aqui estou retirando ele. */
    .section-meals {
        padding: 0;
    }
    
    .meals-showcase {
        list-style: none;
        width: 100%;        
    }

    .meals-showcase li {
        display: block;
        float: left;
        width: 25%;
    }

    .meal-photo {
        width: 100%;
        margin: 0;

        /* Escondendo barra de rolagem quando as imagens são
        aumentadas usando o scale abaixo. */
        overflow: hidden;

        background-color: #000;
    }

    .meal-photo img {
        opacity: 0.7;
        width: 100%;
        height: auto;

        /* Aumentando tamanho das imagens. */
        transform: scale(1.15);

        transition: transform 0.5s, opacity 0.5s;
    }

    .meal-photo img:hover {
        /* Colocou esse .03 para correção porque o ideal
        é que as bordas das imagens não apareção. 
        Colocar 1 para notar a diferença. */
        transform: scale(1.03);    
        
        opacity: 1;
    }
</style>


