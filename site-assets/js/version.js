fetch("../../site-assets/manifest.json")
.then(response => {
    return response.json();
})
.then(jsondata => {
    let manifestJsonData = JSON.stringify(jsondata);
    manifestJsonData = JSON.parse(manifestJsonData);
    console.log(manifestJsonData);
    const versionManifestJsonData = (manifestJsonData.versions[0]);
    console.log(versionManifestJsonData);
    const dadas = JSON.stringify(versionManifestJsonData);
    console.log(dadas);
    //alert(datas);
});


const codeText = {
}