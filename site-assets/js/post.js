function post_all_count_data(){
    fetch('https://script.google.com/macros/s/AKfycbygMWwzgPCOYj_gWUu5yXmV5NhRQ54RRrTDzyTTU96F6yQd85fx3pN8I05bDMllGt7G/exec?mode=1', { mode: 'no-cors' });
};
function post_active_count_data_add(){
    fetch('https://script.google.com/macros/s/AKfycbygMWwzgPCOYj_gWUu5yXmV5NhRQ54RRrTDzyTTU96F6yQd85fx3pN8I05bDMllGt7G/exec?mode=active_count_data&active=1', { mode: 'no-cors' });
};
function post_active_count_data_remove(){
    fetch('https://script.google.com/macros/s/AKfycbygMWwzgPCOYj_gWUu5yXmV5NhRQ54RRrTDzyTTU96F6yQd85fx3pN8I05bDMllGt7G/exec?mode=active_count_data&active=01', { mode: 'no-cors' });
};
function post_download_count_data_add(){
    fetch('https://script.google.com/macros/s/AKfycbygMWwzgPCOYj_gWUu5yXmV5NhRQ54RRrTDzyTTU96F6yQd85fx3pN8I05bDMllGt7G/exec?mode=download_count_data&download=1', { mode: 'no-cors' });
};
function post_download_count_data_remove(){
    fetch('https://script.google.com/macros/s/AKfycbygMWwzgPCOYj_gWUu5yXmV5NhRQ54RRrTDzyTTU96F6yQd85fx3pN8I05bDMllGt7G/exec?mode=download_count_data&download=01', { mode: 'no-cors' });
};
function post_like_count_data_add(){
    fetch('https://script.google.com/macros/s/AKfycbygMWwzgPCOYj_gWUu5yXmV5NhRQ54RRrTDzyTTU96F6yQd85fx3pN8I05bDMllGt7G/exec?mode=like_count_data&like=1', { mode: 'no-cors' });
};
function post_like_count_data_remove(){
    fetch('https://script.google.com/macros/s/AKfycbygMWwzgPCOYj_gWUu5yXmV5NhRQ54RRrTDzyTTU96F6yQd85fx3pN8I05bDMllGt7G/exec?mode=like_count_data&like=01', { mode: 'no-cors' });
};




// アクティブ回数をGoogle Sheet API を使用して取得

var active_count = 0;

//window.setInterval(get_data_active_count, 100);

function get_data_active_count(){
    document.getElementById('active_count_data_area').innerHTML = active_count;
}

//gapi.load('client', initClient);

function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyAfjtGsaTu--b8u9TLnVD-6aIv7kJksfDk',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        console.log('Google Sheets APIが初期化されました');
        gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1k1i2NVO2UUggGGJnpVceHZTVgfEF8elBFeVix0qa8rc',
        range: 'Sheet1!A1:C2'
        }).then(function(response) {
        console.log(response.result);
        active_count=(response.result.values[1][0]);
        }).catch(function(error) {
        console.error('APIリクエスト中にエラーが発生しました', error);
        });
    }).catch(function(error) {
        console.error('Google Sheets APIの初期化中にエラーが発生しました', error);
    });
}