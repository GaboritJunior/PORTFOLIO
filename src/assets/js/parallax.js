const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const forest = document.getElementById('forest');
const rock = document.getElementById('rock');
const title = document.getElementById('title');
const button = document.getElementById('button');

window.addEventListener('scroll', function parallax() {
  const value = this.window.scrollY;
  console.log(this.window.scrollY);

  if (value <= 750) {
    title.style.top = 40 + (value * -0.05) + '%';
    bird1.style.top = value * -0.5 + 'px';
    bird1.style.left = value * 0.5 + 'px';
    bird2.style.top = value * -0.25 + 'px';
    bird2.style.left = value * -1 + 'px';
    button.style.marginTop = value * 1.5 + 'px';   
    rock.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
  }
});
