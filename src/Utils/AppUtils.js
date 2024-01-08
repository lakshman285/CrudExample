const Utils = {
  isEmpty: function (val) {
    return (
      val === null ||
      val === undefined ||
      val === '' ||
      val === 'null' ||
      val === 0 ||
      val === '0' ||
      (Array.isArray(val) && val.length === 0) ||
      (Object.keys(val).length === 0 && val.constructor === Object)
    );
  },

  removeDuplicates: function (mergedArray, primaryId) {
    return Object.values(
      mergedArray.reduce(
        (acc, cur) => Object.assign(acc, {[primaryId.id]: cur}),
        {},
      ),
    );
  },

  mergeTwoArrays: function (arr1, arr2) {
    return Array.prototype.push.apply(arr1, arr2);
  },
};

export default Utils;