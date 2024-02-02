import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './province.reducer';

export const ProvinceDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const provinceEntity = useAppSelector(state => state.province.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="provinceDetailsHeading">
          <Translate contentKey="lightnmsApp.province.detail.title">Province</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{provinceEntity.id}</dd>
          <dt>
            <span id="provinceCode">
              <Translate contentKey="lightnmsApp.province.provinceCode">Province Code</Translate>
            </span>
          </dt>
          <dd>{provinceEntity.provinceCode}</dd>
          <dt>
            <span id="provinceName">
              <Translate contentKey="lightnmsApp.province.provinceName">Province Name</Translate>
            </span>
          </dt>
          <dd>{provinceEntity.provinceName}</dd>
        </dl>
        <Button tag={Link} to="/province" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/province/${provinceEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProvinceDetail;
