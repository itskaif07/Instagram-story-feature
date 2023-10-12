let card = document.querySelector('#card')
let stories = document.querySelector('#stories')
let story = document.querySelector('.story')
let storyImg = document.querySelector('.story img')
let full = document.querySelector('#fullScreen')

let images = [
    {story:'https://i.pinimg.com/564x/fe/72/4c/fe724cbbdbc468e221585c1436d0bb64.jpg', dp:'https://i.pinimg.com/564x/ae/bb/b3/aebbb390e484278a039d662584091660.jpg'},

    
    {story:'https://i.pinimg.com/originals/a3/dd/99/a3dd9955f8938acdafbf36f80a9919e1.gif', dp:'https://i.pinimg.com/564x/9d/7d/29/9d7d29521ccb7766ac55128a9e84b138.jpg'},

    {story:'https://i.pinimg.com/564x/83/6c/3c/836c3c774db709b3eb80198f842f3455.jpg', dp:'https://i.pinimg.com/564x/ed/89/e5/ed89e5a07bbe7dca50f436c8fc3aa77d.jpg'},

    {story:'https://i.pinimg.com/564x/65/9c/4f/659c4f79e700f2df399a42da96f86366.jpg', dp:'https://i.pinimg.com/564x/de/e9/42/dee94277a4d2dfdcb809398ef60d05f5.jpg'},

    {story:'https://i.pinimg.com/564x/86/14/fb/8614fb6490f7eb302f0e9139d8c3b2f9.jpg', dp:'https://i.pinimg.com/564x/16/1a/34/161a34f22798b187f9f2d55d6a9d063a.jpg'},
]

let clutter = ``

images.forEach(function(e, i){
    clutter += `<div class="story">
        <img id="${i}" src="${e.dp}" alt="">
    </div>`
})

stories.innerHTML = clutter

stories.addEventListener('click',function(e){
    full.style.display = 'block'
    card.style.filter = 'drop-shadow(2px 2px 20px white)'
    full.style.backgroundImage = `url(${images[e.target.id].story})`
    
    setTimeout(() => {
        full.style.display = 'none'
        card.style.filter = 'drop-shadow(0px 0px)'
    }, 3000);
})


