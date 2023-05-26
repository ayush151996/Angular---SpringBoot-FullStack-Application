package com.example.restfulservice.controller;

import org.springframework.web.bind.annotation.GetMapping;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.restfulservice.model.Record;
import com.example.restfulservice.Repository.RecordRepository;
import com.example.exception.ResourceNotFoundException;

@RestController@CrossOrigin(origins = "http://localhost:5200")
@RequestMapping("/api/v1")
public class RecordController {
	@Autowired
    private RecordRepository recordRepository;
	
	@GetMapping("/record")
    public List<Record> getAllRecord() {
        return recordRepository.findAll();
    }
	
	@GetMapping("/record/{id}")
	public ResponseEntity<Record> getEmployeeById(@PathVariable(value = "id") Long productId)
	        throws ResourceNotFoundException {
		Record product = recordRepository.findById(productId)
	          .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + productId));
	        return ResponseEntity.ok().body(product);
	    }

	@PostMapping("/record")
    public Record createRecord(@Valid @RequestBody Record record) {
        return recordRepository.save(record);
    }
	@GetMapping("/")
	public String hello() {
		return "Hello World";
	}
	
	@PostMapping("/productcreate2")
	public String createRecord2(@RequestBody final Record record) {
		System.out.println(record);
		return "123456";
		
	}
}
