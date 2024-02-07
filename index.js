const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((sum, batteries)=> batteries + sum , 0)

// incomingStudents.reduce(function(showcases, student) { showcases[studentSorter.showcaseAssign(student)].push(student)}, allShowcases)


// incomingStudents.reduce(
//     (showcases, student)=>showcases[studentSorter.showcaseAssign(student)].push(student),allShowcases);