<script>
let CreatingGoogleAccount = [
{FirstName  :  " venkatesh"},
{LastName   : "d b"},
{ChooseUsername  : " jvt"},
{CreatePassword  : " balu"},
{ConfirmYourPassword : "balu"},
{Birthday  :"2-6-1986"},
{Gender    :" male"},
{Mobile    : 9900367097},
{Yourcurrentemailaddress   :" venkatesh.db@gmail.com"}];
//document.write(CreatingGoogleAccount)
document.write(CreatingGoogleAccount[0].FirstName,"<br>")
document.write(CreatingGoogleAccount[1].LastName,"<br>")
document.write(CreatingGoogleAccount[2].ChooseUsername,"<br>")
document.write(CreatingGoogleAccount[3].CreatePassword ,"<br>")
document.write(CreatingGoogleAccount.length,"<br>")
//document.write(CreatingGoogleAccount.[CreatingGoogleAccount.length-1])
CreatingGoogleAccount.pop({Yourcurrentemailaddress   :" venkatesh.db@gmail.com"})
document.write(CreatingGoogleAccount.length,"<br>")
CreatingGoogleAccount.push({Name   :"Mysterious"})
document.write(CreatingGoogleAccount.length,"<br>")
CreatingGoogleAccount.unshift({Name1   :"Mysterious2"})
document.write(CreatingGoogleAccount.length,"<br>")
CreatingGoogleAccount.shift({Name2   :"Mysterious3"})
document.write(CreatingGoogleAccount.length,"<br>")
//document.write(CreatingGoogleAccount.indexOf({ChooseUsername  : " jvt"}),"<br>")
//document.write(CreatingGoogleAccount.indexOf({Birthday  :"2-6-1986"}),"<br>")
document.write(Array.from({ChooseUsername  : " jvt"}),"<br>")

function password()
{ if (CreatingGoogleAccount[3].CreatePassword === CreatingGoogleAccount[4].ConfirmYourPassword)
{
return true
}
 return false
}
document.write(password())

/////////////////////////////////////////////////////////////////////////////////////////////////

console.log('lets do codings about arrays');
let marks = [34, 23, 24, 93 ,73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23,123,21, 'Orange');
// console.log(marks);
// console.log(mixed);
// console.log(fruits[1]);

// console.log(arr.length);
// console.log(Array.isArray('dfdf'));
arr[0] = 'chanki';
let arrelement = arr[0];
// console.log('element :', arrelement);
// console.log(arr);

let value = marks.indexOf(73);
// console.log(value)

// Mutating or Modifying arrays
// marks.push(3564);
// marks.unshift(1009);
// marks.pop()
// marks.shift()
// marks.splice(2, 3);
// marks.reverse()
let marks2 = [1, 2,3, 7]
marks = marks.concat(marks2);
// console.log(marks);

let myobj = {
    'first name': 'chanki', 
    channel: ' Army',
    isActive: true,
    marks: [1,5,3,6]
}

console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)
           






</script>
