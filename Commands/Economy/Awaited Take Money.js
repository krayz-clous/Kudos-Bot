module.exports = [{
name:"takemoney",
type:"awaitedCommand",
code:`$setuservar[$tolowercase[$message[1]];$sub[$getuservar[$tolowercase[$message[1]];$authorID];$message[3]];$authorid]
$deletein[3s]
Took $getservervar[symb] **$message[3]** from **$usertag[$authorid]**
$onlyif[$hasrole[$authorid;$findrole[$message[2]]]==true;]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;Did not give the money to **$usertag[$authorid]**, since they are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$isbot[$authorid]==false;]`}]