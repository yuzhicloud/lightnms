import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './access-point.reducer';

export const AccessPointDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const accessPointEntity = useAppSelector(state => state.accessPoint.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="accessPointDetailsHeading">
          <Translate contentKey="lightnmsApp.accessPoint.detail.title">AccessPoint</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.id}</dd>
          <dt>
            <span id="nedn">
              <Translate contentKey="lightnmsApp.accessPoint.nedn">Nedn</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.nedn}</dd>
          <dt>
            <span id="neid">
              <Translate contentKey="lightnmsApp.accessPoint.neid">Neid</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.neid}</dd>
          <dt>
            <span id="aliasname">
              <Translate contentKey="lightnmsApp.accessPoint.aliasname">Aliasname</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.aliasname}</dd>
          <dt>
            <span id="nename">
              <Translate contentKey="lightnmsApp.accessPoint.nename">Nename</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.nename}</dd>
          <dt>
            <span id="necategory">
              <Translate contentKey="lightnmsApp.accessPoint.necategory">Necategory</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.necategory}</dd>
          <dt>
            <span id="netype">
              <Translate contentKey="lightnmsApp.accessPoint.netype">Netype</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.netype}</dd>
          <dt>
            <span id="nevendorname">
              <Translate contentKey="lightnmsApp.accessPoint.nevendorname">Nevendorname</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.nevendorname}</dd>
          <dt>
            <span id="neesn">
              <Translate contentKey="lightnmsApp.accessPoint.neesn">Neesn</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.neesn}</dd>
          <dt>
            <span id="neip">
              <Translate contentKey="lightnmsApp.accessPoint.neip">Neip</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.neip}</dd>
          <dt>
            <span id="nemac">
              <Translate contentKey="lightnmsApp.accessPoint.nemac">Nemac</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.nemac}</dd>
          <dt>
            <span id="version">
              <Translate contentKey="lightnmsApp.accessPoint.version">Version</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.version}</dd>
          <dt>
            <span id="nestate">
              <Translate contentKey="lightnmsApp.accessPoint.nestate">Nestate</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.nestate}</dd>
          <dt>
            <span id="createtime">
              <Translate contentKey="lightnmsApp.accessPoint.createtime">Createtime</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.createtime}</dd>
          <dt>
            <span id="neiptype">
              <Translate contentKey="lightnmsApp.accessPoint.neiptype">Neiptype</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.neiptype}</dd>
          <dt>
            <span id="subnet">
              <Translate contentKey="lightnmsApp.accessPoint.subnet">Subnet</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.subnet}</dd>
          <dt>
            <span id="neosversion">
              <Translate contentKey="lightnmsApp.accessPoint.neosversion">Neosversion</Translate>
            </span>
          </dt>
          <dd>{accessPointEntity.neosversion}</dd>
          <dt>
            <Translate contentKey="lightnmsApp.accessPoint.controller">Controller</Translate>
          </dt>
          <dd>{accessPointEntity.controller ? accessPointEntity.controller.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/access-point" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/access-point/${accessPointEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default AccessPointDetail;
