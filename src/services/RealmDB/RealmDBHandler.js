import {useQuery, useRealm, useObject} from '@realm/react';

/**
 * @todo once schema's are create we can destructure useRealm and useQuery from realmContextName
 * so commented the below line
 */

// const {useRealm, useQuery} = realmContextName;

export function useCreateObject(schemaName, schemaObject) {
  const realm = useRealm();
  realm.write(() => {
    realm.create(schemaName, schemaObject);
  });
}

export function useReadObject(schemaName, objectID) {
  const curr_obj = useObject(schemaName, objectID);
  return curr_obj;
}

export function useUpdateSingleObject(
  schemaName,
  objectID,
  objectParam,
  paramValue,
) {
  const curr_obj = useObject(schemaName, objectID);
  const realm = useRealm();
  if (curr_obj) {
    realm.write(() => {
      curr_obj[objectParam] = paramValue;
    });
  }
}

export function useBulkUpdateObject(schemaName, objectParam, paramValue) {
  const objects = useQuery(schemaName);
  const realm = useRealm();
  realm.write(() => {
    objects.forEach(obj => {
      obj[objectParam] = paramValue;
    });
  });
}

export function useUpdateRealmObject(schemaName, schemaObject) {
  const objects = useQuery(schemaName);
  const realm = useRealm();
  /**
   * @info if an object exists, setting the third parameter ('updateMode')
   * to "modified only updates properties that have changed, resulting in faster operations"
   */

  realm.create(objects, schemaObject, 'modified');
}

export function useDeleteAllObject(schemaName) {
  const objects = useQuery(schemaName);
  const realm = useRealm();
  realm.write(() => {
    realm.delete(objects);
  });
}

export function useDeleteQueriedObject(schemaName, query, args) {
  const realm = useRealm();
  const objects = useQuery(schemaName, Obj => {
    return Obj.filtered(query, args);
  });
  realm.write(() => {
    realm.delete(objects);
  });
}
