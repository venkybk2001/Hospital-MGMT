package com.springboot.jpa.mvc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.jpa.mvc.entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

}
