'use strict'

const { readFileSync } = require('fs')

class Employee {
  constructor (name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
  }

  promote(title, salary) {
    this.title = title
    this.salary = salary
  }

  static parseFromFilePath (path) {
    let result = JSON.parse(readFileSync(path))
    return new Employee(result.name, result.title, result.salary)
  }
}

module.exports = {
  Employee
}
