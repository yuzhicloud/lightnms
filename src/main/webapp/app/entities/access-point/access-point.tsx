import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, getPaginationState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntities } from './access-point.reducer';

export const AccessPoint = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(pageLocation, ITEMS_PER_PAGE, 'id'), pageLocation.search),
  );

  const accessPointList = useAppSelector(state => state.accessPoint.entities);
  const loading = useAppSelector(state => state.accessPoint.loading);
  const totalItems = useAppSelector(state => state.accessPoint.totalItems);

  const getAllEntities = () => {
    dispatch(
      getEntities({
        page: paginationState.activePage - 1,
        size: paginationState.itemsPerPage,
        sort: `${paginationState.sort},${paginationState.order}`,
      }),
    );
  };

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (pageLocation.search !== endURL) {
      navigate(`${pageLocation.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  useEffect(() => {
    const params = new URLSearchParams(pageLocation.search);
    const page = params.get('page');
    const sort = params.get(SORT);
    if (page && sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: +page,
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    }
  }, [pageLocation.search]);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === ASC ? DESC : ASC,
      sort: p,
    });
  };

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  const handleSyncList = () => {
    sortEntities();
  };

  const getSortIconByFieldName = (fieldName: string) => {
    const sortFieldName = paginationState.sort;
    const order = paginationState.order;
    if (sortFieldName !== fieldName) {
      return faSort;
    } else {
      return order === ASC ? faSortUp : faSortDown;
    }
  };

  return (
    <div>
      <h2 id="access-point-heading" data-cy="AccessPointHeading">
        <Translate contentKey="lightnmsApp.accessPoint.home.title">Access Points</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="lightnmsApp.accessPoint.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/access-point/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="lightnmsApp.accessPoint.home.createLabel">Create new Access Point</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {accessPointList && accessPointList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="lightnmsApp.accessPoint.id">ID</Translate> <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('nedn')}>
                  <Translate contentKey="lightnmsApp.accessPoint.nedn">Nedn</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nedn')} />
                </th>
                <th className="hand" onClick={sort('neid')}>
                  <Translate contentKey="lightnmsApp.accessPoint.neid">Neid</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('neid')} />
                </th>
                <th className="hand" onClick={sort('aliasname')}>
                  <Translate contentKey="lightnmsApp.accessPoint.aliasname">Aliasname</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('aliasname')} />
                </th>
                <th className="hand" onClick={sort('nename')}>
                  <Translate contentKey="lightnmsApp.accessPoint.nename">Nename</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nename')} />
                </th>
                <th className="hand" onClick={sort('necategory')}>
                  <Translate contentKey="lightnmsApp.accessPoint.necategory">Necategory</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('necategory')} />
                </th>
                <th className="hand" onClick={sort('netype')}>
                  <Translate contentKey="lightnmsApp.accessPoint.netype">Netype</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('netype')} />
                </th>
                <th className="hand" onClick={sort('nevendorname')}>
                  <Translate contentKey="lightnmsApp.accessPoint.nevendorname">Nevendorname</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nevendorname')} />
                </th>
                <th className="hand" onClick={sort('neesn')}>
                  <Translate contentKey="lightnmsApp.accessPoint.neesn">Neesn</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('neesn')} />
                </th>
                <th className="hand" onClick={sort('neip')}>
                  <Translate contentKey="lightnmsApp.accessPoint.neip">Neip</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('neip')} />
                </th>
                <th className="hand" onClick={sort('nemac')}>
                  <Translate contentKey="lightnmsApp.accessPoint.nemac">Nemac</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nemac')} />
                </th>
                <th className="hand" onClick={sort('version')}>
                  <Translate contentKey="lightnmsApp.accessPoint.version">Version</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('version')} />
                </th>
                <th className="hand" onClick={sort('nestate')}>
                  <Translate contentKey="lightnmsApp.accessPoint.nestate">Nestate</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nestate')} />
                </th>
                <th className="hand" onClick={sort('createtime')}>
                  <Translate contentKey="lightnmsApp.accessPoint.createtime">Createtime</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('createtime')} />
                </th>
                <th className="hand" onClick={sort('neiptype')}>
                  <Translate contentKey="lightnmsApp.accessPoint.neiptype">Neiptype</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('neiptype')} />
                </th>
                <th className="hand" onClick={sort('subnet')}>
                  <Translate contentKey="lightnmsApp.accessPoint.subnet">Subnet</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('subnet')} />
                </th>
                <th className="hand" onClick={sort('neosversion')}>
                  <Translate contentKey="lightnmsApp.accessPoint.neosversion">Neosversion</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('neosversion')} />
                </th>
                <th>
                  <Translate contentKey="lightnmsApp.accessPoint.controller">Controller</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {accessPointList.map((accessPoint, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/access-point/${accessPoint.id}`} color="link" size="sm">
                      {accessPoint.id}
                    </Button>
                  </td>
                  <td>{accessPoint.nedn}</td>
                  <td>{accessPoint.neid}</td>
                  <td>{accessPoint.aliasname}</td>
                  <td>{accessPoint.nename}</td>
                  <td>{accessPoint.necategory}</td>
                  <td>{accessPoint.netype}</td>
                  <td>{accessPoint.nevendorname}</td>
                  <td>{accessPoint.neesn}</td>
                  <td>{accessPoint.neip}</td>
                  <td>{accessPoint.nemac}</td>
                  <td>{accessPoint.version}</td>
                  <td>{accessPoint.nestate}</td>
                  <td>{accessPoint.createtime}</td>
                  <td>{accessPoint.neiptype}</td>
                  <td>{accessPoint.subnet}</td>
                  <td>{accessPoint.neosversion}</td>
                  <td>
                    {accessPoint.controller ? (
                      <Link to={`/access-controller/${accessPoint.controller.id}`}>{accessPoint.controller.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/access-point/${accessPoint.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/access-point/${accessPoint.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        onClick={() =>
                          (window.location.href = `/access-point/${accessPoint.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`)
                        }
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="lightnmsApp.accessPoint.home.notFound">No Access Points found</Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={accessPointList && accessPointList.length > 0 ? '' : 'd-none'}>
          <div className="justify-content-center d-flex">
            <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} i18nEnabled />
          </div>
          <div className="justify-content-center d-flex">
            <JhiPagination
              activePage={paginationState.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={paginationState.itemsPerPage}
              totalItems={totalItems}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default AccessPoint;
