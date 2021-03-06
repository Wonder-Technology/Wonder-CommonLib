'use strict';

var SparseMap$WonderCommonlib = require("./SparseMap.bs.js");

function set(map, key, value) {
  map[key] = value;
  return map;
}

function remove(map, key) {
  map[key] = undefined;
  return map;
}

function deleteVal(map, key) {
  map[key] = undefined;
  return map;
}

var createEmpty = SparseMap$WonderCommonlib.createEmpty;

var copy = SparseMap$WonderCommonlib.copy;

var get = SparseMap$WonderCommonlib.get;

var getNullable = SparseMap$WonderCommonlib.getNullable;

var has = SparseMap$WonderCommonlib.has;

var map = SparseMap$WonderCommonlib.map;

var reducei = SparseMap$WonderCommonlib.reducei;

var getValues = SparseMap$WonderCommonlib.getValues;

var getKeys = SparseMap$WonderCommonlib.getKeys;

exports.createEmpty = createEmpty;
exports.copy = copy;
exports.get = get;
exports.getNullable = getNullable;
exports.has = has;
exports.set = set;
exports.remove = remove;
exports.map = map;
exports.reducei = reducei;
exports.getValues = getValues;
exports.getKeys = getKeys;
exports.deleteVal = deleteVal;
/* No side effect */
