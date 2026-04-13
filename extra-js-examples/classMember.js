class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.borrow = []
    }
    borrowBook(title) {
        this.borrow.push(title)
    }
    checkBorrows() {
        return this.borrow
    }
}

const tom = new Member('Tom', 'Sawyer')
tom.borrowBook('Lord of Rings')
tom.borrowBook('Harry Potter')
const books = tom.checkBorrows()
console.table(books)