function listOfNames(arrayOfPeople) {
  //create variable to access <div id="content">
  const content = document.querySelector("#content");
  //go through each item
  arrayOfPeople.forEach(person => {
    //variable to creat <h1> element
    const personName = document.createElement("h1");
    //retrieve value of name key
    personName.innerText = person.name;
    //add to webpage
    content.appendChild(personName);

    //same process for job title
    const jobTitle = document.createElement("h2");
    jobTitle.innerText = person.job;
    content.appendChild(jobTitle);
  })
};

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
