const users = [
  {
    id: 1,
    firstname: "Alice",
    lastname: "Johnson",
    email: "alice.j@example.com",
    age: 22,
    city: "New York",
  },
  {
    id: 2,
    firstname: "Bob",
    lastname: "Williams",
    email: "bob.w@example.com",
    age: 30,
    city: "Los Angeles",
  },
  {
    id: 3,
    firstname: "Charlie",
    lastname: "Brown",
    email: "charlie.b@example.com",
    age: 30,
    city: "Chicago",
  },
  {
    id: 4,
    firstname: "Diana",
    lastname: "Miller",
    email: "diana.m@example.com",
    age: 28,
    city: "Houston",
  },
  {
    id: 5,
    firstname: "Ethan",
    lastname: "Davis",
    email: "ethan.d@example.com",
    age: 42,
    city: "Phoenix",
  },
  {
    id: 6,
    firstname: "Fiona",
    lastname: "Garcia",
    email: "fiona.g@example.com",
    age: 31,
    city: "Philadelphia",
  },
  {
    id: 7,
    firstname: "George",
    lastname: "Rodriguez",
    email: "george.r@example.com",
    age: 42,
    city: "San Antonio",
  },
  {
    id: 8,
    firstname: "Hannah",
    lastname: "Martinez",
    email: "hannah.m@example.com",
    age: 22,
    city: "San Diego",
  },
  {
    id: 9,
    firstname: "Ivan",
    lastname: "Hernandez",
    email: "ivan.h@example.com",
    age: 29,
    city: "Dallas",
  },
  {
    id: 10,
    firstname: "Jessica",
    lastname: "Lopez",
    email: "jessica.l@example.com",
    age: 22,
    city: "San Jose",
  },
];

// firstname and lastname - (list)

const fullName = users.map((user) => (user.firstname + " " +user.lastname));

console.log(fullName);


//Person's age and their count

const ageCount = users.reduce((acc, curr)=>{
    if(acc[curr.age]){
        acc[curr.age]++;
    }else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(ageCount);

//Filter person who's Age < 30 and map to get the firstname of each person

const personAgeLessThanThirty = users.filter((x)=>{
    return x.age <= 25;
}).map((x) => {
  return x.firstname;
})
console.log(personAgeLessThanThirty);

// using reduce 

const output = users.reduce((acc, curr)=>{
  if(curr.age < 25){
    acc.push(curr.firstname);
  } 
  return acc;
}, [])

console.log(output);