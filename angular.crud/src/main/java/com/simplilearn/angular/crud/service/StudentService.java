package com.simplilearn.angular.crud.service;

import java.util.List;

import com.simplilearn.angular.crud.model.Student;

public interface StudentService {

	public void saveStudent(Student student);  
    public List<Student> getStudents();  
    public boolean deleteStudent(Student student);  
    public List<Student> getStudentByID(Student student);  
    public boolean updateStudent(Student student); 
}
