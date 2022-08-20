gsap.registerPlugin('ScrollTrigger');

gsap.fromTo('.img-container', {opacity: -1}, {opacity: 1, duration:1});

gsap.fromTo('.portfolio-detail', {opacity: -1, x: -100}, {opacity: 1, x:350, duration:2});



// gsap.from('.img-container', {})
gsap.to('.img-container',{
    scrollTrigger:{
        scrub: 1,
        pin: '.img-container',
        start: 0,
        end: 1200,
    },
    x:200,
    // ducation: 3,
});

gsap.to('.navbar',{
    scrollTrigger:{
        scrub: 1,
        start: 0,
        end: 2,
    },
    backgroundColor: '#2B4865',
    // ducation: 3,
});

gsap.from('.portfolio-detail', {opacity: 1, x:350})
gsap.to('.portfolio-detail',{
    scrollTrigger:{
        scrub: true,
        // pin: '.portfolio-detail',
        start: 0,
        end: '+=300',
        trigger: '.portfolio-detail',
        onUpdate: (e)=>{console.log(e)}
    },
    x: 0,
    opacity: 0,
});

// gsap.to('.img-container', {scrollTrigger: {scrub: 1},top:'-50px', stagger: .5, duration: 3})