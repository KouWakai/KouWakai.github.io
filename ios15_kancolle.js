class iOS15_kancolle {
  open(){
    if(typeof gadgetInfo === undefined) return alart("艦これのゲームページで実行してください");
    window.open("http:"+gadgetInfo.URL,'_blank');
  }
  opensupport(document){
    var s=document.createElement('link');
    s.rel='stylesheet';
    s.href='https://iOS15-kancolle.github.io/iframe.css';
    document.body.appendChild(s);

    // XPathで要素を取得
    var canvas = document.evaluate('/html/body/canvas', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (canvas) {
      // 要素を縮小
      canvas.style.transform = 'scale(0.5)';
    }

    s=document.createElement('iframe');
    s.src='https://zekamashi.net/';
    s.width='48%';
    s.height='100%';
    document.body.appendChild(s);
    s=document.createElement('iframe');
    s.src='https://wikiwiki.jp/kancolle/';
    s.width='48%';
    s.height='100%';
    document.body.appendChild(s);
    s=document.createElement('iframe');
    s.src='http://kancollecalc.jp/air_supremacy.html';
    s.width='48%';
    s.height='100%';
    document.body.appendChild(s);
    s=document.createElement('iframe');
    s.src='http://kc2ndexpcalc.web.fc2.com';
    s.width='48%';
    s.height='100%';
    document.body.appendChild(s);
  }
}

window.iOS15_kancolle = iOS15_kancolle;
