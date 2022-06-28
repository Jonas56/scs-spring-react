package com.scs.nemo.fileUpload;


import java.util.Arrays;
        import java.util.List;
        import java.util.stream.Collectors;

        import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
        import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

        import com.scs.nemo.fileUpload.DatabaseFile;
        import com.scs.nemo.fileUpload.Response;
        import com.scs.nemo.fileUpload.DatabaseFileService;

@RestController
@RequestMapping(value = "/api/v1")
public class FileUploadController {

    @Autowired
    private DatabaseFileService fileStorageService;

    @PostMapping("/uploadFile")
    public Response uploadFile(@RequestParam("file") MultipartFile file) {
        DatabaseFile fileName = fileStorageService.storeFile(file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/v1/downloadFile/")
                .path(fileName.getFileName())
                .toUriString();
        System.out.println(fileDownloadUri);
        return new Response(fileName.getFileName(), fileDownloadUri,
                file.getContentType(), file.getSize());
    }

    @PostMapping("/uploadMultipleFiles")
    public List<Response> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
        return Arrays.asList(files)
                .stream()
                .map(file -> uploadFile(file))
                .collect(Collectors.toList());
    }
}