/**
 * Created by austinadams on 5/9/15.
 */

Stories = new Mongo.Collection('stories');
Stories._ensureIndex({ "sourceId": 1}, { unique: true });