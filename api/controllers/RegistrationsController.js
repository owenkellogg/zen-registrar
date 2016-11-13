/**
 * RegistrationsController
 *
 * @description :: Server-side logic for managing Registrations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `RegistrationsController.create()`
   */
  /**
   * @api {post} /registrations Register a New Domain & Launch Machine
   * @apiName CreateRegistration
   * @apiGroup Registration
   *
   * @apiParam {String} domain Domain Name to register
   *
   * @apiSuccess {String} id unique id of the registration
   */
  create: function (req, res) {
    return res.json({
      todo: 'create() is not implemented yet!'
    });
  },


  /**
   * `RegistrationsController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `RegistrationsController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  }
};

