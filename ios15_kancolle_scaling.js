class iOS15_kancolle {
  open() {
    if (typeof gadgetInfo === 'undefined') {
      alert("艦これのゲームページで実行してください");
      return;
    }

    var newWindow = window.onload("http:" + gadgetInfo.URL, '_blank');

    newWindow.addEventListener('load', function() {
      var htmlWrap = newWindow.document.evaluate('/html/body/div[@id="htmlWrap"]', newWindow.document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (htmlWrap) {
        htmlWrap.style.transform = 'scale(0.83)';
      }
    });
  }
  
  opensupport(document) {
    var s = document.createElement('link');
    s.rel = 'stylesheet';
    s.href = 'https://iOS15-kancolle.github.io/iframe.css';
    document.body.appendChild(s);
    
    s = document.createElement('iframe');
    s.src = 'https://zekamashi.net/';
    s.width = '48%';
    s.height = '100%';
    document.body.appendChild(s);
    
    s = document.createElement('iframe');
    s.src = 'https://wikiwiki.jp/kancolle/';
    s.width = '48%';
    s.height = '100%';
    document.body.appendChild(s);
    
    s = document.createElement('iframe');
    s.src = 'http://kancollecalc.jp/air_supremacy.html';
    s.width = '48%';
    s.height = '100%';
    document.body.appendChild(s);
    
    s = document.createElement('iframe');
    s.src = 'http://kc2ndexpcalc.web.fc2.com';
    s.width = '48%';
    s.height = '100%';
    document.body.appendChild(s);
  }
}

window.iOS15_kancolle = iOS15_kancolle;

// インスタンスの生成とメソッドの実行例
var instance = new iOS15_kancolle();
instance.open();
