// Task 2 - create a user class
// that should accept name and company
// implement method getName() and setName()
// implement methods getCompany() and setCompany()
class User {
    // your implementation should be there
    constructor(name, company){
        this.name = name;
        this.company = company;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getCompany(){
        return this.company;
    }
    setCompany(company){
        this.company = company;
    }
}