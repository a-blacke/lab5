

function User (id, firstName, surName, email) {
    this.firstName = firstName
    this.surName = surName
    this.email = email
    this.id = id
    this.introduce = () => {
        console.log(`Hi, my name is ${this.firstName}.`)
    }
}

const tom = new User(1, "Tom", "Sawyer", "tom@gmail.com")

tom.introduce();

