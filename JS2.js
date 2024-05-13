/*
// TYPE
let a = 50
let b = 'hemanth'
let c = '76'
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c)) 

              
 // PROMPT

 let B = prompt('how many movie tickets do you need?')
 console.log(Number(B)*200)

let a = prompt('enter a number')
console.log(Number(a)+10)


 // STRING - GROUP OF CHARACTERS (ANYTHING UNDER QUOTES)
 str1 = 'My Hero Acaddemia'
 str2 = ' Season 1 to Season 5'
 console.log(str1+str2)
 console.log(str1.concat(str2))  // if we call something using a dot (.concat) it is INVOKING A METHOD
 
          ----------------------------------------------------------------------------------------------------

 // STRING PROPERTY : LENGTH

 let lengthVal = ' All data are available on the server '
 console.log(lengthVal.length)                           // No need of (),since length is a property , specifies how many char are present


            ----------------------------------------------------------------------------------------------------
 
 // CHARAT

let charVal = 'No information available'
let res3 = charVal.charAt(3)                           // (3): index - finds specific character , .charAt() - to find single character in a string
let res3 = charVal.charAt(8)
console.log(res3)
 
           ------------------------------------------------------------------------------------------------------
// STRING CHAR ACCESS

str = ' hemanth is a timid guy'
console.log(str[2])                                     // char at 2 'e'
                                                        // it makes string look like array but they are not
console.log(str.length - 1)                             // to find last digit - always use length - 1 , Since index is length - 1

            ----------------------------------------------------------------------------------------------------------

 // PARTIONING STRING / EXTRACTING STRING
   
   slice(start,end)
   substring(start,end)
   substr(start,length)


// SLICE

let value = 'My hero Academia' 
         //  0123456789012345   (index value = +ve)
         //  6543210987654321   (index value = -ve)
 res = value.slice(16)          // if given length() , it returns EMPTY STRING
 res = value.slice(12)          // starts from index 12
 res = value.slice(-12)         // starts from index -12
 res = value.slice(4,11)        // slices anything before index value 4 & ends before index value 11
 res = value.slice(11,4)        // if the index start  > index end , then it returns 'EMPTY STRING'
 res = value.slice(-1,-4)       // if the index start  > index end , then it returns 'EMPTY STRING'
 res = value.slice(-4,-1)       
 res = value.slice(-4,5)        // starts at -4 but 5 is before -4 thus 'EMPTY STRING'
 res = value.slice(5,-4)  
 console.log(res)

           ----------------------------------------------------------------------------------------------------

// SUBSTRING

let value1 = 'My hero Academia' 
         //  0123456789012345   (index value = +ve)
         //  6543210987654321   (index value = -ve)
 res1 = value1.substring(16)        // if given length() , it returns 'EMPTY STRING'
 console.log(res1)
 res1 = value1.substring(12)        // starts from index 12
 res1 = value1.substring(-12)       // It considers '-ve' as '0' . So starts from index 0
 res1 = value1.substring(4,11)
 res1 = value1.substring(11,4)      // If index start > index end , then it swaps 
 res1 = value1.substring(-1,-4)     // If both indexstart & indexend are '-ve' it starts at 0 & ends at 0,then it returns empty string
 res1 = value1.substring(-4,-1)     // If both indexstart & indexend are '-ve' it starts at 0 & ends at 0,then it returns empty string
 res1 = value1.substring(-4,5)      // starts at index '0' and ends at index'5'
 res1 = value1.substring(5,-4)      // starts at index '0' and ends at index'5'
 console.log(res1)
     
            --------------------------------------------------------------------------------------------------------
// SUBSTR

let value2 = 'My hero Academia' 
           //  0123456789012345   (index value = +ve)
           //  6543210987654321   (index value = -ve)
res2 = value2.substr(4,10)                             // 4 : index value  10 : No. of characters from index 4
console.log(res2)            

          ----------------------------------------------------------------------------------------------------------
// SPLIT

let splitVal = ' The morning is upon us '        
resVal = splitVal.split()                           // split() - returns original string 
resVal = splitVal.split(' ')                        // split(' ') - split happens on the space , provides separate character
                                                         Ex : 'The'|'morning'|'is'|'upon'|'us' 
resVal = splitVal.split('')                         // split('') - empty string . returns each & every characters separated         
resVal = splitVal.split('o')                        // Splits at 'o' thus 'o' gets removed 
resVal = splitVal.split('o','2')                    // returns 2 splits /first 2 splits  , if limit is 0 then it returns empty string
                      //(separator, limit)
console.log(resVal) 
          
          -----------------------------------------------------------------------------------------------------------

// UPPERCASE  &  LOWERCASE

let val = 'THE MOUNT EVEREST'
resVal = val.toLocaleLowerCase()
console.log(resVal)

let val2 = 'the himalayan range'
resVal2 = val2.toLocaleUpperCase()
console.log(resVal2)

           ----------------------------------------------------------------------------------------------------------

// REPLACE & REPLACEALL

let repVal = 'all items are avaliable with all parts'    
res = repVal.replace('all','No')                         //.replace : replace only one ''all' at the start
res = repVal.replaceAll('all','No')                      //.replaceAll : replaces  each and every 'all' in the sentence
res = repVal.replace(' ','')
res = repVal.replaceAll(' ','')
console.log(res)

// REPLACE

let str = 'the Red house is so red in colour like blood red'
//let resStr = str.replace('red','blue')
//let resStr = str.replace(/red/g,'blue')
let resStr = str.replace(red/gi,'blue')
console.log(resStr)

// REPLACE ALL

let str = 'the Red house is so red in colour like blood red'
let resStr = str.replaceAll('red','blue')
//let resStr = str.replaceAll(/red/g,'blue')
//let resStr = str.replaceAll(/red/gi,'blue')
console.log(resStr)


            ----------------------------------------------------------------------------------------------------------
// TRIM - TRIMSTART & TRIMEND

 let trimValue = '  There are no other possible outcomes  '
 console.log(trimValue.trim())                          //.trim() - removes space at the start & end
 console.log(trimValue.trimStart())                     // removes space at start
 console.log(trimValue.trimEnd())                       // removes space at end

            ----------------------------------------------------------------------------------------------------------
 
// PAD START & PAD END

let padValue = 'abcd'
let padRes = padValue.padStart(7)           //Pads space from start until TL 7
let padRes = padValue.padStart(9,'foo')     //Padst sring 'foo', until TL 7 (foofoabcd)
let padRes = padValue.padStart(6,'foo')     //Pads string 'foo' until TL 6 (foabcd)
let padRes = padValue.padStart(2)           // TL < Original String so returns 'OS'
console.log(padRes)


let padValue = 'abcd'
let padRes = padValue.padEnd(7)             //Pads space from End until TL 7
let padRes1 = padValue.padEnd(9,'foo')      //Padst sring 'foo', until TL 7 (abcdfoofo)
let padRes2 = padValue.padEnd(6,'foo')      //Pads string 'foo' until TL 6 (abcdfo)
let padRes3 = padValue.padEnd(2)            // TL < Original String so returns 'OS'
console.log(padRes)
 
             --------------------------------------------------------------------------------------------------------

// REPEAT 

let rep = 'Attack on titan is peak fiction '
let repRes = rep.repeat(10)
console.log(repRes)


             --------------------------------------------------------------------------------------------------------

// SEARCH METHODS

// INDEXOF 

let indValue = "my Hero Academia my favourite hero comic"
let indRes = indValue.indexOf('hero')    // return(30):Case sensitive
let indRes1 = indValue.indexOf('my',3)   // return(17):starts after index '3' , searches from left to right
let indRes2 = indValue.indexOf('')       // return(0) 
let indRes3 = indValue.indexOf('My')     // return(-1) since it is case sensitive and there is no 'My'
console.log(indRes3)

// LASTINDEXOF

let indValue = "my Hero Academia my favourite hero comic"
let indRes = indValue.lastIndexOf('hero')      // return(30)
let indRes1 = indValue.lastIndexOf('my',25)    // return(17) position(25) so searches from right to left
let indRes2 = indValue.lastIndexOf('')         // return(40) 
let indRes3 = indValue.lastIndexOf('My')       // return(-1) since it is case sensitive and there is no 'My'
console.log(indRes)
 
              ------------------------------------------------------------------------------------------------------

// SEARCH

let value = 'Hajime No Ippo : The Fighting'
let resValue = value.search('No')
console.log(resValue)

               -------------------------------------------------------------------------------------------------------

// STARTS WITH

let startVal = "cats are the best!"
let startRes = startVal.startsWith('cats')
let startRes1 = startVal.startsWith('Cats')
let startRes2 = startVal.startsWith('are')
let startRes3 = startVal.startsWith('are',5)
let startRes4 = startVal.startsWith('are',6)
console.log(startRes4)

// ENDS WITH

let EndVal = "cats are the best!"
let EndRes = EndVal.endsWith('best!')
let EndRes1 = EndVal.endsWith('best')
let EndRes2 = EndVal.endsWith('the')
let EndRes3 = EndVal.endsWith('best!',18)
let EndRes4 = EndVal.endsWith('bes',16)
console.log(EndRes3)

                -----------------------------------------------------------------------------------------------------

// MATCH

let matchVal = "The rain in SPAIN stays mainly in the plain"
let matchRes = matchVal.match('ain')           // returns array, matching  string (first)
let matchRes1 = matchVal.match('via')         // returns 'NULL' as there is no match string
let matchRes2 = matchVal.match(/ain/)         // regx (regular expression) - returns array, matching  string (first)
let matchRes3 = matchVal.match(/ain/g)        // reg.exp - global flag : returns all matching string without properties .
let matchRes4 = matchVal.match(/ain/gi)       // reg.exp - g insensitive flag : returns matching string including case sensitive without properties .
console.log(matchRes4)

// MATCH ALL

let matchAllVal = "The rain in SPAIN stays mainly in the plain"
let matchAllRes = matchAllVal.matchAll('ain')    // returns array, all matching string along with properties (acts like g-regx)
let matchAllRes1 = matchAllVal.matchAll(/ain/gi) // returns array, all matching string including case insensitive along with properties 
let matchAllRes2 = matchAllVal.matchAll('din')   // returns empty array
let matchAllRes3 = matchAllVal.matchAll(/ain/g)
console.log(...matchAllRes3)

                  -------------------------------------------------------------------------------------------------------



// touppercase specific index
// let name = 'alwin'
// let res = name.charAt(0).toUpperCase() + name.slice(1)
// console.log(res)

// let name = 'dinesh'

// let res = name.charAt(0).toUpperCase() + name.charAt(1) + name.charAt(2) + name.charAt(3).toUpperCase() + name.slice(4)
// console.log(res)

// let name = 'dinesh'

// let res = name.charAt(0).toUpperCase() +name.slice(1,3) + name.charAt(3).toUpperCase() + name.slice(4,6)
// console.log(res)

*/

