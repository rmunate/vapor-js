!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var t=require("axios"),n=process.env.MIX_VAPOR_ASSET_URL?process.env.MIX_VAPOR_ASSET_URL:"";module.exports=new(function(){function r(){}var o=r.prototype;return o.asset=function(e){return n+"/"+e},o.store=function(n,r){void 0===r&&(r={});try{return Promise.resolve(t.post(r.signedStorageUrl?r.signedStorageUrl:"/vapor/signed-storage-url",e({bucket:r.bucket||"",content_type:r.contentType||n.type,expires:r.expires||"",visibility:r.visibility||""},r.data),e({baseURL:r.baseURL||null,headers:r.headers||{}},r.options))).then(function(e){var o=e.data.headers;return"Host"in o&&delete o.Host,void 0===r.progress&&(r.progress=function(){}),Promise.resolve(t.put(e.data.url,n,{cancelToken:r.cancelToken||"",headers:o,onUploadProgress:function(e){r.progress(e.loaded/e.total)}})).then(function(){return e.data.extension=n.name.split(".").pop(),e.data})})}catch(e){return Promise.reject(e)}},r}())});
//# sourceMappingURL=laravel-vapor.umd.js.map
