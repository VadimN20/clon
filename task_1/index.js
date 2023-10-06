import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)


function decoded(enCoded, tranSlations) {
    const decodedNew = []
    const uIdTemp = []
    const len = enCoded.length;
    for(let i = 0; i < len; i++) {
        decodedNew[i] = enCoded[i]
        for(let key in enCoded[i]) {
            if (decodedNew[i][key] != null && (key != "groupId" && key != "ca" && key != "service" && key != "formatSize") && decodedNew[i][key] in tranSlations) {
                decodedNew[i][key] = tranSlations[decodedNew[i][key]]
            }
            else if (!(decodedNew[i][key] in tranSlations)) {
                //Здесь я не был уверен является ли null уникальным Id, если его нет в translations, но есть во многих значениях ключей 
                uIdTemp.push(decodedNew[i][key])
            }
        }
    }
    const uniqueId = Array.from(new Set(uIdTemp))
    
    return decodedNew, uniqueId
}

console.log(decoded(encoded, translations))
