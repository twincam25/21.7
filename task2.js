const jsonString = `
{
  "name":"Vladimir",
  "age":36,
  "skills":["Javascript","HTML","CSS"],
  "salary":90000
}`

const data = JSON.parse(jsonString);

const result = {
  name: data.name,
  age: Number(data.age),
  skills: data.skills,
  salary: Number(data.salary)
};

console.log(result)