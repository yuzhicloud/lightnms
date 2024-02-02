package com.yuzhi.ltnms.domain;

import static com.yuzhi.ltnms.domain.AccessControllerTestSamples.*;
import static com.yuzhi.ltnms.domain.AccessPointGroupTestSamples.*;
import static com.yuzhi.ltnms.domain.AccessPointTestSamples.*;
import static com.yuzhi.ltnms.domain.PowerPlantTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.yuzhi.ltnms.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class AccessPointGroupTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(AccessPointGroup.class);
        AccessPointGroup accessPointGroup1 = getAccessPointGroupSample1();
        AccessPointGroup accessPointGroup2 = new AccessPointGroup();
        assertThat(accessPointGroup1).isNotEqualTo(accessPointGroup2);

        accessPointGroup2.setId(accessPointGroup1.getId());
        assertThat(accessPointGroup1).isEqualTo(accessPointGroup2);

        accessPointGroup2 = getAccessPointGroupSample2();
        assertThat(accessPointGroup1).isNotEqualTo(accessPointGroup2);
    }

    @Test
    void powerPlantTest() throws Exception {
        AccessPointGroup accessPointGroup = getAccessPointGroupRandomSampleGenerator();
        PowerPlant powerPlantBack = getPowerPlantRandomSampleGenerator();

        accessPointGroup.setPowerPlant(powerPlantBack);
        assertThat(accessPointGroup.getPowerPlant()).isEqualTo(powerPlantBack);

        accessPointGroup.powerPlant(null);
        assertThat(accessPointGroup.getPowerPlant()).isNull();
    }

    @Test
    void accessPointTest() throws Exception {
        AccessPointGroup accessPointGroup = getAccessPointGroupRandomSampleGenerator();
        AccessPoint accessPointBack = getAccessPointRandomSampleGenerator();

        accessPointGroup.addAccessPoint(accessPointBack);
        assertThat(accessPointGroup.getAccessPoints()).containsOnly(accessPointBack);

        accessPointGroup.removeAccessPoint(accessPointBack);
        assertThat(accessPointGroup.getAccessPoints()).doesNotContain(accessPointBack);

        accessPointGroup.accessPoints(new HashSet<>(Set.of(accessPointBack)));
        assertThat(accessPointGroup.getAccessPoints()).containsOnly(accessPointBack);

        accessPointGroup.setAccessPoints(new HashSet<>());
        assertThat(accessPointGroup.getAccessPoints()).doesNotContain(accessPointBack);
    }

    @Test
    void controllerTest() throws Exception {
        AccessPointGroup accessPointGroup = getAccessPointGroupRandomSampleGenerator();
        AccessController accessControllerBack = getAccessControllerRandomSampleGenerator();

        accessPointGroup.setController(accessControllerBack);
        assertThat(accessPointGroup.getController()).isEqualTo(accessControllerBack);

        accessPointGroup.controller(null);
        assertThat(accessPointGroup.getController()).isNull();
    }
}
