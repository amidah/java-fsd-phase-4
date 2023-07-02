package com.simplilearn.angular.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.angular.crud.model.Student;
import com.simplilearn.angular.crud.service.StudentService;

@RestController  
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value="/api")  
public class StudentController {

	
	@Autowired
	private StudentService studentService;
	
	@PostMapping("save-student")
	public void saveStudent(@RequestBody Student student) {
		studentService.saveStudent(student);
	}
	
	@GetMapping("students-list")
	public List<Student> getAllStudents(){
		return studentService.getStudents();
	}
	
}
