/* 
do
  statement
while (condition);
*/
let i = 0;
let result = '';

do {
    i += 1;
    result = result + ' ' + i;
} while (i < 5);

console.log(result);
