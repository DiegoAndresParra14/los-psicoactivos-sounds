const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
test('invalid demo checkout does not navigate; valid checkout does not transmit form fields',()=>{
 const source=fs.readFileSync(path.join(__dirname,'../checkout.js'),'utf8');
 let submit,navigations=[];
 vm.runInNewContext(source,{document:{getElementById:()=>({addEventListener:(event,fn)=>{assert.equal(event,'submit');submit=fn;}})},window:{location:{assign:url=>navigations.push(url)}}});
 let prevented=0;
 submit({preventDefault(){prevented++;},currentTarget:{reportValidity:()=>false}});
 assert.equal(navigations.length,0);
 submit({preventDefault(){prevented++;},currentTarget:{reportValidity:()=>true}});
 assert.equal(prevented,2);assert.deepEqual(navigations,['success.html']);
 const html=fs.readFileSync(path.join(__dirname,'../checkout.html'),'utf8');
 assert.match(html,/<button type="submit" form="checkout-form"/);
 assert.doesNotMatch(html,/<a href="success.html"/);
});
