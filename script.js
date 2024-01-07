gsap.from('.header .logo,.product h1, .leftside h2 ,button', {
    y: -100,
    duration: 0.9,
    delay: 1.2,
    opacity: 0,
    stagger: 0.1
})

gsap.from('.object h1', {
    y: 200,
    duration: 0.8,
    delay: 0,
    opacity: 0,
    stagger: 0.5
})
gsap.from('.imgsection #img1', {
    x: -400,
    duration: 1,
    delay: 3,
    opacity: 0,
})
gsap.from('.imgsection #img2', {
    x: -500,
    duration:1,
    delay: 3,
    opacity: 0,
})
gsap.from('.imgsection #img3', {
    x: 800,
    duration:1,
    delay: 3,
    opacity: 0,
})
gsap.from('.down',{
    y:-20,
    repeat:-1,
    duration:1,
    yoyo:true,
    delay:4,
})

gsap.from('#page1 .box',{
    scale:0,
    duration:0.1,
    rotate:360,
    // delay:0.5,
    scrollTrigger:{
        trigger:'#page1 .box',
        start:'top 200%',
        end:'top 30%',
        scrub:1
    }
})

gsap.from('#page2 .box',{
    scale:0,
    duration:1,
    rotate:360,
    delay:0.5,
    scrollTrigger:{
        trigger:'#page2 .box',
        scroller:'body',
        start:'top 60%',
        scrub:1
    }
 })