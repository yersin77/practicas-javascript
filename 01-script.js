
const $container = document.querySelector('.classContainer') 
const  $div = document.createElement('div')
$div.style.backgroundColor = 'red'
$div.style.width = '50px'
$div.style.height = '50px'

const $allArticle = document.querySelectorAll('article')

$allArticle.forEach(article =>{
    console.log(article);
})
