const HOSTURL = 'http://localhost:5042';

function showFilePicker(inputId) {
    var input = document.getElementById('file-input');
    input.click();
}

function showFilePicked() {
    var files = document.getElementById('file-input').files;
    if (files.length == 1) {
        document.getElementById('upload-label').innerHTML = files[0].name;
    }
}

function convertURL() {
    document.getElementById('downloadlink-input').value = downloadURL(document.getElementById('sharelink-input').value);
    document.getElementById('result-div').className = 'text-input';
}

function downloadURL(shareURL) {
    if (shareURL.includes('dropbox.com')) {
        splits = shareURL.split('?')
        return splits.slice(0, splits.length-1).join('') + '?raw=1'
    }

    if (shareURL.includes('drive.google.com')) {
        if (shareURL.includes('usp=sharing')) {
            splits = shareURL.split('/')
            var fileID = splits[splits.length-2]
            return 'https://drive.google.com/uc?export=download&id=' + fileID
        }
        else if (shareURL.includes('open?')) {
            return shareURL.replace('open?', 'uc?export=download&')
        }
    }

    return shareURL;
}