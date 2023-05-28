package com.example.restfulservice.model;

import java.math.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")

public class Record {
  private String id;
  private String recordinglevel;
  private BigDecimal price;
  
  public String getId() {
	return id;
}
@Column(name = "id", nullable = false)
public void setId(String id) {
	this.id = id;
}

public String getrecordinglevel() {
	return recordinglevel;
}

@Column(name = "recordinglevel", nullable = false)
public void setrecordinglevel(String recordinglevel) {
	this.recordinglevel = recordinglevel;
}

public BigDecimal getPrice() {
	return price;
}

@Column(name = "price", nullable = false)
public void setPrice(BigDecimal price) {
	this.price = price;
}


  
  @Override
public String toString() {
	return "Product [id=" + id + ", recordinglevel=" + recordinglevel + ", price=" + price + "]";
}

public Record(final String id,final String recordinglevel,final BigDecimal price) {
	  this.id = id;
	  this.recordinglevel = recordinglevel;
	  this.price = price;
  }
  
}
