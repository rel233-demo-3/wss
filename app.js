function C(){const J=['2228390WaqjTc','bind','map','conn:','220257UcBkGO','every','reduce','540776wPLMhc','2068560VqZoiR','message','env','4ec2707f-4875-4717-8d95-1f13983b24e8','UUID','E2:','log','toString','28xMyEfz','connection','475103RnNZsg','util','readUInt16BE','682566xNnaNB','pipe','E1:','connect','net','decode','once','Server','write','readUInt8','1138432liGywv','slice','error','join','concat'];C=function(){return J;};return C();}function T(K,Y){const w=C();return T=function(m,L){m=m-0x13b;let s=w[m];return s;},T(K,Y);}const b=T;(function(K,Y){const h=T,w=K();while(!![]){try{const m=-parseInt(h(0x154))/0x1+parseInt(h(0x13d))/0x2+parseInt(h(0x146))/0x3+-parseInt(h(0x149))/0x4+-parseInt(h(0x142))/0x5+-parseInt(h(0x157))/0x6*(-parseInt(h(0x152))/0x7)+parseInt(h(0x14a))/0x8;if(m===Y)break;else w['push'](w['shift']());}catch(L){w['push'](w['shift']());}}}(C,0x494f2));const net=require(b(0x15b)),{WebSocket,createWebSocketStream}=require('ws'),{TextDecoder}=require(b(0x155)),logcb=(...K)=>console[b(0x150)][b(0x143)](this,...K),errcb=(...K)=>console[b(0x13f)][b(0x143)](this,...K),uuid=(process[b(0x14c)][b(0x14e)]||b(0x14d))['replace'](/-/g,''),port=process[b(0x14c)]['PORT']||0xbb8,wss=new WebSocket[(b(0x15e))]({'port':port},logcb('listen:',port));wss['on'](b(0x153),K=>{const V=b;console['log']('on\x20connection'),K[V(0x15d)](V(0x14b),Y=>{const o=V,[w]=Y,m=Y[o(0x13e)](0x1,0x11);if(!m[o(0x147)]((H,p)=>H==parseInt(uuid['substr'](p*0x2,0x2),0x10)))return;let L=Y[o(0x13e)](0x11,0x12)[o(0x13c)]()+0x13;const s=Y['slice'](L,L+=0x2)[o(0x156)](0x0),y=Y[o(0x13e)](L,L+=0x1)['readUInt8'](),F=y==0x1?Y[o(0x13e)](L,L+=0x4)[o(0x140)]('.'):y==0x2?new TextDecoder()[o(0x15c)](Y[o(0x13e)](L+0x1,L+=0x1+Y[o(0x13e)](L,L+0x1)['readUInt8']())):y==0x3?Y[o(0x13e)](L,L+=0x10)[o(0x148)]((H,p,P,u)=>P%0x2?H[o(0x141)](u['slice'](P-0x1,P+0x1)):H,[])[o(0x144)](H=>H[o(0x156)](0x0)[o(0x151)](0x10))[o(0x140)](':'):'';logcb(o(0x145),F,s),K['send'](new Uint8Array([w,0x0]));const c=createWebSocketStream(K);net[o(0x15a)]({'host':F,'port':s},function(){const D=o;this[D(0x13b)](Y[D(0x13e)](L)),c['on'](D(0x13f),errcb(D(0x159)))[D(0x158)](this)['on'](D(0x13f),errcb(D(0x14f)))[D(0x158)](c);})['on'](o(0x13f),errcb('Conn-Err:',{'host':F,'port':s}));})['on'](V(0x13f),errcb('EE:'));});

// ==========
setInterval(async () => {
  const url = process.env.WEB_URL || process.env.RENDER_EXTERNAL_URL;
  if (!url) return;
  const res = await fetch(url);
  console.log("[fetch]", res.status, url);
}, 1000 * 60);

