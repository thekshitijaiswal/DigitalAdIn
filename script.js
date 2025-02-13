const hamburgerIcon = document.querySelector('.hamburger-menu')
const headerContent = document.querySelector('.header-content')
const nav = document.querySelector('nav')
const questionsTab = document.querySelectorAll('.question')


hamburgerIcon.addEventListener('click', (e)=>{
  e.stopPropagation()
  headerContent.classList.add('menu-open')
})

nav.addEventListener('click', (e)=>{
  e.stopPropagation()
})

window.addEventListener('click', ()=>{
  headerContent.classList.remove('menu-open')
})



var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

questionsTab.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling
    const icon = question.querySelector('i')

    // Close all other answers
    document.querySelectorAll('.answer').forEach((item) => {
      if (item !== answer) {
        item.style.display = 'none'
      }
    })

    document.querySelectorAll('.question i').forEach((icon) => {
      icon.className = 'fas fa-chevron-down'
    })

    // Toggle current answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none'
      icon.className = 'fas fa-chevron-down'
    } else {
      answer.style.display = 'block'
      icon.className = 'fas fa-chevron-up'
    }
  })
})
