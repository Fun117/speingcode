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






//アクティブ送信
fetch('https://script.google.com/macros/s/AKfycbygMWwzgPCOYj_gWUu5yXmV5NhRQ54RRrTDzyTTU96F6yQd85fx3pN8I05bDMllGt7G/exec?mode=active_count_data&active=1', { mode: 'no-cors' });