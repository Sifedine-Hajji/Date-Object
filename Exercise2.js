let birth = new Date(1997,11,06)
let today = new Date(2020,11,26)

function dayDiff(birth, today)
{
  birth = birth.getTime() / 86400000;
  today = today.getTime() / 86400000;
  return new Number(today - birth).toFixed(0);
  
}
 console.log(dayDiff(birth, today) + ' nombre de jours ')
