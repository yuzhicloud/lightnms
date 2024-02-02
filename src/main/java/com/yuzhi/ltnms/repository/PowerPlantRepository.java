package com.yuzhi.ltnms.repository;

import com.yuzhi.ltnms.domain.PowerPlant;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the PowerPlant entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PowerPlantRepository extends JpaRepository<PowerPlant, Long> {}
