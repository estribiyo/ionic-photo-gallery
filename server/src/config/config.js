/**
 * An application configuration.
 *
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license	  The MIT License {@link http://opensource.org/licenses/MIT}
 */
'use strict';

var config = {};

config.environment = process.env.NODE_ENV || 'development';

// Upload files in memory
config.uploadFilesInMemory = process.env.UPLOAD_FILES_IN_MEMORY || false;

// Populate the DB with sample data
config.seedDB = true;

// Token settings
config.token = {
    secret: process.env.TOKEN_SECRET || 'ionic-photo-gallery',
    expiration: process.env.TOKEN_EXPIRATION || 60*60*24 //24 hours
};

// Server settings
config.server = {
    host: '0.0.0.0',
    port: process.env.NODE_PORT || 3000
};

// MongoDB settings
config.mongodb = {
    dbURI: process.env.MONGODB_URI || process.env.MONGOLAB_URI || "mongodb://127.0.0.1:27017/ionic-photo-gallery",
    dbOptions: {"user": "", "pass": ""}
};

// Redis settings
config.redis = {
    isAvailable: process.env.IS_REDIS_AVAILABLE || true,
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT || 6379,
    options: {

    }
};

// Export configuration object
module.exports = config;