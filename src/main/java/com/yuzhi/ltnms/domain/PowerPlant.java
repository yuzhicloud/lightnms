package com.yuzhi.ltnms.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;

/**
 * A PowerPlant.
 */
@Entity
@Table(name = "power_plant")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class PowerPlant implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "power_plant_name")
    private String powerPlantName;

    @JsonIgnoreProperties(value = { "powerPlant", "accessPoints", "controller" }, allowSetters = true)
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "powerPlant")
    private AccessPointGroup accessPointGroup;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = { "provinces" }, allowSetters = true)
    private Province powerPlant;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public PowerPlant id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPowerPlantName() {
        return this.powerPlantName;
    }

    public PowerPlant powerPlantName(String powerPlantName) {
        this.setPowerPlantName(powerPlantName);
        return this;
    }

    public void setPowerPlantName(String powerPlantName) {
        this.powerPlantName = powerPlantName;
    }

    public AccessPointGroup getAccessPointGroup() {
        return this.accessPointGroup;
    }

    public void setAccessPointGroup(AccessPointGroup accessPointGroup) {
        if (this.accessPointGroup != null) {
            this.accessPointGroup.setPowerPlant(null);
        }
        if (accessPointGroup != null) {
            accessPointGroup.setPowerPlant(this);
        }
        this.accessPointGroup = accessPointGroup;
    }

    public PowerPlant accessPointGroup(AccessPointGroup accessPointGroup) {
        this.setAccessPointGroup(accessPointGroup);
        return this;
    }

    public Province getPowerPlant() {
        return this.powerPlant;
    }

    public void setPowerPlant(Province province) {
        this.powerPlant = province;
    }

    public PowerPlant powerPlant(Province province) {
        this.setPowerPlant(province);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PowerPlant)) {
            return false;
        }
        return getId() != null && getId().equals(((PowerPlant) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "PowerPlant{" +
            "id=" + getId() +
            ", powerPlantName='" + getPowerPlantName() + "'" +
            "}";
    }
}
