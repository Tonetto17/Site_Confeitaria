document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type('Vejam as Promoções do dia', {delay: 3000}).delete(25).type('Confira o nosso cardápio', {delay: 3000}).delete(24).type('Boas Compras &#x1F60B;', {delay:2000})
    
    
    .go()
})