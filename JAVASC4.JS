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






</script>
