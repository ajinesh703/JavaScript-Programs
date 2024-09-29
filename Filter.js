const Kishan = [
   {subject: 'Science', score: 95},
   {subject: 'Math', score: 97},
   {subject: 'History', score: 98},
   {subject: 'Hindi', score: 99},
   {subject: 'English', score: 92}

]

const scoresGreaterNinty = Kishan.filter((score) => score.score > 90)

console.log(scoresGreaterNinty)
