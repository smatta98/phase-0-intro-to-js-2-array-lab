let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push('Ralph')
}

function destructivelyPrependCat(name){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
   let catsNew = [...cats,'Broom']
   return catsNew
}

function prependCat(name){
    let newCats = ['Arnold',...cats]
    return newCats
}

function removeLastCat(){
    let twoCats = cats.slice(0,2)
    return twoCats
}

function removeFirstCat(){
    let twoCats = cats.slice(1,3)
    return twoCats
}