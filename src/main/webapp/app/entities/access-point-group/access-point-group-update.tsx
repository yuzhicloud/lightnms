import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPowerPlant } from 'app/shared/model/power-plant.model';
import { getEntities as getPowerPlants } from 'app/entities/power-plant/power-plant.reducer';
import { IAccessPoint } from 'app/shared/model/access-point.model';
import { getEntities as getAccessPoints } from 'app/entities/access-point/access-point.reducer';
import { IAccessController } from 'app/shared/model/access-controller.model';
import { getEntities as getAccessControllers } from 'app/entities/access-controller/access-controller.reducer';
import { IAccessPointGroup } from 'app/shared/model/access-point-group.model';
import { getEntity, updateEntity, createEntity, reset } from './access-point-group.reducer';

export const AccessPointGroupUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const powerPlants = useAppSelector(state => state.powerPlant.entities);
  const accessPoints = useAppSelector(state => state.accessPoint.entities);
  const accessControllers = useAppSelector(state => state.accessController.entities);
  const accessPointGroupEntity = useAppSelector(state => state.accessPointGroup.entity);
  const loading = useAppSelector(state => state.accessPointGroup.loading);
  const updating = useAppSelector(state => state.accessPointGroup.updating);
  const updateSuccess = useAppSelector(state => state.accessPointGroup.updateSuccess);

  const handleClose = () => {
    navigate('/access-point-group' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getPowerPlants({}));
    dispatch(getAccessPoints({}));
    dispatch(getAccessControllers({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  // eslint-disable-next-line complexity
  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }
    if (values.apgId !== undefined && typeof values.apgId !== 'number') {
      values.apgId = Number(values.apgId);
    }

    const entity = {
      ...accessPointGroupEntity,
      ...values,
      accessPoints: mapIdList(values.accessPoints),
      powerPlant: powerPlants.find(it => it.id.toString() === values.powerPlant.toString()),
      controller: accessControllers.find(it => it.id.toString() === values.controller.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...accessPointGroupEntity,
          powerPlant: accessPointGroupEntity?.powerPlant?.id,
          accessPoints: accessPointGroupEntity?.accessPoints?.map(e => e.id.toString()),
          controller: accessPointGroupEntity?.controller?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="lightnmsApp.accessPointGroup.home.createOrEditLabel" data-cy="AccessPointGroupCreateUpdateHeading">
            <Translate contentKey="lightnmsApp.accessPointGroup.home.createOrEditLabel">Create or edit a AccessPointGroup</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="access-point-group-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('lightnmsApp.accessPointGroup.apgId')}
                id="access-point-group-apgId"
                name="apgId"
                data-cy="apgId"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPointGroup.name')}
                id="access-point-group-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                id="access-point-group-powerPlant"
                name="powerPlant"
                data-cy="powerPlant"
                label={translate('lightnmsApp.accessPointGroup.powerPlant')}
                type="select"
              >
                <option value="" key="0" />
                {powerPlants
                  ? powerPlants.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                label={translate('lightnmsApp.accessPointGroup.accessPoint')}
                id="access-point-group-accessPoint"
                data-cy="accessPoint"
                type="select"
                multiple
                name="accessPoints"
              >
                <option value="" key="0" />
                {accessPoints
                  ? accessPoints.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="access-point-group-controller"
                name="controller"
                data-cy="controller"
                label={translate('lightnmsApp.accessPointGroup.controller')}
                type="select"
              >
                <option value="" key="0" />
                {accessControllers
                  ? accessControllers.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/access-point-group" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AccessPointGroupUpdate;
