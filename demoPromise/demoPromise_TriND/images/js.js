function theF() {
    this.count++;
}

theF.count = 0;
console.log(theF.count);

for(var i = 0; i<5; i++) {
    console.log(i);
    theF(); // increase theF.count, sure
}

console.log('And now count is', theF.count);
// 0 <-- wtf?