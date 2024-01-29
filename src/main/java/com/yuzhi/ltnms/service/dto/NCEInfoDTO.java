package com.yuzhi.ltnms.service.dto;

public class NCEInfoDTO {

    private static final long serialVersionUID = 1L;
    private String nceUserName;
    private String nceUserPwd;
    private String nceIP;
    private String ncePort;

    public NCEInfoDTO(String nceUserName, String nceUserPwd, String nceIP, String ncePort) {
        this.nceUserName = nceUserName;
        this.nceUserPwd = nceUserPwd;
        this.nceIP = nceIP;
        this.ncePort = ncePort;
    }

    public String getNceUserName() {
        return nceUserName;
    }

    public void setNceUserName(String nceUserName) {
        this.nceUserName = nceUserName;
    }

    public String getNceUserPwd() {
        return nceUserPwd;
    }

    public void setNceUserPwd(String nceUserPwd) {
        this.nceUserPwd = nceUserPwd;
    }

    public String getNceIP() {
        return nceIP;
    }

    public void setNceIP(String nceIP) {
        this.nceIP = nceIP;
    }

    public String getNcePort() {
        return ncePort;
    }

    public void setNcePort(String ncePort) {
        this.ncePort = ncePort;
    }

    @Override
    public String toString() {
        return (
            "NCEUserDTO{" +
            "nceUserName='" +
            nceUserName +
            '\'' +
            ", nceUserPwd='" +
            nceUserPwd +
            '\'' +
            ", nceIP='" +
            nceIP +
            '\'' +
            ", ncePort='" +
            ncePort +
            '\'' +
            '}'
        );
    }
}
