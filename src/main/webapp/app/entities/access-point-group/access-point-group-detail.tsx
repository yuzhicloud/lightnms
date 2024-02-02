import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './access-point-group.reducer';

export const AccessPointGroupDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const accessPointGroupEntity = useAppSelector(state => state.accessPointGroup.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="accessPointGroupDetailsHeading">
          <Translate contentKey="lightnmsApp.accessPointGroup.detail.title">AccessPointGroup</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{accessPointGroupEntity.id}</dd>
          <dt>
            <span id="apgId">
              <Translate contentKey="lightnmsApp.accessPointGroup.apgId">Apg Id</Translate>
            </span>
          </dt>
          <dd>{accessPointGroupEntity.apgId}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="lightnmsApp.accessPointGroup.name">Name</Translate>
            </span>
          </dt>
          <dd>{accessPointGroupEntity.name}</dd>
          <dt>
            <Translate contentKey="lightnmsApp.accessPointGroup.powerPlant">Power Plant</Translate>
          </dt>
          <dd>{accessPointGroupEntity.powerPlant ? accessPointGroupEntity.powerPlant.id : ''}</dd>
          <dt>
            <Translate contentKey="lightnmsApp.accessPointGroup.accessPoint">Access Point</Translate>
          </dt>
          <dd>
            {accessPointGroupEntity.accessPoints
              ? accessPointGroupEntity.accessPoints.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {accessPointGroupEntity.accessPoints && i === accessPointGroupEntity.accessPoints.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>
            <Translate contentKey="lightnmsApp.accessPointGroup.controller">Controller</Translate>
          </dt>
          <dd>{accessPointGroupEntity.controller ? accessPointGroupEntity.controller.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/access-point-group" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/access-point-group/${accessPointGroupEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default AccessPointGroupDetail;
