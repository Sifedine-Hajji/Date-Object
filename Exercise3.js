let now = new Date();
let hoursadded = 80000;
function addhours(hoursadded) {
    now.setTime(now.getTime() + (hoursadded * 1000 * 60 * 60))
    return now
}
console.log(addhours(hoursadded));