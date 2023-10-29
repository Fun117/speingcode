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
                        <label>Mode</label>
                        <select>
                            <option value="fullscreen">fullscreen</option>
                            <option value="standalone">standalone</option>
                            <option value="minimal-ui">minimal-ui</option>
                            <option value="browser">browser</option>
                            <option value="window-controls-overlay">window-controls-overlay</option>
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
                                <label>Mode</label>
                                <select>
                                    <option value="fullscreen">fullscreen</option>
                                    <option value="standalone">standalone</option>
                                    <option value="minimal-ui">minimal-ui</option>
                                    <option value="browser">browser</option>
                                    <option value="window-controls-overlay">window-controls-overlay</option>
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
                                    <label>Mode</label>
                                    <select>
                                        <option value="fullscreen">fullscreen</option>
                                        <option value="standalone">standalone</option>
                                        <option value="minimal-ui">minimal-ui</option>
                                        <option value="browser">browser</option>
                                        <option value="window-controls-overlay">window-controls-overlay</option>
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
                                <select>
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
                                <input type="url">
                            </div>
                        </div>
                        <div class="node string-node">
                            <div class="node-header">
                                <label>id</label>
                                <input list="related_applications_box_` + related_applications_box_count + `">
                                <datalist id="related_applications_box_` + related_applications_box_count + `">
                                    <option>null</option>
                                </datalist>
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
                                        <select>
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
                                        <input type="url">
                                    </div>
                                </div>
                                <div class="node string-node">
                                    <div class="node-header">
                                        <label>id</label>
                                        <input list="related_applications_box_` + related_applications_box_count + `">
                                        <datalist id="related_applications_box_` + related_applications_box_count + `">
                                            <option>null</option>
                                        </datalist>
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
                                            <select>
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
                                            <input type="url">
                                        </div>
                                    </div>
                                    <div class="node string-node">
                                        <div class="node-header">
                                            <label>id</label>
                                            <input list="related_applications_box_` + edit_related_applications_box_cnt + `">
                                            <datalist id="related_applications_box_` + edit_related_applications_box_cnt + `">
                                                <option>null</option>
                                            </datalist>
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