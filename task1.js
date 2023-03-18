const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>30</age>
    <prof>teacher</prof>
  </student>
  <student1>
    <name lang="ru">
      <first>Petr</first>
      <second>Petrov</second>
    </name>
    <age>49</age>
    <prof>driver</prof>
  </student1>
</list>
`

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const student = xmlDOM.querySelector("student");
const name = student.querySelector("name");
const age = student.querySelector("age");
const prof = student.querySelector("prof");
const langAttr = name.getAttribute('lang');

const student1 = xmlDOM.querySelector("student1");
const name1 = student1.querySelector("name");
const age1 = student1.querySelector("age");
const prof1 = student1.querySelector("prof");
const langAttr1 = name.getAttribute('lang');

const result = {
  list: [
    {lang: langAttr, name:name.textContent, age:Number(age.textContent), prof:prof.textContent},
    {lang: langAttr1, name:name1.textContent, age:Number(age1.textContent), prof:prof1.textContent}
  ]
};

console.log('result', result);
