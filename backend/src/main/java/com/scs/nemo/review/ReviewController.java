package com.scs.nemo.review;

import com.scs.nemo.review.dto.ReviewRateRequestDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1")
public class ReviewController {

    private final IReviewService reviewService;

    public ReviewController(IReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PutMapping("/reviews/{id}/helpful")
    public void updateIsHelpful(@PathVariable Long id, @RequestBody ReviewRateRequestDto helpful) {
        reviewService.updateIsHelpful(id, helpful);
    }

    @PutMapping("/reviews/{id}")
    public void update(@PathVariable Long id, @RequestBody Review review) {
        reviewService.update(id, review);
    }

    @DeleteMapping("/reviews/{id}")
    public void delete(@PathVariable Long id) {
        reviewService.delete(id);
    }
}
