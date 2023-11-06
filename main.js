/* Smooth Slide-In Animation (Left, Right and Up) */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    let targetOne = entry.target.classList.contains('hide-animation-up');
    let targetTwo = entry.target.classList.contains('hide-animation-left');
    let targetThree = entry.target.classList.contains('hide-animation-right');
    console.log(entry);

    if (entry.isIntersecting && targetOne) {
      entry.target.classList.add('show-animation-up');
    } else if (entry.isIntersecting && targetTwo) {
      entry.target.classList.add('show-animation-left');
    } else if (entry.isIntersecting && targetThree) {
      entry.target.classList.add('show-animation-right')
    } else {
      entry.target.classList.remove('show-animation-up');
      entry.target.classList.remove('show-animation-left');
      entry.target.classList.remove('show-animation-right');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hide-animation-up, .hide-animation-left, .hide-animation-right');
hiddenElements.forEach(el => observer.observe(el));


/* Anchor Scroll for Navigation Bar */

document.querySelectorAll('a[href^="#]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
