function startSc(){ // サイトのロード時に実行
    window.setInterval(FixedAnime, 1); // スクロール検証function
}


function FixedAnime(){ // スクロール制御
    var scroll = window.scrollY;//スクロールY軸取得
    if(scroll > 15){//スクロール何以上
        headerBackground.classList.remove('transparent--+Qg9m');// ヘッダーの配色を変更
        // logoFxnxa.classList.add('noGrowOnDesktop--iT0yH');
        // logoFxnxa.classList.add('noGrowOnMobile--mglkb');
        // fuddysLogoHeader.setAttribute('src','/FuddysStudios/site-assets/assets/logo/FuddysBlack.png');// ロゴテキスト配色変更
    }else{
        headerBackground.classList.add('transparent--+Qg9m');// ヘッダーの配色を変更
        // logoFxnxa.classList.remove('noGrowOnDesktop--iT0yH');
        // logoFxnxa.classList.remove('noGrowOnMobile--mglkb');
        // fuddysLogoHeader.setAttribute('src','/FuddysStudios/site-assets/assets/logo/FuddysWhite.png');// ロゴテキスト配色変更
    }
    let rootElement = document.documentElement;
    lang =(rootElement.lang);
}











//"ar":"アラビア語",
//"zh":"中国語",
//"en":"英語",
//"id":"インドネシア語",
//"ja":"日本語",
//"ms":"マレー語",
//"es":"スペイン語"

// パラメーターから値を取得

//let url = new URL(window.location.href);
//let params = url.searchParams;
//document.getElementById("lang-text").innerHTML =(params.get('lang'));






function languageChangeBtn(){ // 言語選 選択リスト
    const languageListArea = document.getElementById('languageListArea');
    if(languageListArea.style.display=="block"){
        languageListArea.classList.remove('fadeIn');
        languageListArea.classList.add('fadeOut');
        setTimeout(function(){
            languageListArea.style.display ="none";
        },300);
    }else{
        languageListArea.classList.add('fadeIn');
        languageListArea.classList.remove('fadeOut');
        languageListArea.style.display ="block";
    }
}

function languageListAreaNone(){
    languageListArea.style.display ="none";
}