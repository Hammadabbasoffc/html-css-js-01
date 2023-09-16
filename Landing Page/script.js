var tl = gsap.timeline({
    repeat: -1
});

tl
.to(".imageContainer" , {
    ease: Expo.easeInOut,
    width: "100%",
    // scaleX: 1,
    duration: 2,
    stagger: 2
}, 'a')

  
.to(".text h1" ,{
    ease: Expo.easeInOut,
    stagger: 2,
    top: 0
},'a')

.to(".text h1" ,{
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%"
},'a')