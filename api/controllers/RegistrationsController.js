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
   * @apiParam {String} domain Mandatory Domain Name to register
   * @apiParam {String} ec2_image_id Optional EC2 Image Id to Launch
   * @apiParam {String} chef-json Optional Chef json to provision machine
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
  /**
   * @api {get} /registrations/:id Check the status of a Registration
   * @apiName ShowRegistration
   * @apiGroup Registration
   *
   * @apiParam {String} id Mandatory Unique ID of the registration
   *
   * @apiSuccess {String} id unique id of the registration
   * @apiSuccess {String} domain Domain name of the registration in question
   * @apiSuccess {Array} events List of events with name, data, timestamp
   * @apiSuccess {Boolean} failed Defaults to false
   * @apiSuccess {Boolean} complete Defaults to false

   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `RegistrationsController.index()`
   */
  /**
   * @api {get} /registrations List all registrations
   * @apiName ListRegistrations
   * @apiGroup Registration
   *
   * @apiSuccess {String} registrations List of registrations by created date
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  }
};

