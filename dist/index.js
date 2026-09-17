"use strict";var q=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var f=q(function(B,d){
var a=require('@stdlib/number-float64-base-to-float32/dist');function _(r,e,i,v,R){var y,t,u,n,s,c,o;if(c=r-e,r<=0||c<=0)return NaN;if(r===1||v===0)return 0;for(t=R,y=i[t],t+=v,u=0,n=0,o=1;o<r;o++)s=a(i[t]-y),u=a(u+a(s*s)),n=a(n+s),t+=v;return a(a(u/c)-a(a(n/r)*a(n/c)))}d.exports=_
});var l=q(function(C,h){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=f();function O(r,e,i,v){return F(r,e,i,v,E(r,v))}h.exports=O
});var j=q(function(D,x){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=l(),b=f();T(m,"ndarray",b);x.exports=m
});var g=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=j(),p,M=k(g(__dirname,"./native.js"));w(M)?p=z:p=M;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
