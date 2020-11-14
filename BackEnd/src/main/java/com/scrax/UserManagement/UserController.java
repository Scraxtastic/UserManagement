package com.scrax.UserManagement;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @GetMapping("/test")
    public ResponseEntity<String> test(@RequestBody String data){
        return ResponseEntity.ok("OK");
    }
}
