//  Counter 1
const counterUp = window.counterUp.default
const callback = entries => {
   entries.forEach( entry => {
      const el = entry.target
      if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
         counterUp( el, {
            duration: 2000,
            delay: 10,
         } )
         el.classList.add( 'is-visible' )
      }
   } )
}
const IO = new IntersectionObserver( callback, { threshold: 1 } )
const el = document.querySelector('.counterup' )
IO.observe( el )
const el2 = document.querySelector('.counterup2' )
IO.observe( el2 )
const el3 = document.querySelector('.counterup3' )
IO.observe( el3 )
const el4 = document.querySelector('.counterup4' )
IO.observe( el4 )