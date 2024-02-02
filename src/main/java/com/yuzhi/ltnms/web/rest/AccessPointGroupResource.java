package com.yuzhi.ltnms.web.rest;

import com.yuzhi.ltnms.domain.AccessPointGroup;
import com.yuzhi.ltnms.repository.AccessPointGroupRepository;
import com.yuzhi.ltnms.service.AccessPointGroupService;
import com.yuzhi.ltnms.web.rest.errors.BadRequestAlertException;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.yuzhi.ltnms.domain.AccessPointGroup}.
 */
@RestController
@RequestMapping("/api/access-point-groups")
public class AccessPointGroupResource {

    private final Logger log = LoggerFactory.getLogger(AccessPointGroupResource.class);

    private static final String ENTITY_NAME = "accessPointGroup";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AccessPointGroupService accessPointGroupService;

    private final AccessPointGroupRepository accessPointGroupRepository;

    public AccessPointGroupResource(
        AccessPointGroupService accessPointGroupService,
        AccessPointGroupRepository accessPointGroupRepository
    ) {
        this.accessPointGroupService = accessPointGroupService;
        this.accessPointGroupRepository = accessPointGroupRepository;
    }

    /**
     * {@code POST  /access-point-groups} : Create a new accessPointGroup.
     *
     * @param accessPointGroup the accessPointGroup to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new accessPointGroup, or with status {@code 400 (Bad Request)} if the accessPointGroup has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<AccessPointGroup> createAccessPointGroup(@Valid @RequestBody AccessPointGroup accessPointGroup)
        throws URISyntaxException {
        log.debug("REST request to save AccessPointGroup : {}", accessPointGroup);
        if (accessPointGroup.getId() != null) {
            throw new BadRequestAlertException("A new accessPointGroup cannot already have an ID", ENTITY_NAME, "idexists");
        }
        AccessPointGroup result = accessPointGroupService.save(accessPointGroup);
        return ResponseEntity
            .created(new URI("/api/access-point-groups/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /access-point-groups/:id} : Updates an existing accessPointGroup.
     *
     * @param id the id of the accessPointGroup to save.
     * @param accessPointGroup the accessPointGroup to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated accessPointGroup,
     * or with status {@code 400 (Bad Request)} if the accessPointGroup is not valid,
     * or with status {@code 500 (Internal Server Error)} if the accessPointGroup couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<AccessPointGroup> updateAccessPointGroup(
        @PathVariable(value = "id", required = false) final Long id,
        @Valid @RequestBody AccessPointGroup accessPointGroup
    ) throws URISyntaxException {
        log.debug("REST request to update AccessPointGroup : {}, {}", id, accessPointGroup);
        if (accessPointGroup.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, accessPointGroup.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!accessPointGroupRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        AccessPointGroup result = accessPointGroupService.update(accessPointGroup);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, accessPointGroup.getId().toString()))
            .body(result);
    }

    /**
     * {@code PATCH  /access-point-groups/:id} : Partial updates given fields of an existing accessPointGroup, field will ignore if it is null
     *
     * @param id the id of the accessPointGroup to save.
     * @param accessPointGroup the accessPointGroup to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated accessPointGroup,
     * or with status {@code 400 (Bad Request)} if the accessPointGroup is not valid,
     * or with status {@code 404 (Not Found)} if the accessPointGroup is not found,
     * or with status {@code 500 (Internal Server Error)} if the accessPointGroup couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<AccessPointGroup> partialUpdateAccessPointGroup(
        @PathVariable(value = "id", required = false) final Long id,
        @NotNull @RequestBody AccessPointGroup accessPointGroup
    ) throws URISyntaxException {
        log.debug("REST request to partial update AccessPointGroup partially : {}, {}", id, accessPointGroup);
        if (accessPointGroup.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, accessPointGroup.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!accessPointGroupRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<AccessPointGroup> result = accessPointGroupService.partialUpdate(accessPointGroup);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, accessPointGroup.getId().toString())
        );
    }

    /**
     * {@code GET  /access-point-groups} : get all the accessPointGroups.
     *
     * @param pageable the pagination information.
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of accessPointGroups in body.
     */
    @GetMapping("")
    public ResponseEntity<List<AccessPointGroup>> getAllAccessPointGroups(
        @org.springdoc.core.annotations.ParameterObject Pageable pageable,
        @RequestParam(name = "eagerload", required = false, defaultValue = "true") boolean eagerload
    ) {
        log.debug("REST request to get a page of AccessPointGroups");
        Page<AccessPointGroup> page;
        if (eagerload) {
            page = accessPointGroupService.findAllWithEagerRelationships(pageable);
        } else {
            page = accessPointGroupService.findAll(pageable);
        }
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /access-point-groups/:id} : get the "id" accessPointGroup.
     *
     * @param id the id of the accessPointGroup to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the accessPointGroup, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<AccessPointGroup> getAccessPointGroup(@PathVariable("id") Long id) {
        log.debug("REST request to get AccessPointGroup : {}", id);
        Optional<AccessPointGroup> accessPointGroup = accessPointGroupService.findOne(id);
        return ResponseUtil.wrapOrNotFound(accessPointGroup);
    }

    /**
     * {@code DELETE  /access-point-groups/:id} : delete the "id" accessPointGroup.
     *
     * @param id the id of the accessPointGroup to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccessPointGroup(@PathVariable("id") Long id) {
        log.debug("REST request to delete AccessPointGroup : {}", id);
        accessPointGroupService.delete(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
