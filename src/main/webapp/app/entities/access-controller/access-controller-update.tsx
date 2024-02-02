import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAccessController } from 'app/shared/model/access-controller.model';
import { getEntity, updateEntity, createEntity, reset } from './access-controller.reducer';

export const AccessControllerUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const accessControllerEntity = useAppSelector(state => state.accessController.entity);
  const loading = useAppSelector(state => state.accessController.loading);
  const updating = useAppSelector(state => state.accessController.updating);
  const updateSuccess = useAppSelector(state => state.accessController.updateSuccess);

  const handleClose = () => {
    navigate('/access-controller' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
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
      ...accessControllerEntity,
      ...values,
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
          ...accessControllerEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="lightnmsApp.accessController.home.createOrEditLabel" data-cy="AccessControllerCreateUpdateHeading">
            <Translate contentKey="lightnmsApp.accessController.home.createOrEditLabel">Create or edit a AccessController</Translate>
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
                  id="access-controller-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('lightnmsApp.accessController.nedn')}
                id="access-controller-nedn"
                name="nedn"
                data-cy="nedn"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.neid')}
                id="access-controller-neid"
                name="neid"
                data-cy="neid"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.aliasname')}
                id="access-controller-aliasname"
                name="aliasname"
                data-cy="aliasname"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.nename')}
                id="access-controller-nename"
                name="nename"
                data-cy="nename"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.necategory')}
                id="access-controller-necategory"
                name="necategory"
                data-cy="necategory"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.netype')}
                id="access-controller-netype"
                name="netype"
                data-cy="netype"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.nevendorname')}
                id="access-controller-nevendorname"
                name="nevendorname"
                data-cy="nevendorname"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.neesn')}
                id="access-controller-neesn"
                name="neesn"
                data-cy="neesn"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.neip')}
                id="access-controller-neip"
                name="neip"
                data-cy="neip"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.nemac')}
                id="access-controller-nemac"
                name="nemac"
                data-cy="nemac"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.version')}
                id="access-controller-version"
                name="version"
                data-cy="version"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.nestate')}
                id="access-controller-nestate"
                name="nestate"
                data-cy="nestate"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.createtime')}
                id="access-controller-createtime"
                name="createtime"
                data-cy="createtime"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.neiptype')}
                id="access-controller-neiptype"
                name="neiptype"
                data-cy="neiptype"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.subnet')}
                id="access-controller-subnet"
                name="subnet"
                data-cy="subnet"
                type="text"
              />
              <ValidatedField
                label={translate('lightnmsApp.accessController.neosversion')}
                id="access-controller-neosversion"
                name="neosversion"
                data-cy="neosversion"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/access-controller" replace color="info">
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

export default AccessControllerUpdate;
