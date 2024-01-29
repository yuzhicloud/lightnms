package com.yuzhi.ltnms.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "application.nce")
public class NceInfoConfiguraton {

    private String ipaddr;
    private String port;
    private String nbiusername;
    private String nbipassword;

    public String getIpaddr() {
        return ipaddr;
    }

    public void setIpaddr(String ipaddr) {
        this.ipaddr = ipaddr;
    }

    public String getPort() {
        return port;
    }

    public void setPort(String port) {
        this.port = port;
    }

    public String getNbiusername() {
        return nbiusername;
    }

    public void setNbiusername(String nbiusername) {
        this.nbiusername = nbiusername;
    }

    public String getNbipassword() {
        return nbipassword;
    }

    public void setNbipassword(String nbipassword) {
        this.nbipassword = nbipassword;
    }

    @Override
    public String toString() {
        return (
            "NceInfoConfiguraton{" +
            "ipaddr='" +
            ipaddr +
            '\'' +
            ", port='" +
            port +
            '\'' +
            ", nbiusername='" +
            nbiusername +
            '\'' +
            ", nbipassword='" +
            nbipassword +
            '\'' +
            '}'
        );
    }
}
