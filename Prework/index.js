//for loop from 99 to 1; 
    //for loop logs the song string
    //if i=1 then log "1 line of code in the file, 1 line of code"
//

for (var i = 99; i >= 0; i--) {
    if (i > 2) {
        console.log(i + " lines of code in the file, " + i + " lines of code; John strikes one out, clears it all out, " + (i - 1) + " lines of code in the file.")
    } else if (i === 2) {
        console.log(i + " lines of code in the file, " + i + " lines of code; John strikes one out, clears it all out, " + (i - 1) + " line of code in the file.")
    } else if (i === 1) {
        console.log(i + " line of code in the file, " + i + " line of code; John strikes one out, clears it all out, " + (i - 1) + " lines of code in the file.")
    } else if (i === 0) {
        console.log(i + " lines of code in the file, " + i + " lines of code; John's job here is done, it's time for some fun, " + i + " lines of code in the file.")
    }
}


