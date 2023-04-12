package com.example.motorvogn3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarController {

    @Autowired
    CarRepository repo;

    @PostMapping("/api")
    public void add (Registration registration){
        repo.addRegistrations(registration);
    }

    @GetMapping("/api/registrations")
    public List<Registration> getAllRegistrations(){
        return repo.getRegistrations();
    }

    @GetMapping("/api/cars")
    public List<Car> getAllCars(){
            return repo.getCars();
        }

    @DeleteMapping("/api")
    public void deleteAll(){
        repo.deleteCars();
    }
}
