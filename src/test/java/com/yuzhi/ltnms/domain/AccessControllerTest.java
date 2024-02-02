package com.yuzhi.ltnms.domain;

import static com.yuzhi.ltnms.domain.AccessControllerTestSamples.*;
import static com.yuzhi.ltnms.domain.AccessPointGroupTestSamples.*;
import static com.yuzhi.ltnms.domain.AccessPointTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.yuzhi.ltnms.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class AccessControllerTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(AccessController.class);
        AccessController accessController1 = getAccessControllerSample1();
        AccessController accessController2 = new AccessController();
        assertThat(accessController1).isNotEqualTo(accessController2);

        accessController2.setId(accessController1.getId());
        assertThat(accessController1).isEqualTo(accessController2);

        accessController2 = getAccessControllerSample2();
        assertThat(accessController1).isNotEqualTo(accessController2);
    }

    @Test
    void accessPointTest() throws Exception {
        AccessController accessController = getAccessControllerRandomSampleGenerator();
        AccessPoint accessPointBack = getAccessPointRandomSampleGenerator();

        accessController.addAccessPoint(accessPointBack);
        assertThat(accessController.getAccessPoints()).containsOnly(accessPointBack);
        assertThat(accessPointBack.getController()).isEqualTo(accessController);

        accessController.removeAccessPoint(accessPointBack);
        assertThat(accessController.getAccessPoints()).doesNotContain(accessPointBack);
        assertThat(accessPointBack.getController()).isNull();

        accessController.accessPoints(new HashSet<>(Set.of(accessPointBack)));
        assertThat(accessController.getAccessPoints()).containsOnly(accessPointBack);
        assertThat(accessPointBack.getController()).isEqualTo(accessController);

        accessController.setAccessPoints(new HashSet<>());
        assertThat(accessController.getAccessPoints()).doesNotContain(accessPointBack);
        assertThat(accessPointBack.getController()).isNull();
    }

    @Test
    void accessPointGroupTest() throws Exception {
        AccessController accessController = getAccessControllerRandomSampleGenerator();
        AccessPointGroup accessPointGroupBack = getAccessPointGroupRandomSampleGenerator();

        accessController.addAccessPointGroup(accessPointGroupBack);
        assertThat(accessController.getAccessPointGroups()).containsOnly(accessPointGroupBack);
        assertThat(accessPointGroupBack.getController()).isEqualTo(accessController);

        accessController.removeAccessPointGroup(accessPointGroupBack);
        assertThat(accessController.getAccessPointGroups()).doesNotContain(accessPointGroupBack);
        assertThat(accessPointGroupBack.getController()).isNull();

        accessController.accessPointGroups(new HashSet<>(Set.of(accessPointGroupBack)));
        assertThat(accessController.getAccessPointGroups()).containsOnly(accessPointGroupBack);
        assertThat(accessPointGroupBack.getController()).isEqualTo(accessController);

        accessController.setAccessPointGroups(new HashSet<>());
        assertThat(accessController.getAccessPointGroups()).doesNotContain(accessPointGroupBack);
        assertThat(accessPointGroupBack.getController()).isNull();
    }
}
