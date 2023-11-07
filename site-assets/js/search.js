


// ページロード時に検索フォーム 検索フォームをパラメーターの値に更新
//    function searchFormBarPlaceholder(){
//        let param = window.location.search;
//        param = param.substring(2);
//        let parameters = param.split('&');
//       let searchText = ""
//        for (let i = 0; i < parameters.length; i++) {
//            let element = parameters[i].split('=');
//            //let name = decodeURIComponent(element[0]);
//            let value = decodeURIComponent(element[1]);
//            //console.log(name);
//           searchText = searchText + value
//            break;
//        }
//        if(searchText !== ""){
//            document.getElementById('searchBox').value = searchText;
//        }
//    }
//  検索フィルター機能

let cards = document.querySelectorAll('.box')
let allCards = document.querySelectorAll('.ListBoxes')
window.setInterval(liveSearch, 500);

function liveSearch() {
    let search_query = document.getElementById("searchBox").value;
    let allCardsConst = 0;
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cards.length; i++) {
        if(cards[i].textContent.toLowerCase()
            .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
            allCardsConst = allCardsConst + 1;
        } else {
            cards[i].classList.add("is-hidden");
        }
    }
    if(allCardsConst === 0){
        document.querySelector('#cardNull').classList.remove('is-hidden');
    }else{
        document.querySelector('#cardNull').classList.add('is-hidden');
    }
}

//A little delay
let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById('searchBox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});