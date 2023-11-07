function copyToClipboard(text){
    // テキストコピー用の一時要素を作成
    const pre = document.createElement('pre');

    // テキストを選択可能にしてテキストセット
    pre.style.webkitUserSelect = 'auto';
    pre.style.userSelect = 'auto';
    pre.textContent = text;

    // 要素を追加、選択してクリップボードにコピー
    document.body.appendChild(pre);
    document.getSelection().selectAllChildren(pre);
    const result = document.execCommand('copy');

    // 要素を削除
    document.body.removeChild(pre);

    return result;
}
















let manifest_display_override_box_count = 0;
let edit_manifest_display_override_box_cnt = 0;
function displayDataAaaCnt(dataCount){
    if(dataCount === 0){
        document.getElementById('manifest_display_override').setAttribute('onclick', 'displayDataAaaCnt(`add`)');
        document.getElementById('manifest_display_override').classList.add('closed');
        document.getElementById('manifest_display_override').classList.remove('open');
        document.getElementById('manifest_display_override').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"></path></svg>`;
        document.querySelector('#manifest_display_override_box').innerHTML = ``;
        manifest_display_override_box_count = 0;
    }else{
        if(dataCount < 6){
            if(manifest_display_override_box_count === 1){
                displayDataAaaCnt(0);
            }else{
                let removeDataCnt = (`manifest_display_override_box_` + dataCount)
                document.getElementById(removeDataCnt).remove();

                manifest_display_override_box_count = manifest_display_override_box_count - 1
                edit_manifest_display_override_box_cnt = manifest_display_override_box_count - 1
                document.getElementById(`manifest_display_override_box_` + manifest_display_override_box_count ).innerHTML = (`
                    <div class="node-header">
                        <label glot-model="Mode">Mode</label>
                        <select id="display_override_data_` + manifest_display_override_box_count + `">
                            <option value="fullscreen" glot-model="fullscreen">fullscreen</option>
                            <option value="standalone" glot-model="standalone">standalone</option>
                            <option value="minimal-ui" glot-model="minimal-ui">minimal-ui</option>
                            <option value="browser" glot-model="browser">browser</option>
                            <option value="window-controls-overlay" glot-model="window-controls-overlay">window-controls-overlay</option>
                        </select>
                        <button onclick="displayDataAaaCnt('` + manifest_display_override_box_count + `')" id="manifest_display_override_box_button_` + manifest_display_override_box_count + ` dataAddCnt" class="cnt1 node-collapse open " aria-label="Expand">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>
                        </button>
                    </div>
                `);
            }
        }else{
            if(manifest_display_override_box_count < 5){
                if(dataCount === `add`){
                    manifest_display_override_box_count = manifest_display_override_box_count + 1;
                    document.getElementById('manifest_display_override_box').insertAdjacentHTML('beforeend', 
                        `
                        <div class="node string-node" id="manifest_display_override_box_` + manifest_display_override_box_count + `">
                            <div class="node-header">
                                <label glot-model="Mode">Mode</label>
                                <select id="display_override_data_` + manifest_display_override_box_count + `">
                                    <option value="fullscreen" glot-model="fullscreen">fullscreen</option>
                                    <option value="standalone" glot-model="standalone">standalone</option>
                                    <option value="minimal-ui" glot-model="minimal-ui">minimal-ui</option>
                                    <option value="browser" glot-model="browser">browser</option>
                                    <option value="window-controls-overlay" glot-model="window-controls-overlay">window-controls-overlay</option>
                                </select>
                                <button onclick="displayDataAaaCnt('` + manifest_display_override_box_count + `')" id="manifest_display_override_box_button_` + manifest_display_override_box_count + ` dataAddCnt" class="cnt1 node-collapse open" aria-label="Expand">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>
                                </button>
                            </div>
                        </div>
                        `)

                    if(manifest_display_override_box_count > 1){
                        edit_manifest_display_override_box_cnt = manifest_display_override_box_count - 1
                        document.getElementById(`manifest_display_override_box_` + edit_manifest_display_override_box_cnt ).innerHTML = (`
                                <div class="node-header">
                                    <label glot-model="Mode">Mode</label>
                                    <select id="display_override_data_` + edit_manifest_display_override_box_cnt + `">
                                        <option value="fullscreen" glot-model="fullscreen">fullscreen</option>
                                        <option value="standalone" glot-model="standalone">standalone</option>
                                        <option value="minimal-ui" glot-model="minimal-ui">minimal-ui</option>
                                        <option value="browser" glot-model="browser">browser</option>
                                        <option value="window-controls-overlay" glot-model="window-controls-overlay">window-controls-overlay</option>
                                    </select>
                                </div>
                        `);
                    }
                }
            }
        }
    }
    if(manifest_display_override_box_count >= 5){
        document.getElementById('manifest_display_override').setAttribute('onclick', 'displayDataAaaCnt(0)');
        document.getElementById('manifest_display_override').classList.remove('closed');
        document.getElementById('manifest_display_override').classList.add('open');
        document.getElementById('manifest_display_override').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>`;
    }else{
        document.getElementById('manifest_display_override').setAttribute('onclick', 'displayDataAaaCnt(`add`)');
        document.getElementById('manifest_display_override').classList.add('closed');
        document.getElementById('manifest_display_override').classList.remove('open');
        document.getElementById('manifest_display_override').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"></path></svg>`;
    }
};


