const orm = require("../config/orm");

const burgers = {
  all(callBack) {
    orm.selectAll("burgers", res => {
      callBack(res);
    });
  },

  create(cols, value, callBack) {
    orm.insertOne("burgers", cols, value, res => {
      callBack(res);
    });
  },

  update(cols, id, callBack) {
    orm.updateOne("burgers", cols, id, res => {
      callBack(res);
    });
  }
};

module.exports = burgers;
