const pageTransition = () => {
  var tl = gsap.timeline()

  tl.to('.transition li', {
    duration: 0.6,
    scaleY: 1,
    transformOrigin: 'bottom left',
    stagger: 0.2,
  })

  gsap.to('main', {
    delay: 0.3,
    duration: 0.3,
    opacity: 0,
    y: -150,
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
        await delay(900)
        window.scrollTo({ top: 0 })
        done()
      },
      enter() {
        const done = this.async()

        gsap.fromTo(
          'main',
          {
            opacity: 0,
            y: 150,
          },
          {
            duration: 0.3,
            opacity: 1,
            y: 0,
          },
        )
        done()
      },
      once() {
        return gsap.to('main', {
          duration: 0.3,
          opacity: 1,
        })
      },
    },
  ],
})
