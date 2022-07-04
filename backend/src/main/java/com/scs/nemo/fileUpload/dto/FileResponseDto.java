package com.scs.nemo.fileUpload.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FileResponseDto {
    private String fileName;
    private String fileDownloadUri;
    private String fileType;
    private long size;
}