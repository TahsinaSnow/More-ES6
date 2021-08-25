class TeamMember{
    name;
    address = 'BD';
    constructor(name, address){
         this.name = name;
         this.address = address;
    }

}

class Support extends TeamMember{
     groupSupportTime;
     constructor(name, address, time){
         super(name, address);
         this.groupSupportTime = time;
     }
    startSession(){
        console.log(this.name,'start a support session');
    }
}

//student care
class StudentCare extends TeamMember{
    designation = 'Care web dev';
    buildARoutine(){
        console.log(this.name, 'Build a routine for', student);
    }
}


//neptune
class Neptunedev{
    codeEditor;
    designation = 'Neptune App dev';
    constructor(editor){
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name, 'release app version', version);
    }
}


const aamir =  new Support('Amir Khan', 'BD', 11);
const salman = new Support('Solaiman Khan','Japan',10);

const sharukh = new Support('SRK Khan', 'India', 5);
const akshay = new Support('Akshay Kumar', 'London', 12);


const alia = new StudentCare('Alia Bhatt', 'Mumbai');
console.log(alia);

const ash = new Neptunedev('Ashriya','mumbai', 'android studio' );

console.log(ash.name);
ash.releaseApp('1.4.5');


//aamir.startSession();
//salman.startSession();

// console.log(aamir);
// console.log(salman);