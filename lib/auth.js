/**
 * Expose the Auth module.
 * @export
 */
module.exports = Auth;


/**
 * Authentication Module.
 * This module uses Passport as its authentication middleware.
 * @param {function(Object, Object, Function)} app Express application instance.
 */
function Auth(app) {}


/**
 * Handles a response from the findOrCreate attempt.
 * @param {string} err The error message (if any).
 * @param {Object} result The user object.
 * @param {Function} done The callback to fire when done.
 */
Auth.prototype.handleResponse = function(err, result, done) {
  if (!err) {
    done(null, result);
  } else {
    // First argument MUST be null/false or `failureFlash` won't fire.
    done(null, result, {message: err});
  }
};


/**
 * Deserializes the user from the session.
 * TODO: Perhaps we should expand on this more later.
 * @param {Object} user The user object.
 * @param {Function} done Callback to fire when done.
 */
Auth.prototype.deserializeUser = function(user, done) {
  done(null, user);
};


/**
 * Serializes the user into the session.
 * TODO: Perhaps we should expand on this more later.
 * @param {Object} user The user object.
 * @param {Function} done Callback to fire when done.
 */
Auth.prototype.serializeUser = function(user, done) {
  done(null, user);
};
