import{f as $,i as p}from"./index-74e10c89.js";function D(t){return typeof t=="function"?t():p(t)}const w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function Y(t,e,n,a){let o=t<12?"AM":"PM";return a&&(o=o.split("").reduce((u,c)=>u+=`${c}.`,"")),n?o.toLowerCase():o}function A(t,e,n={}){var a;const o=t.getFullYear(),u=t.getMonth(),c=t.getDate(),r=t.getHours(),s=t.getMinutes(),i=t.getSeconds(),M=t.getMilliseconds(),h=t.getDay(),l=(a=n.customMeridiem)!=null?a:Y,m={YY:()=>String(o).slice(-2),YYYY:()=>o,M:()=>u+1,MM:()=>`${u+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(n.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(n.locales,{month:"long"}),D:()=>String(c),DD:()=>`${c}`.padStart(2,"0"),H:()=>String(r),HH:()=>`${r}`.padStart(2,"0"),h:()=>`${r%12||12}`.padStart(1,"0"),hh:()=>`${r%12||12}`.padStart(2,"0"),m:()=>String(s),mm:()=>`${s}`.padStart(2,"0"),s:()=>String(i),ss:()=>`${i}`.padStart(2,"0"),SSS:()=>`${M}`.padStart(3,"0"),d:()=>h,dd:()=>t.toLocaleDateString(n.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(n.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(n.locales,{weekday:"long"}),A:()=>l(r,s),AA:()=>l(r,s,!1,!0),a:()=>l(r,s,!0),aa:()=>l(r,s,!0,!0)};return e.replace(y,(S,d)=>{var g,f;return(f=d??((g=m[S])==null?void 0:g.call(m)))!=null?f:S})}function H(t){if(t===null)return new Date(Number.NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(w);if(e){const n=e[2]-1||0,a=(e[7]||"0").substring(0,3);return new Date(e[1],n,e[3]||1,e[4]||0,e[5]||0,e[6]||0,a)}}return new Date(t)}function L(t,e="HH:mm:ss",n={}){return $(()=>A(H(D(t)),D(e),n))}function E(t,e){return t&&e?L(t,e).value:""}export{E as u};
