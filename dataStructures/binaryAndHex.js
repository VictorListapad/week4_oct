let symbols = ["🟥", "🟢"];

let combination_len1 = '🟥' // combination of length 1, 2 possibilities;
let combination_len2 = '🟢🟢' // combination of length 2;
let combination_len3 = '🟥🟢🟢' // combination of 3 where you have 2^3 possible combinations
// 2 is number of symbols and 3 represents the length of the combation 
`
  🟢🟢🟢, 
  🟥🟥🟥
  🟢🟢🟥, 🟢🟥🟢 🟥🟢🟢' // combination of length 3;
  🟥🟥🟢, 🟢🟥🟥,🟥🟢🟥'
`

let binary = ['1', '0'];

// just replace circles and squares with 1's and ceros;
// Binary is read from right to left;

//                  1 * (2^0) = 1; where ^0 is the index position
binary_len2 = '01' // 2^0 = 1


//             2^1 = 2;
binary_len2 = '10' // 2^2 combinations

//            2^1 + 2^0 = 3; 
binary_len2 = '11' // 2^2 combinations

//             2^2 = 4
binary_len3 = '100'

//            16 + 4 + 1 = 21
//  1 * (2^4) + 1 * (2^2) + 1 * (2^0) = 21 
binary_len5 = '10101'

// DECIMAL NUMBERS
// 0,1,2,3,4,5,6,7,8,9

// IN ASCII 
// a = 0110 0001
// b = 0110 0010

// 16 symbols
// HEX 0,1,2,3,5,6,7,8,9,A,B,C,D,E,F;

//         (16^1)  + 11 * (16^0)
//         10 * (16^1) +  11 * (16^0) 
//           160 + 11 = 171
hex_len2 = 'AB' 

//           15 * (16^2) + 15 * (16^1) + 15 * (16^0)
//         3840 + 240 + 15 = 4095; 

// hex_len3 = '#FF FF FF' => '#FFF'  == rgba(255,255,255);


