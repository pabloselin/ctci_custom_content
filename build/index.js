!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.editPost}()},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e,t,n){var c=n(10),o=n(11),r=n(12),i=n(14);e.exports=function(e,t){return c(e)||o(e,t)||r(e,t)||i()}},function(e,t){!function(){e.exports=this.wp.mediaUtils}()},function(e,t){!function(){e.exports=this.wp.blob}()},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,o=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(c=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);c=!0);}catch(e){o=!0,r=e}finally{try{c||null==l.return||l.return()}finally{if(o)throw r}}return n}}},function(e,t,n){var c=n(13);e.exports=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t,n){"use strict";n.r(t);var c,o,r=n(0),i=n(6),l=n(5),a=n(2),u=n(3),d=n(1),s=n(4),b=Object(d.withSelect)((function(e,t){return{doc_year:e("core/editor").getEditedPostAttribute("meta")._ctci_doc_year}})),f=Object(d.withDispatch)((function(e,t){return{onMetaFieldChange:function(t){e("core/editor").editPost({meta:{_ctci_doc_year:t}})}}})),m=Object(s.compose)(b,f)((function(e){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.TextControl,{label:Object(u.__)("Año de publicación"),value:e.doc_year,type:"number",name:"_ctci_doc_year",onChange:function(t){e.onMetaFieldChange(t)}}))})),p=n(7),_=n.n(p),h=n(8),O=n(9),j=function(e){var t=c.result,n={};n._ctci_doc_text_contents=t,wp.data.dispatch("core/editor").editPost({meta:n}),wp.data.dispatch("core/notices").createNotice("success","Contenido textual procesado",{isDismissable:!0})},g=function(e,t){Object(h.uploadMedia)({filesList:e,onFileChange:function(e){return function(e,t){if("_ctci_doc_file_md_slug"===t&&e.url.startsWith("blob")&&(o=Object(O.getBlobByURL)(e.url),(c=new FileReader).onloadend=j,c.readAsText(o)),e&&e.id){console.log(e);var n={};n[t]=e.slug,wp.data.select("core/editor").getEditedPostAttribute("meta"),wp.data.dispatch("core/editor").editPost({meta:n}),wp.data.dispatch("core/notices").createNotice("success","Documento subido",{isDismissable:!0})}}(_()(e,1)[0],t)},onError:function(e){return console.error,void wp.data.dispatch("core/notices").createNotice("error","Hubo un problema al subir el archivo",{isDismissable:!0})}})},y=(n(15),Object(d.withSelect)((function(e,t){var n=e("core/editor").getEditedPostAttribute("meta")[t.field];return{doc_file_slug:n,doc_info:e("core").getEntityRecords("postType","attachment",{slug:n})}}))),v=Object(d.withDispatch)((function(e,t){return{putFileandField:function(e,t){g(e,t)}}})),E=Object(s.compose)(y,v)((function(e){return Object(r.createElement)(r.Fragment,null,null!==e.doc_info&&e.doc_file_slug?Object(r.createElement)(a.PanelRow,null,Object(r.createElement)("p",null,"Archivo:"),Object(r.createElement)("p",null,Object(r.createElement)(a.ExternalLink,{href:e.doc_info[0].source_url},e.doc_info[0].title.rendered))):"",Object(r.createElement)(a.FormFileUpload,{accept:e.accept,onChange:function(){return e.putFileandField(event.target.files,e.field)},icon:"insert"},e.children))})),w=Object(d.withSelect)((function(e,t){return{doc_month:e("core/editor").getEditedPostAttribute("meta")._ctci_doc_month}})),x=Object(d.withDispatch)((function(e,t){return{onMetaFieldChange:function(t){e("core/editor").editPost({meta:{_ctci_doc_month:t}})}}})),F=Object(s.compose)(w,x)((function(e){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.SelectControl,{label:Object(u.__)("Mes de publicación"),value:e.doc_month,name:"_ctci_doc_month",options:[{value:null,label:"Escoge un mes",disabled:!0},{value:"01",label:"Enero"},{value:"02",label:"Febrero"},{value:"03",label:"Marzo"},{value:"04",label:"Abril"},{value:"05",label:"Mayo"},{value:"06",label:"Junio"},{value:"07",label:"Julio"},{value:"08",label:"Agosto"},{value:"09",label:"Septiembre"},{value:"10",label:"Octubre"},{value:"11",label:"Noviembre"},{value:"12",label:"Diciembre"}],onChange:function(t){return e.onMetaFieldChange(t)}}))})),P=Object(d.withSelect)((function(e,t){return{doc_day:e("core/editor").getEditedPostAttribute("meta")._ctci_doc_day}})),S=Object(d.withDispatch)((function(e,t){return{onMetaFieldChange:function(t){e("core/editor").editPost({meta:{_ctci_doc_day:t}})}}})),M=Object(s.compose)(P,S)((function(e){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.TextControl,{label:Object(u.__)("Día de publicación"),value:e.doc_day,type:"number",name:"_ctci_doc_day",onChange:function(t){e.onMetaFieldChange(t)}}))})),A=function(e){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.PanelBody,{title:Object(u.__)("Archivo","ctci"),icon:"media-document",initialOpen:!0},Object(r.createElement)(E,{field:"_ctci_doc_file_pdf_slug",accept:".pdf"},"Subir PDF"),Object(r.createElement)(a.HorizontalRule,null),Object(r.createElement)(E,{field:"_ctci_doc_file_md_slug",accept:".md",contentsField:"_ctci_doc_text_contents"},"Subir Markdown o .txt"),Object(r.createElement)(a.HorizontalRule,null),Object(r.createElement)(m,null),Object(r.createElement)(a.HorizontalRule,null),Object(r.createElement)(F,null),Object(r.createElement)(M,null)))};Object(i.registerPlugin)("ctci-sidebar",{icon:"media-document",render:function(){return"ctci_doc"===Object(d.select)("core/editor").getCurrentPostType()?Object(r.createElement)(r.Fragment,null,Object(r.createElement)(l.PluginSidebarMoreMenuItem,{target:"ctci_docs_sidebar"},Object(u.__)("Información documento","ctci")),Object(r.createElement)(l.PluginSidebar,{name:"ctci_docs_sidebar",title:Object(u.__)("Información del Documento","ctci")},Object(r.createElement)(A,null))):null}})}]);