export default string => string.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g,'')
                               .replace(/\s{2,}/g,' ')
                               .toLowerCase()
                               .split(' ')
