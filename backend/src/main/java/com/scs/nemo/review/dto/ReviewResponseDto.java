package com.scs.nemo.review.dto;

import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReviewResponseDto
{
    private Long id;
    private String title;
    private String comment;
    private LocalDate date;
    private Integer rating;
    private Integer isHelpful;
}
