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