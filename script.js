let animate = gsap.timeline();

animate.from('#con1',{
    x:-1600,
    duration:1,
})

animate.from('#con2',{
    x:-1600,
    duration:1,
})

animate.from('i',{
    opacity:0,
    duration:1,
})

animate.from('#imgcont',{
    x:-1050,
    duration:.5,
})

animate.from('#rotate',{
    x:-100,
    opacity:0,
    duration:1,
})

animate.from('nav',{
    y:-100,
    duration:1,
    opacity:0,
})

animate.from('#number',{
    duration:1,
    y:-10,
    opacity:0,
})

animate.from('#mem',{
    duration:1,
    y:-10,
    opacity:0,
})

animate.from('p',{
    duration:1,
    x:-10,
    opacity:0,
})