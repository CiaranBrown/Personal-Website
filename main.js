const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show-animation-up');
    } else {
      entry.target.classList.remove('show-animation-up');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hide-animation-up');
hiddenElements.forEach(el => observer.observe(el));
