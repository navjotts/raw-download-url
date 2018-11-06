function convertURL() {
    document.getElementById('downloadlink-input').value = getDownloadURL(document.getElementById('sharelink-input').value);
    document.getElementById('result-div').className = 'text-input';
}

function getDownloadURL(shareURL) {
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