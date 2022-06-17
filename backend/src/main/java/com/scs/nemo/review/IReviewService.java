package com.scs.nemo.review;

public interface IReviewService {

    Review save(Review review);
    void delete(Long id);
    public void updateIsHelpful(Long id , Integer incrment);
        // Review update(Review review) :
}
