'use strict';

/**
 * funcionario service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::funcionario.funcionario');
