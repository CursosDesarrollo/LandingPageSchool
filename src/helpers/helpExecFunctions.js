export const helpExecFunctions = {
  functions: [],
  addFunction: function (newFunc) {
    this.functions.push(newFunc);
  },
  execFunctions: function () {
    this.functions.forEach(val => val());
  },
};
