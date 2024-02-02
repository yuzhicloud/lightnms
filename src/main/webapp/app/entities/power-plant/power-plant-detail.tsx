import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './power-plant.reducer';

export const PowerPlantDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const powerPlantEntity = useAppSelector(state => state.powerPlant.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="powerPlantDetailsHeading">
          <Translate contentKey="lightnmsApp.powerPlant.detail.title">PowerPlant</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{powerPlantEntity.id}</dd>
          <dt>
            <span id="powerPlantId">
              <Translate contentKey="lightnmsApp.powerPlant.powerPlantId">Power Plant Id</Translate>
            </span>
          </dt>
          <dd>{powerPlantEntity.powerPlantId}</dd>
          <dt>
            <span id="powerPlantName">
              <Translate contentKey="lightnmsApp.powerPlant.powerPlantName">Power Plant Name</Translate>
            </span>
          </dt>
          <dd>{powerPlantEntity.powerPlantName}</dd>
          <dt>
            <Translate contentKey="lightnmsApp.powerPlant.powerPlant">Power Plant</Translate>
          </dt>
          <dd>{powerPlantEntity.powerPlant ? powerPlantEntity.powerPlant.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/power-plant" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/power-plant/${powerPlantEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default PowerPlantDetail;
