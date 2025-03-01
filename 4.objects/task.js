function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if ("marks" in this) {
    this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
    if ("marks" in this) {
        return this.marks.reduce((average, mark, index, array) => average + mark / array.length, 0);
      }
    return 0;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}