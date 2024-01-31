package com.yuzhi.ltnms.web.rest;

import com.yuzhi.ltnms.service.NCEInfoService;
import com.yuzhi.ltnms.service.dto.NCEInfoDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class NCEInfoResource {

    private final Logger log = LoggerFactory.getLogger(NCEInfoResource.class);

    private final NCEInfoService nceInfoService;

    @Autowired
    public NCEInfoResource(NCEInfoService nceInfoService) {
        this.nceInfoService = nceInfoService;
    }

    @PostMapping("/ncelogin")
    public ResponseEntity<String> handleNce(@RequestBody NCEInfoDTO nceInfoDTO) {
        // 处理接收到的数据
        // ...
        String rest = nceInfoService.handleNceLogin();

        // 响应
        return ResponseEntity.ok("success");
    }

    @GetMapping("/nceStation")
    public ResponseEntity<String> handleNceStation() {
        // 处理接收到的数据
        // ...
        String rest = nceInfoService.handleNceLogin();

        // 响应
        return ResponseEntity.ok("success");
    }

    @GetMapping("/nceGroups")
    public ResponseEntity<String> handleNceGroups() {
        // 处理接收到的数据
        // ...
        String rest = nceInfoService.handleNceLogin();

        // 响应
        return ResponseEntity.ok("success");
    }
}
