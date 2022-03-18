const header = document.getElementById('header');
window.addEventListener('scroll', function nav() {
  header.classList.toggle('color', this.window.scrollY > 800);
});
