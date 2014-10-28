"use strict";

var env = require("require-env"),
    pg = require("pg");

var DATABASE_URL = env.require("DATABASE_URL");

var getPhotosForPark = function(parkId, options, callback) {
  return pg.connect(DATABASE_URL, function(err, client, done) {
    if (err) {
      done();
      return callback(err);
    }

    var query = [
      "SELECT",
      "  photos.photo_id AS photoid,",
      "  photos.metadata -> 'owner' AS owner,",
      "  photos.metadata -> 'secret' AS secret,",
      "  photos.metadata -> 'server' AS server,",
      "  photos.metadata -> 'farm' AS farm,",
      "  photos.metadata -> 'title' AS title,",
      "  photos.metadata -> 'latitude' AS latitude,",
      "  photos.metadata -> 'longitude' AS longitude,",
      "  photos.metadata -> 'accuracy' AS accuracy,",
      "  photos.metadata -> 'woeid' AS woeid,",
      "  photos.metadata -> 'tags' AS tags,",
      "  photos.metadata -> 'dateupload' AS dateupload,",
      "  photos.metadata -> 'datetaken' AS datetaken,",
      "  photos.metadata -> 'ownername' AS ownername,",
      "  photos.metadata -> 'description' AS description,",
      "  photos.metadata -> 'license' AS license,",
      "  photos.metadata -> 'width_o' AS o_width,",
      "  photos.metadata -> 'height_o' AS o_height,",
      "  photos.metadata -> 'url_l' AS url_l,",
      "  photos.metadata -> 'height_l' AS height_l,",
      "  photos.metadata -> 'width_l' AS width_l",
      "FROM flickr_photos photos",
      "WHERE superunit_id = $1",
      "OFFSET $2",
      "LIMIT $3"
    ].join("\n");

    return client.query(query, [parkId, options.startat || '0', options.limit || '9000'], function(err, result) {
      done();

      if (err) {
        return callback(err);
      }

      return callback(null, result.rows);
    });
  });
};

module.exports = {
  getPhotosForPark: getPhotosForPark
};