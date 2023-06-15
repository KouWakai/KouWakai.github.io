javascript:(function() {
  var htmlWrap = document.evaluate('/html/body/div[@id="htmlWrap"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (htmlWrap) {
    htmlWrap.style.transform = 'scale(0.83)';
  }
})();
