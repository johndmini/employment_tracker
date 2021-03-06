const express = require('express');
const employeeRouter = express.Router();
const Employee = require('../models/employeeModel');

// Get All Employees
employeeRouter.get('/', (req, res, next) => {
  Employee.find((err, employees) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(employees);
  });
});

// Post One Employee
employeeRouter.post('/', (req, res, next) => {
  const newEmployee = new Employee(req.body);
  newEmployee.save((err, employee) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(employee);
  });
});

// Search for Employee(s) by lastname
employeeRouter.get('/search/lastname', (req, res) => {
  const { lastname } = req.query;
  const pattern = new RegExp(lastname);
  Employee.find(
    { lastName: { $regex: pattern, $options: 'i' } },
    (err, employees) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(employees);
    }
  );
});

// Search for Employee(s) by Department
employeeRouter.get('/search/department', (req, res) => {
  const { department } = req.query;
  const pattern = new RegExp(department);
  Employee.find(
    { department: { $regex: pattern, $options: 'i' } },
    (err, employees) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(employees);
    }
  );
});

// Find Employee by id
employeeRouter.get('/targetemployee/:employeeId', (req, res, next) => {
  Employee.find({ _id: req.params.employeeId }, (err, employee) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(employee);
  });
});

// Update one employee by id
employeeRouter.put('/targetemployee/:employeeId', (req, res, next) => {
  Employee.findOneAndUpdate(
    { _id: req.params.employeeId },
    req.body,
    { new: true },
    (err, updatedEmployee) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(updatedEmployee);
    }
  );
});

// Delete One Employee
employeeRouter.delete('/targetemployee/:employeeId', (req, res) => {
  Employee.findOneAndDelete(
    { _id: req.params.employeeId },
    (err, deletedEmployee) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(deletedEmployee);
    }
  );
});

module.exports = employeeRouter;
