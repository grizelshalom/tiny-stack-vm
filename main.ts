import{readdirSync as R,readFileSync as F,writeFileSync as W,mkdirSync as K}from"fs"
let{MAKEFUN_INPUT_DIR:A="/input",MAKEFUN_OUTPUT_DIR:B="/output"}=process.env
for(let d of R(A)){let P=A+"/"+d,Q=B+"/"+d,p=F(P+"/program.bin"),g=F(P+"/input.bin"),n=p.length,S=[],C=[],Y=[],O="",s=1e6,c=0,x=0,h=0,q=0,e=0
try{for(;;){if(!s|q<0|q>=n)throw 9+!s;let y=p[q],v=("!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%\"%".charCodeAt(y)||0)-33,m=v>>4;if(v<0||q+m>=n)throw 9-4*(v<0);s--;let u=v>>2&3;if(c<u|c-u+(v&3)>256)throw 3-(c<u);q+=1+m
if(y<8){if(!y)break;if(y<3)S[c++]=p.readIntLE(q-m,m);else if(y==3)c--;else if(y==5)[S[c-1],S[c-2]]=[S[c-2],S[c-1]];else if(y<7)S[c++]=S[c-2-(y>5)];else[S[c-3],S[c-2],S[c-1]]=[S[c-2],S[c-1],S[c-3]]}
else if(y<35){let b=S[c-1],a=S[c-2],U=a>>>0,V=b>>>0;if(!b&y>18&y<23)throw 4;c-=u;S[c++]=[a+b|0,a-b|0,Math.imul(a,b),a/b|0,a%b|0,U/V|0,U%V|0,-b|0,a&b,a|b,a^b,~b,a<<b,a>>b,a>>>b|0,0,+(a==b),+(a<b),+(U<V)][y-16]}
else if(y<53){if(y>51){if(!x)throw 8;q=C[--x]}else if(y==51){if(x>63)throw 7;C[x++]=q;q=p.readUIntLE(q-2,2)}else if(y<49||(S[--c]==0)==(y<50))q+=p.readInt16LE(q-2)}
else if(y<66){let a=S[c-1];if(a<0|a>255)throw 6;y==64?S[c-1]=Y[a]||0:(c-=2,Y[a]=S[c])}
else{if(y<82){let v=S[c-1],t=y==80?v+"":String.fromCharCode(v&255);if(O.length>65536-t.length)throw 11;O+=t;c--}else if(y==82)S[c++]=g[h++]??-1;else throw S[--c]&255}
}}catch(E){e=E}
K(Q);W(Q+"/stdout.bin",O,"latin1");W(Q+"/exit.txt",e+"")}