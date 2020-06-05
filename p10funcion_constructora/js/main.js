var mentors= [
    {
name:"David",
age:23,
skills:[
        {
         javascript:10,
         css:8.5,
         jquery:9,
         node:9
        }
        ]
    },{
name:"Charles",
age:24,
skills:[
        {
         javascript:10,
         css:8,
         jquery:9,
         node:10
        }
        ]
    },{
name:"Michael",
age:22,
skills:[
        {
         javascript:10,
         css:8.5,
         jquery:10,
         node:8.5
        }
        ]
    },{
name:"Israel",
age:30,
skills:[
        {
         javascript:9.5,
         css:10,
         jquery:9,
         node:8
        }
        ]
    }
]

function Mentor(name, age, skills){
this.name = name;
this.age = age;
this.skills = skills;

this.average = (skills[0].javascript + skills[0].css + skills[0].jquery + skills[0].node)/4

}

const mentorObjects = mentors.map((item) => {
    var {name, age, skills} = item;
    return new Mentor(name, age, skills);
});

console.log(mentorObjects)


/*
crear una funcion constructura para la clase Mentor, que reciba nombre, edad, y notas del mentor;
crear un objeto de la clase Mentor por cada entrada del array "mentors";
a cada mentor agregarle un método que me permita saber el promedio de sus skills;
*/