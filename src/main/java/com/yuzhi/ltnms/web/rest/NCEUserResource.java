package com.yuzhi.ltnms.web.rest;

import com.yuzhi.ltnms.service.NCEInfoService;
import com.yuzhi.ltnms.service.dto.NCEInfoDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class NCEUserResource {

    @PostMapping("/ncelogin")
    public ResponseEntity<String> handleNce(@RequestBody NCEInfoDTO nceInfoDTO) {
        // 处理接收到的数据
        // ...
        NCEInfoService nceInfoService = new NCEInfoService();
        String rest = nceInfoService.handleNceLogin(nceInfoDTO.getNceUserName(), nceInfoDTO.getNceUserPwd());

        // 响应
        return ResponseEntity.ok("success");
    }
}
