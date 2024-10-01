class student {
    firstName ='';
    lastName ='';
    phone ='';
    birthday ='';
    city ='';
    grades =[];



    getFullname() {
        return`${this.firstName} ${this.lastName}`
    }

getAge() {
const currentYear = new Date().getFullYear();
const studentYear = new Date(this.birthday).getFullYear();

return currentYear - studentYear

}
getAverageTest(){
    const sum = this.grades.reduce((res,num)=> res+= num,0);
return sum / this.grades.length;

}
getTestAmount() {
    return this.grades.length;
};
setCity(city) {
    this.city = city;
};
}
