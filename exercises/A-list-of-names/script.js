function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach(person => {
    const personName = document.createElement("h1");
    personName.innerText = person.name;
    content.appendChild(personName);

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
