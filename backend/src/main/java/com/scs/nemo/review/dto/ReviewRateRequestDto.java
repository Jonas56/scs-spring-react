package com.scs.nemo.review.dto;

import lombok.*;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReviewRateRequestDto {
    @NotEmpty
    @Min(-1)
    @Max(1)
    private Integer helpful;
}
