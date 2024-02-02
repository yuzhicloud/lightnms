import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAccessController } from 'app/shared/model/access-controller.model';
import { getEntities as getAccessControllers } from 'app/entities/access-controller/access-controller.reducer';
import { IAccessPointGroup } from 'app/shared/model/access-point-group.model';
import { getEntities as getAccessPointGroups } from 'app/entities/access-point-group/access-point-group.reducer';
import { IAccessPoint } from 'app/shared/model/access-point.model';
import { getEntity, updateEntity, createEntity, reset } from './access-point.reducer';

export const AccessPointUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const accessControllers = useAppSelector(state => state.accessController.entities);
  const accessPointGroups = useAppSelector(state => state.accessPointGroup.entities);
  const accessPointEntity = useAppSelector(state => state.accessPoint.entity);
  const loading = useAppSelector(state => state.accessPoint.loading);
  const updating = useAppSelector(state => state.accessPoint.updating);
  const updateSuccess = useAppSelector(state => state.accessPoint.updateSuccess);

  const handleClose = () => {
    navigate('/access-point' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getAccessControllers({}));
    dispatch(getAccessPointGroups({}));
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
    if (values.neid !== undefined && typeof values.neid !== 'number') {
      values.neid = Number(values.neid);
    }
    if (values.nestate !== undefined && typeof values.nestate !== 'number') {
      values.nestate = Number(values.nestate);
    }
    if (values.neiptype !== undefined && typeof values.neiptype !== 'number') {
      values.neiptype = Number(values.neiptype);
    }

    const entity = {
      ...accessPointEntity,
      ...values,
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
          ...accessPointEntity,
          controller: accessPointEntity?.controller?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="lightnmsApp.accessPoint.home.createOrEditLabel" data-cy="AccessPointCreateUpdateHeading">
            <Translate contentKey="lightnmsApp.accessPoint.home.createOrEditLabel">Create or edit a AccessPoint</Translate>
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
                  id="access-point-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.nedn')}
                id="access-point-nedn"
                name="nedn"
                data-cy="nedn"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.neid')}
                id="access-point-neid"
                name="neid"
                data-cy="neid"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.aliasname')}
                id="access-point-aliasname"
                name="aliasname"
                data-cy="aliasname"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.nename')}
                id="access-point-nename"
                name="nename"
                data-cy="nename"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.necategory')}
                id="access-point-necategory"
                name="necategory"
                data-cy="necategory"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.netype')}
                id="access-point-netype"
                name="netype"
                data-cy="netype"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.nevendorname')}
                id="access-point-nevendorname"
                name="nevendorname"
                data-cy="nevendorname"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.neesn')}
                id="access-point-neesn"
                name="neesn"
                data-cy="neesn"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.neip')}
                id="access-point-neip"
                name="neip"
                data-cy="neip"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.nemac')}
                id="access-point-nemac"
                name="nemac"
                data-cy="nemac"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.version')}
                id="access-point-version"
                name="version"
                data-cy="version"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.nestate')}
                id="access-point-nestate"
                name="nestate"
                data-cy="nestate"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.createtime')}
                id="access-point-createtime"
                name="createtime"
                data-cy="createtime"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.neiptype')}
                id="access-point-neiptype"
                name="neiptype"
                data-cy="neiptype"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.subnet')}
                id="access-point-subnet"
                name="subnet"
                data-cy="subnet"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessPoint.neosversion')}
                id="access-point-neosversion"
                name="neosversion"
                data-cy="neosversion"
                type="text"
              />
              <ValidatedField
                id="access-point-controller"
                name="controller"
                data-cy="controller"
                label={translate('lightnmsApp.accessPoint.controller')}
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/access-point" replace color="info">
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

export default AccessPointUpdate;
