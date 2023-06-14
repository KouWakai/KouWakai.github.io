class iOS15_kancolle {
  open(){
    if(typeof gadgetInfo === undefined) return alert("艦これのゲームページで実行してください");
    window.open("http:"+gadgetInfo.URL,'_blank');
  }
  opensupport(document){
    var s=document.createElement('link');
    s.rel='stylesheet';
    s.href='https://iOS15-kancolle.github.io/iframe.css';
    document.body.appendChild(s);
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
};

window.iOS15_kancolle = iOS15_kancolle;

// iPhone 11の画面に縦横が綺麗に収まるように調整
const deviceWidth = 375; // iPhone 11の横幅
const deviceHeight = 812; // iPhone 11の縦幅

const iframeWidth = '48%';
const iframeHeight = '100%';

const scaleFactor = Math.min(
  deviceWidth / (deviceHeight * 0.48),
  deviceHeight / (deviceWidth * 0.96)
);

const adjustedIframeWidth = `${parseFloat(iframeWidth) * scaleFactor}%`;
const adjustedIframeHeight = `${parseFloat(iframeHeight) * scaleFactor}%`;

document.addEventListener('DOMContentLoaded', function() {
  const app = new iOS15_kancolle();
  app.opensupport(document);

  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    iframe.width = adjustedIframeWidth;
    iframe.height = adjustedIframeHeight;
  });
});
