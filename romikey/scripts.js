const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function setLineWidth(item) {
    let test = item.scrollWidth
    item.style.setProperty('--var-scrollTo', '-'+test+'px')
}

// расскажу, зачем онлоад, если позовёте на след. этап
window.onload = ()=>{
    document.querySelectorAll('.strip_line').forEach((line)=>{
        setLineWidth(line)
        line.addEventListener('resize', ()=>{
            setLineWidth(line)
        })
        line.innerHTML += line.innerHTML
        line.classList.add('animate')
    })
}

const slider = new Swiper ('.services-cards',{
    slidesPerView: 1,
    slidesOffsetBefore: 0,
    spaceBetween: 24,
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            freeMode: true,
        },
        1200: {
            slidesPerView: 'auto',
            freeMode: true,
            slidesOffsetBefore: 400,
        },
    },
    keyboard: {
        enabled: true,
    },
})

if(!isMobile){
    const cursor = document.querySelector('.cursor')

    document.addEventListener('pointermove', (ev)=>{
        cursor.style.left = ev.pageX
        cursor.style.top = ev.pageY - window.scrollY
    })
    document.querySelectorAll('a').forEach((a)=>{
        a.addEventListener('mouseover', ()=>{
            cursor.classList.add('hover')
        })
        a.addEventListener('mouseout', ()=>{
            cursor.classList.remove('hover')
        })
    })
}
