package com.scs.nemo.review;

import com.scs.nemo.review.dto.ReviewRateRequestDto;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ReviewServiceImp implements IReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewServiceImp(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public void delete(Long id) {
        reviewRepository.deleteById(id);
    }

    @Override
    public void updateIsHelpful(Long id, ReviewRateRequestDto helpful) {
        Review review = reviewRepository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "Review not found with id : " + id
                )
        );
        review.setIsHelpful(review.getIsHelpful() + helpful.getHelpful());
        reviewRepository.save(review);
    }

    @Override
    public void update(Long id, Review review) {
        Review reviewToUpdate = reviewRepository.findById(id)
                .orElseThrow(
                        () -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                                "Review not found with id : " + id
                        )
                );
        reviewToUpdate.setTitle(review.getTitle());
        reviewToUpdate.setComment(review.getComment());
        reviewToUpdate.setRating(review.getRating());
        reviewRepository.save(reviewToUpdate);
    }
}
