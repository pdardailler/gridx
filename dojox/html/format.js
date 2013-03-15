//>>built
define("dojox/html/format",["dojo/_base/kernel","./entities","dojo/_base/array","dojo/_base/window","dojo/_base/sniff"],function(h,u,z,A,v){var m=h.getObject("dojox.html.format",!0);m.prettyPrint=function(m,k,l,w,B){var g=[],i=0,r=[],j="\t",e="",x=[],s,C=/[=]([^"']+?)(\s|>)/g,D=/style=("[^"]*"|'[^']*'|\S*)/gi,E=/[\w-]+=("[^"]*"|'[^']*'|\S*)/gi;if(k&&0<k&&10>k){j="";for(s=0;s<k;s++)j+=" "}k=A.doc.createElement("div");k.innerHTML=m;var F=u.encode,G=u.decode,t=k.ownerDocument.createElement("div"),H=
function(a){a=a.cloneNode(!1);t.appendChild(a);a=t.innerHTML;t.innerHTML="";return a},n=function(){var a;for(a=0;a<i;a++)g.push(j)},o=function(){g.push("\n")},p=function(a){var b,d,a=a.split("\n");for(b=0;b<a.length;b++)a[b]=h.trim(a[b]);a=a.join(" ");a=h.trim(a);if(""!==a){var c=[];if(l&&0<l){var f="";for(b=0;b<i;b++)f+=j;b=f.length;f=l;for(l>b&&(f-=b);a;)if(a.length>l){for(b=f;0<b&&" "!==a.charAt(b);b--);if(!b)for(b=f;b<a.length&&" "!==a.charAt(b);b++);var e=a.substring(0,b),e=h.trim(e),a=h.trim(a.substring(b==
a.length?a.length:b+1,a.length));if(e){d="";for(b=0;b<i;b++)d+=j;e=d+e+"\n"}c.push(e)}else{d="";for(b=0;b<i;b++)d+=j;a=d+a+"\n";c.push(a);a=null}return c.join("")}d="";for(b=0;b<i;b++)d+=j;return d+a+"\n"}return""},I=function(a){if(a){var b=a;b&&(b=b.replace(/&quot;/gi,'"'),b=b.replace(/&gt;/gi,">"),b=b.replace(/&lt;/gi,"<"),b=b.replace(/&amp;/gi,"&"));for(var d,c,a=0,f=b.split("\n"),e=[],b=0;b<f.length;b++){var g=f[b],q=-1<g.indexOf("\n");if(g=h.trim(g)){q=a;for(d=0;d<g.length;d++)c=g.charAt(d),
"{"===c?a++:"}"===c&&(a--,q=a);c="";for(d=0;d<i+q;d++)c+=j;e.push(c+g+"\n")}else q&&0===b&&e.push("\n")}a=e.join("")}return a},J=function(a){var b=a.nodeName.toLowerCase(),d=h.trim(H(a)),a=d.substring(0,d.indexOf(">")+1),a=a.replace(C,'="$1"$2'),a=a.replace(D,function(a){var b=a.substring(0,6),a=a.substring(6,a.length),c=a.charAt(0),a=h.trim(a.substring(1,a.length-1)),a=a.split(";"),d=[];z.forEach(a,function(a){if(a=h.trim(a))a=a.substring(0,a.indexOf(":")).toLowerCase()+a.substring(a.indexOf(":"),
a.length),d.push(a)});var d=d.sort(),a=d.join("; "),e=h.trim(a);return!e||";"===e?"":b+c+(a+";")+c}),c=[],a=a.replace(E,function(a){c.push(h.trim(a));return""}),c=c.sort(),a="<"+b;c.length&&(a+=" "+c.join(" "));-1!=d.indexOf("</")?(r.push(b),a+=">"):(a=B?a+" />":a+">",r.push(!1));a:switch(b){case "a":case "b":case "strong":case "s":case "strike":case "i":case "u":case "em":case "sup":case "sub":case "span":case "font":case "big":case "cite":case "q":case "small":b=!0;break a;default:b=!1}x.push(b);
e&&!b&&(g.push(p(e)),e="");b?e+=a:(n(),g.push(a),o(),i++)},y=function(a){var b=a.childNodes;if(b){var d;for(d=0;d<b.length;d++){var c=b[d];if(1===c.nodeType){var f=h.trim(c.tagName.toLowerCase());if(!(v("ie")&&c.parentNode!=a)&&!(f&&"/"===f.charAt(0)))J(c),"script"===f?g.push(I(c.innerHTML)):"pre"===f?(c=c.innerHTML,v("mozilla")&&(c=c.replace("<br>","\n"),c=c.replace("<pre>",""),c=c.replace("</pre>","")),"\n"!==c.charAt(c.length-1)&&(c+="\n"),g.push(c)):y(c),c=x.pop(),e&&!c&&(g.push(p(e)),e=""),(f=
r.pop())?(f="</"+f+">",c?e+=f:(i--,n(),g.push(f),o())):i--}else 3===c.nodeType||4===c.nodeType?e+=F(c.nodeValue,w):8===c.nodeType&&(c=G(c.nodeValue,w),n(),g.push("<\!--"),o(),i++,g.push(p(c)),i--,n(),g.push("--\>"),o())}}};y(k);e&&(g.push(p(e)),e="");return g.join("")};return m});