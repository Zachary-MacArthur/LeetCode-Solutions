//you're gicen strings jewels representing the type of stones that are jewels, and stones representing the stones you have. each character in stones is a type of stone you have. you want to know how many of the stones you have are also jewels.

// letters are case sensitive
//constraints: 1 or more less than 50, jewels and stones consist of only english letters., all the characters of jewels are unique 
// ex 1: input: jewels = "aA", stones = "aAAbbbbb"
// output: 3

// str => jewels list str => list stones (i have)
// return: how many of my stones are actually jewels => rock, diamond, rock, rock, emerald, emerald === 3 jewels
//taking 2 strings as params

function findJewels(jewels, stones){
    const map = {}
    let count = 0
    //confirm all the jewels - loop
    for (const jewel of jewel){
        map[jewel] = true
    }
    // compare all of my stones to see if jewels -
    for(const stone of stones){
        if( map[stone] ){
            count++
        }
    }
    return count
}

console.log(findjewels('aA', 'aAAbbbb'), '3')