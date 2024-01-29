package com.yuzhi.ltnms.service;

import com.yuzhi.ltnms.config.NceInfoConfiguraton;
import com.yuzhi.ltnms.service.dto.NCEInfoDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class NCEInfoService {

    private final Logger log = LoggerFactory.getLogger(NCEInfoService.class);

    public void nceServiceInit() {
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

    public String handleNceLogin() {
        // 处理接收到的数据
        log.debug("REST request to connect to NEC ");

        return "Data received: ";
    }
}
