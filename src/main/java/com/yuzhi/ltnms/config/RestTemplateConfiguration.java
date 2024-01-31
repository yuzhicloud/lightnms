package com.yuzhi.ltnms.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RestTemplateConfiguration {

    @Bean
    public RestTemplate restTemplate() {
        // 在这里进行任何需要的自定义配置
        return new RestTemplate();
    }
}
