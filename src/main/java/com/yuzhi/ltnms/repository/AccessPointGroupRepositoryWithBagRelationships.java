package com.yuzhi.ltnms.repository;

import com.yuzhi.ltnms.domain.AccessPointGroup;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;

public interface AccessPointGroupRepositoryWithBagRelationships {
    Optional<AccessPointGroup> fetchBagRelationships(Optional<AccessPointGroup> accessPointGroup);

    List<AccessPointGroup> fetchBagRelationships(List<AccessPointGroup> accessPointGroups);

    Page<AccessPointGroup> fetchBagRelationships(Page<AccessPointGroup> accessPointGroups);
}
