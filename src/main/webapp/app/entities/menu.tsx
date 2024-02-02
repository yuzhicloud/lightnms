import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/access-controller">
        <Translate contentKey="global.menu.entities.accessController" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/access-point">
        <Translate contentKey="global.menu.entities.accessPoint" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/access-point-group">
        <Translate contentKey="global.menu.entities.accessPointGroup" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/power-plant">
        <Translate contentKey="global.menu.entities.powerPlant" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/province">
        <Translate contentKey="global.menu.entities.province" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
