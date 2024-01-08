import Realm from 'realm';
import {createRealmContext} from '@realm/react';

/**
 * @todo
 * Below created schema's are for configurations alone, once we get data we need to create
 * the schema for the actual data inside schemas folder and import it here
 */
export class RouteData extends Realm.Object {}
export class EmployeeData extends Realm.Object {}

RouteData.schema = {
  name: 'RouteData',
  properties: {
    routeData: 'string',
  },
};

EmployeeData.schema = {
  name: 'EmployeeData',
  properties: {
    employeeData: 'string',
  },
};

export const AgentRealmContext = createRealmContext({
  schema: [RouteData, EmployeeData],
});
