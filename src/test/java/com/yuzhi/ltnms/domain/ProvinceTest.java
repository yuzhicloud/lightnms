package com.yuzhi.ltnms.domain;

import static com.yuzhi.ltnms.domain.PowerPlantTestSamples.*;
import static com.yuzhi.ltnms.domain.ProvinceTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.yuzhi.ltnms.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class ProvinceTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Province.class);
        Province province1 = getProvinceSample1();
        Province province2 = new Province();
        assertThat(province1).isNotEqualTo(province2);

        province2.setId(province1.getId());
        assertThat(province1).isEqualTo(province2);

        province2 = getProvinceSample2();
        assertThat(province1).isNotEqualTo(province2);
    }

    @Test
    void provinceTest() throws Exception {
        Province province = getProvinceRandomSampleGenerator();
        PowerPlant powerPlantBack = getPowerPlantRandomSampleGenerator();

        province.addProvince(powerPlantBack);
        assertThat(province.getProvinces()).containsOnly(powerPlantBack);
        assertThat(powerPlantBack.getPowerPlant()).isEqualTo(province);

        province.removeProvince(powerPlantBack);
        assertThat(province.getProvinces()).doesNotContain(powerPlantBack);
        assertThat(powerPlantBack.getPowerPlant()).isNull();

        province.provinces(new HashSet<>(Set.of(powerPlantBack)));
        assertThat(province.getProvinces()).containsOnly(powerPlantBack);
        assertThat(powerPlantBack.getPowerPlant()).isEqualTo(province);

        province.setProvinces(new HashSet<>());
        assertThat(province.getProvinces()).doesNotContain(powerPlantBack);
        assertThat(powerPlantBack.getPowerPlant()).isNull();
    }
}
