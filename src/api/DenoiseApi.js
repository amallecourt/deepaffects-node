/**
 * DeepAffects
 * OpenAPI Specification of DeepAffects APIs
 *
 * OpenAPI spec version: 0.1.0
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
    define(['ApiClient', 'model/AsyncResponse', 'model/Audio'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AsyncResponse'), require('../model/Audio'));
  } else {
    // Browser globals (root is window)
    if (!root.DeepAffects) {
      root.DeepAffects = {};
    }
    root.DeepAffects.DenoiseApi = factory(root.DeepAffects.ApiClient, root.DeepAffects.AsyncResponse, root.DeepAffects.Audio);
  }
}(this, function(ApiClient, AsyncResponse, Audio) {
  'use strict';

  /**
   * Denoise service.
   * @module api/DenoiseApi
   * @version 0.1.0
   */

  /**
   * Constructs a new DenoiseApi.
   * @alias module:api/DenoiseApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the asyncDenoiseAudio operation.
     * @callback module:api/DenoiseApi~asyncDenoiseAudioCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AsyncResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Denoise an audio file
     * Denoise an audio file.
     * @param {module:model/Audio} body Audio object that needs to be denoised.
     * @param {module:api/DenoiseApi~asyncDenoiseAudioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AsyncResponse}
     */
    this.asyncDenoiseAudio = function(body, webhook, callback, request_id) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling asyncDenoiseAudio");
      }


      var pathParams = {
      };
      var queryParams;
      if(request_id === undefined){
          queryParams = {
              "webhook": webhook
          };
      }
      else{
          queryParams = {
              "webhook": webhook,
              "request_id": request_id
          };
      }

      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['UserSecurity'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AsyncResponse;

      return this.apiClient.callApi(
        '/audio/generic/api/v1/async/denoise', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the syncDenoiseAudio operation.
     * @callback module:api/DenoiseApi~syncDenoiseAudioCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Audio} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Denoise an audio file
     * Denoise an audio file.
     * @param {module:model/Audio} body Audio object that needs to be denoised.
     * @param {module:api/DenoiseApi~syncDenoiseAudioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Audio}
     */
    this.syncDenoiseAudio = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling syncDenoiseAudio");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['UserSecurity'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Audio;

      return this.apiClient.callApi(
        '/audio/generic/api/v1/sync/denoise', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
