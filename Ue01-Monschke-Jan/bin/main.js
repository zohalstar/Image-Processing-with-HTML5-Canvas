window.addEventListener("load", function() {
  var filterUi;
  filterUi = new Ue01UI();
  filterUi.init();
  return filterUi.updateImage(document.getElementById('original_image'));
});