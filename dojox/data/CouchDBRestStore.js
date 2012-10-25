//>>built
define("dojox/data/CouchDBRestStore",["dojo","dojox","dojox/data/JsonRestStore"],function(g,e){g.declare("dojox.data.CouchDBRestStore",e.data.JsonRestStore,{save:function(a){for(var c=this.inherited(arguments),d=this.service.servicePath,b=0;b<c.length;b++)(function(a,b){b.addCallback(function(b){if(b)a.__id=d+b.id,a._rev=b.rev;return b})})(c[b].content,c[b].deferred)},fetch:function(a){a.query=a.query||"_all_docs?";if(a.start)a.query=(a.query?a.query+"&":"")+"skip="+a.start,delete a.start;if(a.count)a.query=
(a.query?a.query+"&":"")+"limit="+a.count,delete a.count;return this.inherited(arguments)},_processResults:function(a){var c=a.rows;if(c){for(var d=this.service.servicePath,b=0;b<c.length;b++){var f=c[b].value;f.__id=d+c[b].id;f._id=c[b].id;f._loadObject=e.rpc.JsonRest._loader;c[b]=f}return{totalCount:a.total_rows,items:a.rows}}return{items:a}}});e.data.CouchDBRestStore.getStores=function(a){var c={};g.xhrGet({url:a+"_all_dbs",handleAs:"json",sync:!0}).addBoth(function(d){for(var b=0;b<d.length;b++)c[d[b]]=
new e.data.CouchDBRestStore({target:a+d[b],idAttribute:"_id"});return c});return c};return e.data.CouchDBRestStore});