window.setInterval(manifest_display_override_box_count_check, 100);

var display_override_data_list_export;
function manifest_display_override_box_count_check(){
    const manifest_display_override_box_count_val = manifest_display_override_box_count + 1;
    if(manifest_display_override_box_count_val > 1){
        var display_override_data_list = "";
        for(let i = 1; i < manifest_display_override_box_count_val; i++){
            if(i === 1){
                display_override_data_list = display_override_data_list + '"' + document.getElementById('display_override_data_' + i).value + '"';
            }else{
                display_override_data_list = display_override_data_list + ',"' + document.getElementById('display_override_data_' + i).value + '"';
            };
        };
        display_override_data_list = '[' + display_override_data_list + ']';
        document.getElementById('code_display_override').innerHTML = (display_override_data_list);
    }else{
        document.getElementById('code_display_override').innerHTML = ('""');
    };
    display_override_data_list_export = display_override_data_list;
};



// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //








let related_applications_box_count = 0;
let edit_related_applications_box_cnt = 0;
function related_applications_Cnt(dataCount){
    if(dataCount === 0){
        document.getElementById('related_applications').setAttribute('onclick', 'related_applications_Cnt(`add`)');
        document.getElementById('related_applications').classList.add('closed');
        document.getElementById('related_applications').classList.remove('open');
        document.getElementById('related_applications').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"></path></svg>`;
        document.querySelector('#related_applications_box').innerHTML = ``;
        related_applications_box_count = 0;
    }else{
        if(dataCount < 8){
            if(related_applications_box_count === 1){
                related_applications_Cnt(0);
            }else{
                let removeDataCnt = (`related_applications_box_` + dataCount)
                document.getElementById(removeDataCnt).remove();

                related_applications_box_count = related_applications_box_count - 1
                edit_related_applications_box_cnt = related_applications_box_count - 1
                document.getElementById(`related_applications_box_` + related_applications_box_count ).innerHTML = (`
                    <div class="node-header">
                        <label>App</label>
                        <button onclick="related_applications_Cnt('` + related_applications_box_count + `')" id="related_applications_box_button_` + related_applications_box_count + ` dataAddCnt" class="cnt1 node-collapse open" aria-label="Expand">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>
                        </button>
                    </div>
                    <div class="node-body">
                        <div class="node string-node">
                            <div class="node-header">
                                <label>platform</label>
                                <select id="related_applications_data_platform_` + related_applications_box_count + `">
                                    <option value="chrome_web_store">chrome_web_store</option>
                                    <option value="play">play</option>
                                    <option value="chromeos_play">chromeos_play</option>
                                    <option value="webapp">webapp</option>
                                    <option value="windows">windows</option>
                                    <option value="f-droid">f-droid</option>
                                    <option value="amazon">amazon</option>
                                </select>
                            </div>
                        </div>
                        <div class="node string-node">
                            <div class="node-header">
                                <label>url</label>
                                <input type="url" id="related_applications_data_url_` + related_applications_box_count + `">
                            </div>
                        </div>
                        <div class="node string-node">
                            <div class="node-header">
                                <label>id</label>
                                <input type="text" id="related_applications_data_id_` + related_applications_box_count + `">
                            </div>
                        </div>
                    </div>
                `);
            }
        }else{
            if(related_applications_box_count < 7){
                if(dataCount === `add`){
                    related_applications_box_count = related_applications_box_count + 1;
                    document.getElementById('related_applications_box').insertAdjacentHTML('beforeend', 
                        `
                        <div class="node object-node" id="related_applications_box_` + related_applications_box_count + `">
                            <div class="node-header">
                                <label>App</label>
                                <button onclick="related_applications_Cnt('` + related_applications_box_count + `')" id="related_applications_box_button_` + related_applications_box_count + ` dataAddCnt" class="cnt1 node-collapse open" aria-label="Expand">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>
                                </button>
                            </div>
                            <div class="node-body">
                                <div class="node string-node">
                                    <div class="node-header">
                                        <label>platform</label>
                                        <select id="related_applications_data_platform_` + related_applications_box_count + `">
                                            <option value="chrome_web_store">chrome_web_store</option>
                                            <option value="play">play</option>
                                            <option value="chromeos_play">chromeos_play</option>
                                            <option value="webapp">webapp</option>
                                            <option value="windows">windows</option>
                                            <option value="f-droid">f-droid</option>
                                            <option value="amazon">amazon</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="node string-node">
                                    <div class="node-header">
                                        <label>url</label>
                                        <input type="url" id="related_applications_data_url_` + related_applications_box_count + `">
                                    </div>
                                </div>
                                <div class="node string-node">
                                    <div class="node-header">
                                        <label>id</label>
                                        <input type="text" id="related_applications_data_id_` + related_applications_box_count + `">
                                    </div>
                                </div>
                            </div>
                        </div>
                        `)

                    if(related_applications_box_count > 1){
                        edit_related_applications_box_cnt = related_applications_box_count - 1
                        document.getElementById(`related_applications_box_` + edit_related_applications_box_cnt ).innerHTML = (`
                            <div class="node object-node" id="related_applications_box_` + edit_related_applications_box_cnt + `">
                                <div class="node-header">
                                    <label>App</label>
                                </div>
                                <div class="node-body">
                                    <div class="node string-node">
                                        <div class="node-header">
                                            <label>platform</label>
                                            <select id="related_applications_data_platform_` + edit_related_applications_box_cnt + `">
                                                <option value="chrome_web_store">chrome_web_store</option>
                                                <option value="play">play</option>
                                                <option value="chromeos_play">chromeos_play</option>
                                                <option value="webapp">webapp</option>
                                                <option value="windows">windows</option>
                                                <option value="f-droid">f-droid</option>
                                                <option value="amazon">amazon</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="node string-node">
                                        <div class="node-header">
                                            <label>url</label>
                                            <input type="url" id="related_applications_data_url_` + edit_related_applications_box_cnt + `">
                                        </div>
                                    </div>
                                    <div class="node string-node">
                                        <div class="node-header">
                                            <label>id</label>
                                            <input type="text" id="related_applications_data_id_` + edit_related_applications_box_cnt + `">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `);
                    }
                }
            }
        }
    }
    if(related_applications_box_count >= 7){
        document.getElementById('related_applications').setAttribute('onclick', 'related_applications_Cnt(0)');
        document.getElementById('related_applications').classList.remove('closed');
        document.getElementById('related_applications').classList.add('open');
        document.getElementById('related_applications').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>`;
    }else{
        document.getElementById('related_applications').setAttribute('onclick', 'related_applications_Cnt(`add`)');
        document.getElementById('related_applications').classList.add('closed');
        document.getElementById('related_applications').classList.remove('open');
        document.getElementById('related_applications').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"></path></svg>`;
    }
};


