import{Ka as g,Pa as n,Qa as o,Ra as C,Ta as s,Wa as p,Xa as y,Ya as _,ga as f,ia as a,ra as l,za as m}from"./chunk-RHTFLBXU.js";var c=class r{message=f();static \u0275fac=function(e){return new(e||r)};static \u0275cmp=m({type:r,selectors:[["app-greeting"]],inputs:{message:[1,"message"]},decls:4,vars:1,template:function(e,i){e&1&&(n(0,"p"),p(1,"greeting works!"),o(),n(2,"p"),p(3),o()),e&2&&(l(3),y(i.message()))},encapsulation:2})};var u=class r{counterValue=a(0);increment(){this.counterValue.update(t=>t+1)}decrement(){this.counterValue.update(t=>t-1)}reset(){this.counterValue.set(0)}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=m({type:r,selectors:[["app-counter"]],decls:9,vars:1,consts:[[3,"click"]],template:function(e,i){e&1&&(n(0,"p"),p(1),o(),n(2,"div")(3,"button",0),s("click",function(){return i.increment()}),p(4,"Increment"),o(),n(5,"button",0),s("click",function(){return i.reset()}),p(6,"Reset"),o(),n(7,"button",0),s("click",function(){return i.decrement()}),p(8,"Decrement"),o()()),e&2&&(l(),_("counter value: ",i.counterValue(),""))},encapsulation:2})};var v=class r{homeMessage=a("Hello, World!");keyUpHandler(t){console.log(`user pressed the ${t.key} key`)}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=m({type:r,selectors:[["app-home"]],decls:3,vars:1,consts:[[3,"message"],["placeholder","Type Something....","type","text",3,"keyup"]],template:function(e,i){e&1&&(C(0,"app-greeting",0)(1,"app-counter"),n(2,"input",1),s("keyup",function(b){return i.keyUpHandler(b)}),o()),e&2&&g("message",i.homeMessage())},dependencies:[c,u],styles:["input[_ngcontent-%COMP%]{margin-top:10px}"]})};export{v as HomeComponent};
