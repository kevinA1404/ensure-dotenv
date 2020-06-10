'use strict';

module.exports = function (requiredEnv = []) {
  if (!Array.isArray(requiredEnv)) throw new Error('requiredEnv must be of type array');
  if (!requiredEnv.every(function(env){ return typeof env === 'string' })) throw new Error('requiredEnv must be of type string array');

  const unsetEnv = requiredEnv.filter((env) => !(typeof process.env[env] !== 'undefined'));
  if (unsetEnv.length > 0) {
    throw new Error("Required ENV variables are not set: [" + unsetEnv.join(', ') + "]");
  }
}
