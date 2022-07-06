package com.scs.nemo.fileUpload;


import javax.servlet.http.HttpServletRequest;

import com.scs.nemo.auth.JwtUtil;
import com.scs.nemo.fileUpload.dto.FileResponseDto;
import com.scs.nemo.user.User;
import com.scs.nemo.user.UserRepository;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping(value = "/api/v1")
public class FileController {

    private final DatabaseFileService fileStorageService;

    public FileController(DatabaseFileService fileStorageService) {
        this.fileStorageService = fileStorageService;
    }

    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        // Load file as Resource
        DatabaseFile databaseFile = fileStorageService.getFile(fileName);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(databaseFile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + databaseFile.getFileName() + "\"")
                .body(new ByteArrayResource(databaseFile.getData()));
    }

    @PostMapping("/uploadFile")
    public FileResponseDto uploadFile(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        DatabaseFile fileName = fileStorageService.storeFile(file, request);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/v1/downloadFile/")
                .path(fileName.getFileName())
                .toUriString();
        return new FileResponseDto(fileName.getFileName(), fileDownloadUri,
                file.getContentType(), file.getSize());
    }
}