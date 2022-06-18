package com.scs.nemo.review;

import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImp implements IReviewService{
    private final ReviewRepository  reviewRepository;

    public ReviewServiceImp(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }


    public Review save(Review review){
         return reviewRepository.save(review);
    }


     public void delete(Long id){
        reviewRepository.deleteById(id);

    }

    public void updateIsHelpful(Long id , Integer incrment)
    {
        incrment ++ ;
        reviewRepository.updateIsHelpful( id ,  incrment);
    }

}
