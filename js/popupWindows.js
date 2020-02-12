var moreButton         = document.querySelector('.more-button');
var subButton          = document.querySelector('.subscribe');
var moreContent        = document.querySelector('.more-p');
var subContent         = document.querySelector('.sub-p');
var popupWindowWrapper = document.querySelector('.popup-window-wrapper');
var btnClose           = document.querySelector('.btn-close');

moreButton.addEventListener('click', function () {
    popupWindowWrapper.classList.add('more');
});

subButton.addEventListener ('click', function() {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.getElementById('email').value;
  
  event.preventDefault();
  
  if(reg.test(address)) {
    popupWindowWrapper.classList.add('sub');
    moreContent.style.display = 'none';
    subContent.style.display = 'block';
  }
});

btnClose.addEventListener('click', function () {
  popupWindowWrapper.classList.remove('sub');
  popupWindowWrapper.classList.remove('more');
  moreContent.style.display = 'block';
  subContent.style.display = 'none';
})

popupWindowWrapper.onclick = function (e) {
  if (e.target == popupWindowWrapper) {
    popupWindowWrapper.classList.remove('sub');
    popupWindowWrapper.classList.remove('more');
    moreContent.style.display = 'block';
    subContent.style.display = 'none';
  }
}
  

