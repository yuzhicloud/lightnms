import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './access-controller.reducer';

export const AccessControllerDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const accessControllerEntity = useAppSelector(state => state.accessController.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="accessControllerDetailsHeading">
          <Translate contentKey="lightnmsApp.accessController.detail.title">AccessController</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.id}</dd>
          <dt>
            <span id="nedn">
              <Translate contentKey="lightnmsApp.accessController.nedn">Nedn</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.nedn}</dd>
          <dt>
            <span id="neid">
              <Translate contentKey="lightnmsApp.accessController.neid">Neid</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.neid}</dd>
          <dt>
            <span id="aliasname">
              <Translate contentKey="lightnmsApp.accessController.aliasname">Aliasname</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.aliasname}</dd>
          <dt>
            <span id="nename">
              <Translate contentKey="lightnmsApp.accessController.nename">Nename</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.nename}</dd>
          <dt>
            <span id="necategory">
              <Translate contentKey="lightnmsApp.accessController.necategory">Necategory</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.necategory}</dd>
          <dt>
            <span id="netype">
              <Translate contentKey="lightnmsApp.accessController.netype">Netype</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.netype}</dd>
          <dt>
            <span id="nevendorname">
              <Translate contentKey="lightnmsApp.accessController.nevendorname">Nevendorname</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.nevendorname}</dd>
          <dt>
            <span id="neesn">
              <Translate contentKey="lightnmsApp.accessController.neesn">Neesn</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.neesn}</dd>
          <dt>
            <span id="neip">
              <Translate contentKey="lightnmsApp.accessController.neip">Neip</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.neip}</dd>
          <dt>
            <span id="nemac">
              <Translate contentKey="lightnmsApp.accessController.nemac">Nemac</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.nemac}</dd>
          <dt>
            <span id="version">
              <Translate contentKey="lightnmsApp.accessController.version">Version</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.version}</dd>
          <dt>
            <span id="nestate">
              <Translate contentKey="lightnmsApp.accessController.nestate">Nestate</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.nestate}</dd>
          <dt>
            <span id="createtime">
              <Translate contentKey="lightnmsApp.accessController.createtime">Createtime</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.createtime}</dd>
          <dt>
            <span id="neiptype">
              <Translate contentKey="lightnmsApp.accessController.neiptype">Neiptype</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.neiptype}</dd>
          <dt>
            <span id="subnet">
              <Translate contentKey="lightnmsApp.accessController.subnet">Subnet</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.subnet}</dd>
          <dt>
            <span id="neosversion">
              <Translate contentKey="lightnmsApp.accessController.neosversion">Neosversion</Translate>
            </span>
          </dt>
          <dd>{accessControllerEntity.neosversion}</dd>
        </dl>
        <Button tag={Link} to="/access-controller" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/access-controller/${accessControllerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default AccessControllerDetail;
