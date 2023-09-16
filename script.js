const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  console.log(data);
}
printDeveloper();

// 2. Add Data
function addData() {
  const name = prompt("Enter the name: ");
  const age = parseInt(prompt("Enter the age: "));
  const profession = prompt("Enter the profession: ");
  if (name && !isNaN(age) && profession) {
    const newData = { name, age, profession };
    data.push(newData);
    console.log("Data added", newData);
  } else {
    console.log("Invalid Input.Data not added.");
  }
}

// 3. Remove Admins
function removeAdmin() {
    const filteredData= data.filter(person => person.profession !== "admin");
    console.log("Admins removed:", filteredData);
}

// 4. Concatenate Array
function concatenateArray() {
    const array1= [0, 1, 2];
    const array2= [3, 4, 5];
    const concatArray= array1.concat(array2);
    console.log("Array concatenated:", concatArray);
    
}

// 5. Average Age
function averageAge() {
    let totalAge=0;
    for(let i=0; i<data.length; i++){
        totalAge += data[i].age
    }
    const averageAge = totalAge / data.length;
    console.log("Average Age: " + averageAge);
}
averageAge();

// 6. Age Check
function checkAgeAbove25() {
    const isAbove25= data.some(person => person.age > 25);
    if(isAbove25){
        console.log("At least one person is above age of 25.");
    }
    else{
        console.log("No person is above the age of 25.");
    }
}

// 7. Unique Professions
function uniqueProfessions() {
    const uniqueProfessions = {}
    for(let i=0; i<data.length; i++) {
        const profession= data[i].profession;
        uniqueProfessions[profession]=true;
    }
    const uniqueProfessionsArr=Object.keys(uniqueProfessions);
    console.log("Unique Professions: ",uniqueProfessionsArr);
}

// 8. Sort by Age
function sortByAge() {
    data.sort((a,b) => a.age - b.age);
    console.log("Sorted by Age Ascending", data);
}

// 9. Update Profession
function updateJohnsProfession() {
    for(let i=0; i<data.length; i++) {
        if(data[i].name==="John"){
            data[i].profession ="manager";
            break;
        }
    }
    console.log("John updated profession", data);
}

// 10. Profession Count
function getTotalProfessions() {
    let developerCount= 0;
    let adminCount=0;
    for(let i=0; i<data.length; i++) {
        const profession = data[i].profession;
        if(profession ==="developer"){
            developerCount++;
        }
        else if(profession ==="admin"){
            adminCount++;
        }
    }
    console.log("Total Developers", developerCount);
    console.log("Total Admins", adminCount);
}
