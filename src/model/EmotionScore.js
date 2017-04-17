/**
 * SeerNet Audio APIs
 * OpenAPI Specification of SeerNet audio APIs
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SeerNetAudioApIs) {
      root.SeerNetAudioApIs = {};
    }
    root.SeerNetAudioApIs.EmotionScore = factory(root.SeerNetAudioApIs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmotionScore model module.
   * @module model/EmotionScore
   * @version v1
   */

  /**
   * Constructs a new <code>EmotionScore</code>.
   * @alias module:model/EmotionScore
   * @class
   * @param emotion {String} Type of emotion like Happy, Sad, Surprised etc.
   * @param score {Number} Probability score or confidence of the corresponding emotion.
   */
  var exports = function(emotion, score) {
    var _this = this;

    _this['emotion'] = emotion;
    _this['score'] = score;
  };

  /**
   * Constructs a <code>EmotionScore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmotionScore} obj Optional instance to populate.
   * @return {module:model/EmotionScore} The populated <code>EmotionScore</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('emotion')) {
        obj['emotion'] = ApiClient.convertToType(data['emotion'], 'String');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Type of emotion like Happy, Sad, Surprised etc.
   * @member {String} emotion
   */
  exports.prototype['emotion'] = undefined;
  /**
   * Probability score or confidence of the corresponding emotion.
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;



  return exports;
}));

