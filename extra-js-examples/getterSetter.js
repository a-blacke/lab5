// Getter examples

const member = {
    firstName: "Tom",
    surName: "Sawyer",
    get fullName() {
        return this.firstName + " " + this.surName
    }
}

console.log(member.fullName)

function Member(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

const m = new Member("Tom", "Sawyer")

Object.defineProperty(m, 'fullName', {
    get() {
        return this.firstName + " " + this.lastName
    }})

console.log(m.fullName)


// Setter examples

class Student {
    constructor() {
        this.courses = []
    }
    set studycourse(course) {
        this.courses.push(course)
    }
}

const Mike = new Student()
Mike.studycourse = 'Mobile Application Development'
Mike.studycourse = 'Software Engineering'
Mike.studycourse = "Advanced Programming"

console.table(Mike.courses)