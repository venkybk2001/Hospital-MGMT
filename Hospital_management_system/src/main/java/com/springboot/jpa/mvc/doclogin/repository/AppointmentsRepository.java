package com.springboot.jpa.mvc.doclogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.jpa.mvc.entity.Appointment;

@Repository
public interface AppointmentsRepository extends JpaRepository<Appointment, Long>{

}
