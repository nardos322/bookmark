

const b = [1,8,3,7]

//const a = 6

function agregarAConjunto(a, b){
   
    if(b.includes(a)){
        return b
    }else{
         
        return b.push(a)
    }    
}


Set.prototype.union = function union(conjunto){
    let conjuntoUnion = new Set();
    for(const e of this){
        conjuntoUnion.add(e)
    }

    for(let e of conjunto){
        conjuntoUnion.add(e);
    }
    return conjuntoUnion
}


let A = new Set([1])

let B = new Set([4,5,6])

//console.log(A.union(B))

let conjunto1 = [1,9,8,8]
let conjunto2 = [5,1,3]


Array.prototype.saludar = function(){
    return 'holaa'
} 





function union2(conjunto1, conjunto2){
    for(let i of conjunto1){
        /*
        if(!(conjunto2.includes(i))){
            conjunto2.push(i)
            
        }*/
        console.log(conjunto2.includes(i))
    }
    //return conjunto2
   
    
}    




//console.log(union2(conjunto1,conjunto2))
//console.log(conjunto2)

//console.log(union2(conjunto1, conjunto2))


let cadena;

function contarCaracteres(palabra){
    if(!(typeof palabra === 'string') ){

        return 'el parametro tiene que ser un string'

    }else{
        return `La cadena "${palabra}" tiene ${palabra.length} caracteres`
    }

}


//console.log(!(typeof [1,2] === 'string'))

//console.log(contarCaracteres())


const x = [1,2,3]

x.splice(2, 0, 5)

console.log(x)