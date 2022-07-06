package com.scs.nemo.fileUpload;

import java.io.IOException;

import com.scs.nemo.auth.JwtUtil;
import com.scs.nemo.user.User;
import com.scs.nemo.user.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;

@Service
public class DatabaseFileService {

    private final DatabaseFileRepository dbFileRepository;
    private final UserRepository userRepository;

    public DatabaseFileService(DatabaseFileRepository dbFileRepository, UserRepository userRepository) {
        this.dbFileRepository = dbFileRepository;
        this.userRepository = userRepository;
    }

    public DatabaseFile storeFile(MultipartFile file, HttpServletRequest request) {
        String username = JwtUtil.extractUsernameFromRequest(request); // Get username from JWT
        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "User not found with username : " + username
                )
        ); // Get user from database by username

        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if (fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            DatabaseFile dbFile = new DatabaseFile(fileName, file.getContentType(), file.getBytes());

            DatabaseFile result = dbFileRepository.save(dbFile);
            user.setUserAvatarFile(result); // Set user avatar file to database
            String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/api/v1/downloadFile/")
                    .toUriString();

            user.setUserAvatar(fileDownloadUri + result.getId()); // Set user avatar to database
            userRepository.save(user); // Save user to database
            return result;
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }


    public DatabaseFile getFile(String fileId) {
        return dbFileRepository.findById(fileId)
                .orElseThrow(() -> new FileNotFoundException("File not found with id " + fileId));
    }
}


