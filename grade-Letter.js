const studentData = [
    {
        firstNama: 'Asem',
        lastName: 'Isma',
        email: 'ffffff@gamil.com',
        phone: 88888888,
        country: "Germany",
        subject: "Math",
        score: 97,
        favFood: ["LAsagna", "Pasta"]
    },
    {
        firstNama: 'Nastya',
        lastName: 'Kalinina',
        email: 'fkkkkkkkkkk@gamil.com',
        phone: 887777777,
        country: "Kazakhzatan",
        subject: "Russian",
        score: 90,
        favFood: ["Manty", "Plov"]
    },
    {
        firstNama: 'Satan',
        lastName: 'Izma',
        email: 'llllllll@gamil.com',
        phone: 3333333333,
        country: "Belgium",
        subject: "Art",
        score: 60,
        favFood: ["Souls", "TearsOfVirgin"]
    },
    {
        firstNama: 'Asmadeus',
        lastName: 'Sasca',
        email: 'love363666@hellmail.com',
        phone: 696969696969,
        country: "Hell",
        subject: "love",
        score: 69,
        favFood: ["Apple", "Cinnabon"]
    },
    {
        firstNama: 'Lucifer',
        lastName: 'Hell',
        email: 'heellnah@hellmail.com',
        phone: 666666,
        country: "Hell",
        subject: "Torture",
        score: 99,
        favFood: ["Blood", "TearsOfVirgin"]
    },
    {
        firstNama: 'Devil',
        lastName: 'Hell',
        email: 'holysheet@hellmail.com',
        phone: 333666666,
        country: "Hell",
        subject: "Sinister",
        score: 99,
        favFood: ["Misery", "Mercy"]
    }
]


for (let i = 0; i < studentData.length; i++){
    let checkScore;

    if (studentData[i].score>=90){
        console.log(studentData[i].firstNama + "grade = A");
    } else if (studentData[i].score>=70){
        console.log(studentData[i].firstNama + "grade = B");
    } else if (studentData[i].score>=50){
        console.log(studentData[i].firstNama + "grade = C");
    } else {
        console.log(studentData[i].firstNama + "grade = F");
    }
}