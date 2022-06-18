package com.scs.nemo.review;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ReviewRepository  extends JpaRepository<Review,Long> {

    @Query("UPDATE Review r set r.isHelpful= ?2 where r.id= ?1")
    public void updateIsHelpful(Long id , Integer incrment);
}
