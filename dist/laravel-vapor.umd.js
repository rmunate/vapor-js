!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("axios")):"function"==typeof define&&define.amd?define(["axios"],t):(e||self).laravelVapor=t(e.axios)}(this,function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}var o=function(){try{return process.env.MIX_VAPOR_ASSET_URL?process.env.MIX_VAPOR_ASSET_URL:""}catch(e){throw console.error("Unable to automatically resolve the asset URL. Use Vapor.withBaseAssetUrl() to specify it manually."),e}};return new(function(){function e(){}var t=e.prototype;return t.asset=function(e){return o()+"/"+e},t.withBaseAssetUrl=function(e){o=function(){return e||""}},t.store=function(e,t){void 0===t&&(t={});try{return Promise.resolve(n.default.post(t.signedStorageUrl?t.signedStorageUrl:"/vapor/signed-storage-url",r({bucket:t.bucket||"",content_type:t.contentType||e.type,expires:t.expires||"",visibility:t.visibility||""},t.data),r({baseURL:t.baseURL||null,headers:t.headers||{}},t.options))).then(function(r){var o=r.data.headers;return"Host"in o&&delete o.Host,void 0===t.progress&&(t.progress=function(){}),Promise.resolve(n.default.put(r.data.url,e,{cancelToken:t.cancelToken||"",headers:o,onUploadProgress:function(e){t.progress(e.loaded/e.total)}})).then(function(){return r.data.extension=e.name.split(".").pop(),r.data})})}catch(e){return Promise.reject(e)}},e}())});
//# sourceMappingURL=laravel-vapor.umd.js.map
