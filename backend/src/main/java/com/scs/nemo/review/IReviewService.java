package com.scs.nemo.review;

import com.scs.nemo.review.dto.ReviewRateRequestDto;

public interface IReviewService {

    void delete(Long reviewId);

    void updateIsHelpful(Long reviewId, ReviewRateRequestDto helpful);

    void update(Long id, Review review);
}
