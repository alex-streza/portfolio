const pageTransition = () => {
  var tl = gsap.timeline()

  tl.to('.transition li', {
    duration: 0.6,
    scaleY: 1,
    transformOrigin: 'bottom left',
    stagger: 0.2,
  })

  tl.to('.transition li', {
    duration: 0.6,
    scaleY: 0,
    transformOrigin: 'top right',
    stagger: 0.1,
    delay: -0.3,
  })
}

const delay = (n) => {
  n = n || 2000
  return new Promise((done) => {
    setTimeout(() => {
      done()
    }, n)
  })
}

barba.use(barbaPrefetch)

barba.init({
  debug: true,
  transitions: [
    {
      name: 'home',
      async leave() {
        const done = this.async()
        pageTransition()
        await delay(1200)
        done()
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        })
      },
    },
  ],
})
