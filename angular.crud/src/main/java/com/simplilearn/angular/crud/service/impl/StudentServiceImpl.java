package com.simplilearn.angular.crud.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.angular.crud.model.Student;
import com.simplilearn.angular.crud.repository.StudentRepository;
import com.simplilearn.angular.crud.service.StudentService;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public void saveStudent(Student student) {
		
		studentRepository.save(student);
	}

	@Override
	public List<Student> getStudents() {
		List<Student> studentList = new ArrayList<>();
		studentRepository.findAll().forEach(student -> studentList.add(student));
		return studentList;
	}

	@Override
	public boolean deleteStudent(Student student) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Student> getStudentByID(Student student) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean updateStudent(Student student) {
		// TODO Auto-generated method stub
		return false;
	}

}
