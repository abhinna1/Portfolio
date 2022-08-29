gsap.registerPlugin('ScrollTrigger');

// gsap.fromTo('.img-container', {opacity: -1}, {opacity: 1, duration:1});

// gsap.fromTo('.portfolio-detail', {opacity: -1, x: -100}, {opacity: 1, x:350, duration:2});



// gsap.from('.img-container', {})
gsap.to('.img-container',{
    scrollTrigger:{
        scrub: 1,
        pin: '.img-container',
        start: 0,
        end: 'bottom 0%',
        // markers: true,
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

gsap.to('.portfolio-detail',{
    x: -200,
    duration: 10,
    opacity: 0,
    scrollTrigger:{
        scrub: true,
        pin: '.portfolio-detail',
        start: 0,
        end: 'top 20%',
        trigger: '.portfolio-detail',
        // markers: true,
        toggleActions: 'restart pause resume pause',
    },

});


let about2TL = gsap.timeline({
    scrollTrigger:{
        trigger: '.about-2',
        start: 'top 70%',
        end: 'top 10%',
        scrub: true,
        pin: true,
        markers: true,
    }
})
about2TL.from('.about-2', {x:-200})
about2TL.to('.about-2', {opacity: 1})
        .to('.about-2', {opacity: 0})


// gsap.to('.about-2',{
//     scrollTrigger:{
//         trigger: '.about-2',
//         scrub: true,
//         start: 'top 40%',
//         end: 'top 0%',
//         markers: {fontSize: '20px',},
//     },
//     opacity: 0,
// })




// gsap.to('.img-container', {scrollTrigger: {scrub: 1},top:'-50px', stagger: .5, duration: 3})