const fs = require('fs')
const readline = require('readline')
const process = require('process')
// console.log('testing',process.argv)
const file = fs.readFileSync(`./${process.argv[3]}`,'utf8')


if (process.argv[2] === '-l'){
    console.log (file.split('\n').length)
}

if (process.argv[2] === '-w'){
    let wordCount = 0;
    // console.log(file.split('\n').join('\r').split('\r'))
    file.split('\n').join('\r').split('\r').forEach(line=>{
        let stringLine = line.split(' ')
        stringLine.forEach(word=>{
            console.log(word,word.length)

            if(word.length && word!== ' ' && word!=='r') wordCount+=1
            console.log(wordCount)
        })
    })
    console.log(wordCount)

}

if(process.argv[2]==='-w'){

}
