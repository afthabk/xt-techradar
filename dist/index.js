"use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var t=0,n=Array(a.length);t<a.length;t++)n[t]=a[t];return n}return Array.from(a)}!function(a,t){function n(a){t(".ring li").remove(),t.each(a,function(a,n){var r=n.quadrant,e=n.ring,i=t("<li/>",{html:n.label});t(".quad-container").find("[data-quad='"+r+"']").find("[data-ring='"+e+"']").append(i)})}function r(){t(".filter-box input").on("change",function(){!function(r){if(0===r.length)return t("#radar").html(""),n(a.data.entries),void radar_visualization(a.data);var e=a.data.entries.filter(function(a){if(a.platform)return r.some(function(t){var n=a.platform.map(function(a){return a.toLowerCase()});return console.log(n,t),n.includes(t.toLowerCase())})}),i=Object.assign({},a.data);i.entries=e,t("#radar").html(""),radar_visualization(i),n(e),i=""}(t(".filter-box input:checkbox:checked").map(function(){return t(this).val()}).toArray())})}t(document).ready(function(){t.getJSON("data").done(function(e){radar_visualization(e),function(a){t(".title").html(a.title);for(var r=t("<div/>",{class:"rings-container"}).appendTo(t(".title")),e=0;e<a.rings.length;e++){var i=t("<label/>",{class:"ring-title",html:a.rings[e].name});t("<ul/>",{class:"ring","data-ring":e,html:i}).appendTo(r)}for(var o=t("<div/>",{class:"quad-container"}),l=0;l<a.quadrants.length;l++){var u=t("<span/>",{class:"quad-title",html:a.quadrants[l].name});t("<div/>",{class:"quad quad"+l,"data-quad":l,html:u}).appendTo(o)}t("#textual-data").html(o),t(".quad").append(r),n(a.entries)}(e);!function(a){var n=t("<legend/>",{html:"Filter By Platform"}),r=t("<fieldset/>").append(n);t.each(a,function(a,n){var e=t("<div/>",{class:"filter-tags"}).appendTo(r);t(e).append(t("<input/>",{value:n,type:"checkbox",name:"filter_tags",id:n})),t(e).append(t("<label/>",{for:n,text:n}))}),r.appendTo(t(".filter-box"))}(function(a){var n=[];return t.each(a,function(a,t){if(t.platform){var r=t.platform.map(function(a){return a.toLowerCase()});n=n.concat(r)}}),[].concat(_toConsumableArray(new Set(n)))}(e.entries)),r(),a.data=e}).fail(function(a,t,n){var r=t+", "+n;console.log("Request Failed: "+r)})})}(window.app=window.app||{},jQuery);