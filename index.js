// solution
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push('Ralph')
    return destructivelyAppendCat
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
    return destructivelyPrependCat
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return destructivelyRemoveLastCat
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return destructivelyRemoveFirstCat
}

function appendCat(name) {
    return [...cats, name];
  }

  function prependCat(name) {
    return [name, ...cats];
  }

  function removeLastCat() {
    return cats.slice(0, -1);
  }
  

  function removeFirstCat() {
    return cats.slice(1);
  }
  
