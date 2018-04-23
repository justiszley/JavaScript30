function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = [...document.querySelectorAll('.slide-in')];

function scrollHandler(e) {
  const viewTop = window.scrollY;
  const viewBottom = viewTop + document.documentElement.clientHeight;

  images.forEach(img => {
    const imgTop = img.offsetTop;
    const imgBottom = imgTop + img.offsetHeight;
    
    if (imgBottom > viewTop && imgTop < viewBottom) {
      img.classList.add('active')
    } else {
      img.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', debounce(scrollHandler));