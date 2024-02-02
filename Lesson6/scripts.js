console.log("Tere!")

console.log("Minu nimi on...")

var x=0
let y=0;
const z=0;

console.log(x);
console.log(y);
console.log(z);

x=1;
y=1;
//z=1;

console.log(x);
console.log(y);
console.log(z);

// number vs string//
console.log(1+2);
console.log("1"+"2");

//tehete järjekord: enne sulgudes & */+-
console.log("1+1="+(x+y));

console.log(true);
console.log(false);

//If ehk küsime kas tehe on õige või väär
/*
Loogilised tehted:
! pöörata ümber meie vastus
== kas mõlemad osapooled on võrdsed
    == kas on võrdsed
    != kas EI ole võrdsed
> kas on suurem
    >= kas suurem või vürdne
< kas on väiksem
    <= kas väiksem või võrdne

Lisa
|| või
    üks vastustest peab olema JAH
    00 - 0
    01 - 1
    10 - 1
    11 - 1
&& jah
    üks vastustused peavad olema JAH
    00 - 0
    01 - 0
    10 - 0
    11 - 1

    kui kasvõi üks vastus on EI, siis on kogu vastus EI
*/

if(1==1) {
    //kui vastus on JAH/TRUE
    console.log("Jah 1==1");
}else {
    //Kui vastus on EI/FALSE
    console.log("Jah 1!=1");
}

if("Iris"=="Iris" || "Iris"=="ANNA") {
    console.log("Jah, see on Iris")
} else {
    console.log("Ei, see ei ole Iris")
}

if("Iris"=="Iris" && "Iris"=="ANNA") {
    console.log("Jah, see on Iris")
} else {
    console.log("Ei, see ei ole Iris")
}







