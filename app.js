// write code here
const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
const result = array.filter(item => item.startsWith('E'));
console.log(result); // ['Elephant', 'Eagle']

const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
const result = array.filter(item => item === item.toUpperCase());
console.log(result); // ['APPLE', 'PEACH']


const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];
const result = array.filter(item => item.toLowerCase().includes('buri'));
console.log(result); // ['Chonburi', 'Buriram', 'Saraburi']
