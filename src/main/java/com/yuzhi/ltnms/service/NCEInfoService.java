package com.yuzhi.ltnms.service;

import com.yuzhi.ltnms.config.NceInfoConfiguraton;
import com.yuzhi.ltnms.service.dto.NCEInfoDTO;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class NCEInfoService {

    private final Logger log = LoggerFactory.getLogger(NCEInfoService.class);

    private final RestTemplate restTemplate;

    public NCEInfoService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public void nceInfoInit() {
        NceInfoConfiguraton nceInfoConfiguraton = new NceInfoConfiguraton();
        NCEInfoDTO nceInfoDTO = new NCEInfoDTO(
            nceInfoConfiguraton.getNbiusername(),
            nceInfoConfiguraton.getNbipassword(),
            nceInfoConfiguraton.getIpaddr(),
            nceInfoConfiguraton.getPort()
        );
        //设置HTTPS忽略证书校验
        //设置HTTPS忽略证书校验

    }

    public String getToken(String host, String port, String userName, String password) {
        String url = "https://" + host + ":" + port + "/controller/v2/tokens";
        Map<String, String> reqPayload = new HashMap<>();
        reqPayload.put("userName", userName);
        reqPayload.put("password", password);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Map<String, String>> request = new HttpEntity<>(reqPayload, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
        // Handle response, extract token
        return ""; // Extracted token
    }

    public String handleNceLogin() {
        // 处理接收到的数据
        log.debug("REST request to connect to NEC ");

        return "Data received: ";
    }
}
