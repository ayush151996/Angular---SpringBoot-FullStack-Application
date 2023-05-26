package com.example.restfulservice.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.restfulservice.model.Record;

@Repository

public interface RecordRepository extends JpaRepository<Record, Long> {

}
