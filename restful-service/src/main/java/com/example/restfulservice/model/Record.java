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
  private String description;
  private BigDecimal price;
  
  public String getId() {
	return id;
}
@Column(name = "id", nullable = false)
public void setId(String id) {
	this.id = id;
}

public String getDescription() {
	return description;
}

@Column(name = "description", nullable = false)
public void setDescription(String description) {
	this.description = description;
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
	return "Product [id=" + id + ", description=" + description + ", price=" + price + "]";
}

public Record(final String id,final String description,final BigDecimal price) {
	  this.id = id;
	  this.description = description;
	  this.price = price;
  }
  
}
