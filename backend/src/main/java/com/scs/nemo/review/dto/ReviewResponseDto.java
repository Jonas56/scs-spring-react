package com.scs.nemo.review.dto;

import com.scs.nemo.user.dto.UserResponseDto;
import lombok.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReviewResponseDto {
    private Long id;
    private String title;
    private String comment;
    private LocalDate date;
    private Integer rating;
    private Integer isHelpful;
    UserResponseDto user;
}
