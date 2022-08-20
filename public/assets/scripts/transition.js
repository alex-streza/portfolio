const pageTransition = () => {
  let tl = gsap.timeline()

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

const updateNavbar = () => {
  const tl = gsap.timeline()

  if (location.pathname === '/') {
    tl.to('#logo-path', {
      duration: 0.3,
      display: 'none',
      opacity: 0,
      y: 20,
    }).to('#logo', {
      y: 12,
    })
  } else {
    tl.to('#logo', {
      y: 0,
    }).to('#logo-path', {
      duration: 0.3,
      display: 'block',
      opacity: 1,
      y: 0,
    })
  }
  tl.play()
}

const updatePathTheme = () => {
  const paths = ['developer', 'designer', 'writer']

  const pathname = window.location.pathname.split('/')[1]
  const currentPath = pathname.includes('posts') ? 'writer' : pathname

  paths.forEach((path) => {
    document.documentElement.classList.remove(path)
  })
  if (currentPath !== '') document.documentElement.classList.add(currentPath)
}

const updatePathIndicator = () => {
  const pathname = window.location.pathname.split('/')[1]
  const path =
    pathname.includes('posts') || pathname == '' ? 'writer' : pathname

  document.getElementsByClassName('path')[0].innerHTML = path
}

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
            onComplete: () => {
              updatePathTheme()
              updatePathIndicator()
              updateNavbar()
            },
          },
        )

        done()
      },
      once() {
        return gsap.to('main', {
          duration: 0.3,
          opacity: 1,
          onComplete: () => {
            updatePathTheme()
            updatePathIndicator()
            updateNavbar()
          },
        })
      },
    },
  ],
})

updatePathTheme()
