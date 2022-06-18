package com.scs.nemo.review.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReviewRequestDto {
    private String title;
    private String comment;
    private Double rating;
}
