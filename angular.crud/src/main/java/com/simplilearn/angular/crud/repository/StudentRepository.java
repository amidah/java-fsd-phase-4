package com.simplilearn.angular.crud.repository;

import org.springframework.data.repository.CrudRepository;

import com.simplilearn.angular.crud.model.Student;


public interface StudentRepository extends CrudRepository<Student, Integer>{

}
