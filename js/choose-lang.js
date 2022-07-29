function chooseLang () {
  const btnChooseLAng = document.querySelector('.top-head__lang');
  const currentLang = document.querySelector('.top-head__lang');
  const listLang = document.querySelectorAll('.modal-lang-list__item');

  for (let item of listLang){
    item.addEventListener('click', function (evt){
      document.querySelector('.modal-language').classList.remove('modal-language--active');
      document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
      document.querySelector('.wrapper').style.filter = "none";
      currentLang.dataset.lang = item.dataset.lang;
    })
  }
  function showModal () {
    document.querySelector('.modal-lang-list__item--current').dataset.lang = currentLang.dataset.lang
    document.querySelector('.modal-language').classList.add('modal-language--active');
    document.querySelector('.modal-overlay').classList.add('modal-overlay--active');
    document.querySelector('.wrapper').style.filter = 'blur(6px)';
  }
  btnChooseLAng.addEventListener('click',function (evt){
    showModal();
  })
}
export default chooseLang;
