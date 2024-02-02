package com.yuzhi.ltnms.web.rest;

import com.yuzhi.ltnms.domain.AccessPoint;
import com.yuzhi.ltnms.repository.AccessPointRepository;
import com.yuzhi.ltnms.service.AccessPointService;
import com.yuzhi.ltnms.web.rest.errors.BadRequestAlertException;
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
 * REST controller for managing {@link com.yuzhi.ltnms.domain.AccessPoint}.
 */
@RestController
@RequestMapping("/api/access-points")
public class AccessPointResource {

    private final Logger log = LoggerFactory.getLogger(AccessPointResource.class);

    private static final String ENTITY_NAME = "accessPoint";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AccessPointService accessPointService;

    private final AccessPointRepository accessPointRepository;

    public AccessPointResource(AccessPointService accessPointService, AccessPointRepository accessPointRepository) {
        this.accessPointService = accessPointService;
        this.accessPointRepository = accessPointRepository;
    }

    /**
     * {@code POST  /access-points} : Create a new accessPoint.
     *
     * @param accessPoint the accessPoint to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new accessPoint, or with status {@code 400 (Bad Request)} if the accessPoint has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<AccessPoint> createAccessPoint(@RequestBody AccessPoint accessPoint) throws URISyntaxException {
        log.debug("REST request to save AccessPoint : {}", accessPoint);
        if (accessPoint.getId() != null) {
            throw new BadRequestAlertException("A new accessPoint cannot already have an ID", ENTITY_NAME, "idexists");
        }
        AccessPoint result = accessPointService.save(accessPoint);
        return ResponseEntity
            .created(new URI("/api/access-points/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /access-points/:id} : Updates an existing accessPoint.
     *
     * @param id the id of the accessPoint to save.
     * @param accessPoint the accessPoint to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated accessPoint,
     * or with status {@code 400 (Bad Request)} if the accessPoint is not valid,
     * or with status {@code 500 (Internal Server Error)} if the accessPoint couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<AccessPoint> updateAccessPoint(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody AccessPoint accessPoint
    ) throws URISyntaxException {
        log.debug("REST request to update AccessPoint : {}, {}", id, accessPoint);
        if (accessPoint.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, accessPoint.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!accessPointRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        AccessPoint result = accessPointService.update(accessPoint);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, accessPoint.getId().toString()))
            .body(result);
    }

    /**
     * {@code PATCH  /access-points/:id} : Partial updates given fields of an existing accessPoint, field will ignore if it is null
     *
     * @param id the id of the accessPoint to save.
     * @param accessPoint the accessPoint to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated accessPoint,
     * or with status {@code 400 (Bad Request)} if the accessPoint is not valid,
     * or with status {@code 404 (Not Found)} if the accessPoint is not found,
     * or with status {@code 500 (Internal Server Error)} if the accessPoint couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<AccessPoint> partialUpdateAccessPoint(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody AccessPoint accessPoint
    ) throws URISyntaxException {
        log.debug("REST request to partial update AccessPoint partially : {}, {}", id, accessPoint);
        if (accessPoint.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, accessPoint.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!accessPointRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<AccessPoint> result = accessPointService.partialUpdate(accessPoint);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, accessPoint.getId().toString())
        );
    }

    /**
     * {@code GET  /access-points} : get all the accessPoints.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of accessPoints in body.
     */
    @GetMapping("")
    public ResponseEntity<List<AccessPoint>> getAllAccessPoints(@org.springdoc.core.annotations.ParameterObject Pageable pageable) {
        log.debug("REST request to get a page of AccessPoints");
        Page<AccessPoint> page = accessPointService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /access-points/:id} : get the "id" accessPoint.
     *
     * @param id the id of the accessPoint to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the accessPoint, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<AccessPoint> getAccessPoint(@PathVariable("id") Long id) {
        log.debug("REST request to get AccessPoint : {}", id);
        Optional<AccessPoint> accessPoint = accessPointService.findOne(id);
        return ResponseUtil.wrapOrNotFound(accessPoint);
    }

    /**
     * {@code DELETE  /access-points/:id} : delete the "id" accessPoint.
     *
     * @param id the id of the accessPoint to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccessPoint(@PathVariable("id") Long id) {
        log.debug("REST request to delete AccessPoint : {}", id);
        accessPointService.delete(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