window.setInterval(manifest_related_applications_box_count_check, 100);

var related_applications_data_list_export;
function manifest_related_applications_box_count_check(){
    const manifest_related_applications_box_count_val = related_applications_box_count + 1;
    if(manifest_related_applications_box_count_val > 1){
        var related_applications_data_list = "";
        for(let i = 1; i < manifest_related_applications_box_count_val; i++){
            if(i === 1){
                related_applications_data_list = related_applications_data_list + '{"platform":"' + document.getElementById('related_applications_data_platform_' + i).value + '","url":"' + document.getElementById('related_applications_data_url_' + i).value + '","id":"' + document.getElementById('related_applications_data_id_' + i).value + '"}';
            }else{
                related_applications_data_list = related_applications_data_list + ',{"platform":"' + document.getElementById('related_applications_data_platform_' + i).value + '","url":"' + document.getElementById('related_applications_data_url_' + i).value + '","id":"' + document.getElementById('related_applications_data_id_' + i).value + '"}';
            };
        };
        related_applications_data_list = '[' + related_applications_data_list + ']';
        document.getElementById('code_related_applications').innerHTML = (related_applications_data_list);
    }else{
        document.getElementById('code_related_applications').innerHTML = ('""');
    };
    related_applications_data_list_export = related_applications_data_list;
};




