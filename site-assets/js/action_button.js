document.getElementById('button_action_like_box').innerHTML = (`
    <input type="checkbox" class="checkbox" id="action_button_like" onclick="action_button_like_btn()">
    <div class="svg-container">
        <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
            </path>
        </svg>
        <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
            </path>
        </svg>
        <svg class="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="10,10 20,20"></polygon>
            <polygon points="10,50 20,50"></polygon>
            <polygon points="20,80 30,70"></polygon>
            <polygon points="90,10 80,20"></polygon>
            <polygon points="90,50 80,50"></polygon>
            <polygon points="80,80 70,70"></polygon>
        </svg>
    </div>
`);











const obj = convertCookieToObject(document.cookie);
var action_checkbox_like_data = obj.data_action_checkbox_like;
document.getElementById('action_button_like').checked = action_checkbox_like_data;

function action_button_like_btn(mode){
    action_checkbox_like_data = (document.getElementById('action_button_like').checked);
    if(mode != 'rea'){
        if(action_checkbox_like_data === true){
            document.cookie = 'data_action_checkbox_like=' + true +'; path=/';
            post_like_count_data_add();
        }else{
            document.cookie = 'data_action_checkbox_like=' + false +'; path=/';
            post_like_count_data_remove();
        }
    }
}

window.setInterval(action_button_check, 100);

function action_button_check(){
    if(action_checkbox_like_data === true || action_checkbox_like_data === 'true'){
        document.getElementById('action_button_like').checked = true;
    }else{
        document.getElementById('action_button_like').checked = false;
    }
};




function convertCookieToObject(cookies) {
    const cookieItem = cookies.split(';');
    const obj = {};
    cookieItem.forEach((item) => {
        // 「=」で分解
        const element = item.split('=');
        // キーを取得
        const key = element[0].trim();
        // バリューを取得
        const value = decodeURIComponent(element[1]);
        // 保存
        obj[key] = value;
    });
    return obj;
};