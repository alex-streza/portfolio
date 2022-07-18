const pageTransition = () => {
  var tl = gsap.timeline()

  tl.to('.transition li', {
    duration: 0.33,
    scaleY: 1,
    transformOrigin: 'bottom left',
    stagger: 0.2,
  })

  tl.to('.transition li', {
    duration: 0.33,
    scaleY: 0,
    transformOrigin: 'bottom left',
    stagger: 0.1,
    delay: 0.1,
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
        await delay(1000)
        done()
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        })
      },
      once(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        })
      },
    },
  ],
})
