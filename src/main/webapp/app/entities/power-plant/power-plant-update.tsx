import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAccessPointGroup } from 'app/shared/model/access-point-group.model';
import { getEntities as getAccessPointGroups } from 'app/entities/access-point-group/access-point-group.reducer';
import { IProvince } from 'app/shared/model/province.model';
import { getEntities as getProvinces } from 'app/entities/province/province.reducer';
import { IPowerPlant } from 'app/shared/model/power-plant.model';
import { getEntity, updateEntity, createEntity, reset } from './power-plant.reducer';

export const PowerPlantUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const accessPointGroups = useAppSelector(state => state.accessPointGroup.entities);
  const provinces = useAppSelector(state => state.province.entities);
  const powerPlantEntity = useAppSelector(state => state.powerPlant.entity);
  const loading = useAppSelector(state => state.powerPlant.loading);
  const updating = useAppSelector(state => state.powerPlant.updating);
  const updateSuccess = useAppSelector(state => state.powerPlant.updateSuccess);

  const handleClose = () => {
    navigate('/power-plant');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getAccessPointGroups({}));
    dispatch(getProvinces({}));
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

    const entity = {
      ...powerPlantEntity,
      ...values,
      powerPlant: provinces.find(it => it.id.toString() === values.powerPlant.toString()),
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
          ...powerPlantEntity,
          powerPlant: powerPlantEntity?.powerPlant?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="lightnmsApp.powerPlant.home.createOrEditLabel" data-cy="PowerPlantCreateUpdateHeading">
            <Translate contentKey="lightnmsApp.powerPlant.home.createOrEditLabel">Create or edit a PowerPlant</Translate>
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
                  id="power-plant-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('lightnmsApp.powerPlant.powerPlantName')}
                id="power-plant-powerPlantName"
                name="powerPlantName"
                data-cy="powerPlantName"
                type="text"
              />
              <ValidatedField
                id="power-plant-powerPlant"
                name="powerPlant"
                data-cy="powerPlant"
                label={translate('lightnmsApp.powerPlant.powerPlant')}
                type="select"
              >
                <option value="" key="0" />
                {provinces
                  ? provinces.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/power-plant" replace color="info">
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

export default PowerPlantUpdate;