window.setInterval(DOIWA, 100);

var code_view_data;
function DOIWA(){
    if(display_override_data_list_export === undefined){
        if(related_applications_data_list_export === undefined){
            code_view_data = (
                '{\n' + '  "name":"' + document.getElementById('codeData_name').value + '",\n' + '  "short_name":"' + document.getElementById('codeData_short_name').value + '",\n' + '  "start_url":"' + document.getElementById('codeData_start_url').value + '",\n' + '  "display_override":"' + '",\n' + '  "display":"' + '",\n' + '  "background_color":"' + document.getElementById('codeData_background_color').value + '",\n' + '  "description":"' + document.getElementById('codeData_description').value.replace(/\r?\n/g,"") + '",\n' + '  "related_application":""\n}'
            );
        }else{
            code_view_data = (
                '{\n' + '  "name":"' + document.getElementById('codeData_name').value + '",\n' + '  "short_name":"' + document.getElementById('codeData_short_name').value + '",\n' + '  "start_url":"' + document.getElementById('codeData_start_url').value + '",\n' + '  "display_override":"' + '",\n' + '  "display":"' + '",\n' + '  "background_color":"' + document.getElementById('codeData_background_color').value + '",\n' + '  "description":"' + document.getElementById('codeData_description').value.replace(/\r?\n/g,"") + '",\n' + '  "related_application":' + related_applications_data_list_export + '\n}'
            );
        };
    }else{
        if(related_applications_data_list_export === undefined){
            code_view_data = (
                '{\n' + '  "name":"' + document.getElementById('codeData_name').value + '",\n' + '  "short_name":"' + document.getElementById('codeData_short_name').value + '",\n' + '  "start_url":"' + document.getElementById('codeData_start_url').value + '",\n' + '  "display_override":' + display_override_data_list_export + ',\n' + '  "display":"' + document.getElementById('codeData_display').value + '",\n' + '  "background_color":"' + document.getElementById('codeData_background_color').value + '",\n' + '  "description":"' + document.getElementById('codeData_description').value.replace(/\r?\n/g,"") + '",\n' + '  "related_application":""\n}'
            );
        }else{
            code_view_data = (
                '{\n' + '  "name":"' + document.getElementById('codeData_name').value + '",\n' + '  "short_name":"' + document.getElementById('codeData_short_name').value + '",\n' + '  "start_url":"' + document.getElementById('codeData_start_url').value + '",\n' + '  "display_override":' + display_override_data_list_export + ',\n' + '  "display":"' + document.getElementById('codeData_display').value + '",\n' + '  "background_color":"' + document.getElementById('codeData_background_color').value + '",\n' + '  "description":"' + document.getElementById('codeData_description').value.replace(/\r?\n/g,"") + '",\n' + '  "related_application":' + related_applications_data_list_export + '\n}'
            );
        };
    };
};

function code_view_copy() {
    copyToClipboard(code_view_data);
    document.getElementById('actionCopy').ariaLabel = "Copied!";
    document.getElementById('actionCopy').classList.add("active");
    document.getElementById('actionCopySvg').innerHTML = (`<path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>`);

    setTimeout(() =>{
        document.getElementById('actionCopy').ariaLabel = "Copy";
        document.getElementById('actionCopy').classList.remove("active");
        document.getElementById('actionCopySvg').innerHTML = (`<path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path>`);    
    },2500);
};

// MIME Type List : https://developer.mozilla.org/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
function download_file(file_name, data) {
    const blob = new Blob([data], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.download = file_name;
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
};

function editor_code_download() {
    var dt = new Date();
    var dy = dt.toLocaleString();
    var du = dy.replace(/\s+/g,"");
    var du = du.replace(/:/g,'');
    var du = du.replace(/(\\|\/)/g,'');
    var file_name_d = ('webmanifest');
    download_file(file_name_d,　code_view_data);
};