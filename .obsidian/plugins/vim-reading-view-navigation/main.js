/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
If you want to view the source, visit the plugin’s github repository:
https://github.com/kometenstaub/obsidian-vim-reading-view-navigation

It uses 'around' from 'monkey-around' which is ISC-licensed.
https://github.com/pjeby/monkey-around/blob/40544faba6373fc3787cdde186ee24b2ddb462a5/package.json#L8
https://www.npmjs.com/package/monkey-around


This plugin is MIT-licensed:
	MIT License
	
	Copyright (c) 2022 kometenstaub and contributors
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	
*/

var u=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var f=(n,i)=>{for(var e in i)u(n,e,{get:i[e],enumerable:!0})},y=(n,i,e,t)=>{if(i&&typeof i=="object"||typeof i=="function")for(let r of v(i))!h.call(n,r)&&r!==e&&u(n,r,{get:()=>i[r],enumerable:!(t=d(i,r))||t.enumerable});return n};var m=n=>y(u({},"__esModule",{value:!0}),n);var V={};f(V,{default:()=>p});module.exports=m(V);var a=require("obsidian");function w(n,i){let e=Object.keys(i).map(t=>S(n,t,i[t]));return e.length===1?e[0]:function(){e.forEach(t=>t())}}function S(n,i,e){let t=n[i],r=n.hasOwnProperty(i),s=e(t);return t&&Object.setPrototypeOf(s,t),Object.setPrototypeOf(o,s),n[i]=o,c;function o(...l){return s===t&&n[i]===o&&c(),s.apply(this,l)}function c(){n[i]===o&&(r?n[i]=t:delete n[i]),s!==t&&(s=t,Object.setPrototypeOf(o,t||Function))}}var k={scrollDifference:1},E=(n,i)=>{let e=i;n.register([],"j",t=>{let r=app.workspace.getActiveViewOfType(a.MarkdownView);return e.keyArray=e.resetJumpTop(),r.getMode()==="preview"&&e.scrollDown(r),!0}),n.register([],"k",t=>{let r=app.workspace.getActiveViewOfType(a.MarkdownView);return e.keyArray=e.resetJumpTop(),r.getMode()==="preview"&&e.scrollUp(r),!0}),n.register([],"g",t=>app.workspace.getActiveViewOfType(a.MarkdownView).getMode()==="preview"&&t.key==="g"&&e.keyArray.length===0?(addEventListener("keydown",e.jumpTopEvent),e.keyArray.push(t.key),!1):!0),n.register([],"g",t=>{let r=app.workspace.getActiveViewOfType(a.MarkdownView);return r.getMode()==="preview"&&t.key==="G"&&(e.keyArray=e.resetJumpTop(),e.jumpBottom(r)),!0}),n.register(["Shift"],"g",t=>{let r=app.workspace.getActiveViewOfType(a.MarkdownView);return e.keyArray=e.resetJumpTop(),r.getMode()==="preview"&&e.jumpBottom(r),!0})},p=class extends a.Plugin{constructor(){super(...arguments);this.keyArray=[];this.uninstall=[];this.leaf=null;this.ids=new Set}async onload(){await this.loadSettings(),this.addSettingTab(new g(this.app,this)),this.jumpTopEvent=s=>{if(s.key!="g")this.keyArray=this.resetJumpTop();else{let o=app.workspace.getActiveViewOfType(a.MarkdownView);this.doScroll(o,0),this.keyArray=this.resetJumpTop()}};let e=this.navScope=new a.Scope(app.scope);E(this.navScope,this);let t=this;this.registerEvent(app.workspace.on("active-leaf-change",s=>{if(s.view.getViewType()==="markdown"){if(t.leaf=s,this.ids.has(s.id))return;this.ids.add(s.id),s.view.scope||(s.view.scope=e),this.uninstall.push(w(s.view.previewMode.search,{hide(o){return function(...c){let l=o&&o.apply(this,c);return s.view.scope=e,s.view.containerEl.removeEventListener("keydown",r,{capture:!1}),l}}})),this.uninstall.push(w(s.view,{showSearch(o){return function(...c){let l=o&&o.apply(this,c);return t.leaf.view.containerEl.addEventListener("keydown",r,{capture:!1}),l}}}))}}));let r=this.listener=s=>{s.key==="Escape"&&(this.leaf.view.scope=e,this.leaf.view.containerEl.removeEventListener("keydown",r,{capture:!1}))};console.log("Vim Reading View Navigation loaded.")}async onunload(){removeEventListener("keydown",this.jumpTopEvent);for(let e of this.uninstall)e();app.workspace.iterateAllLeaves(e=>{e.view.getViewType()==="markdown"&&e.view.scope===this.navScope&&(e.view.scope=null,e.view.containerEl.removeEventListener("keydown",this.listener,{capture:!1}))}),console.log("Vim Reading View Navigation unloaded.")}resetJumpTop(){return removeEventListener("keydown",this.jumpTopEvent),[]}getScroll(e){return e.previewMode.getScroll()}scrollDown(e){let r=this.getScroll(e)+this.settings.scrollDifference;this.doScroll(e,r)}scrollUp(e){let r=this.getScroll(e)-this.settings.scrollDifference;this.doScroll(e,r)}jumpBottom(e){let t=this.getScroll(e);this.doScroll(e,t+5);let r=this.getScroll(e);for(;r!=t;)t=r,this.doScroll(e,t+5),r=this.getScroll(e)}doScroll(e,t){e.setEphemeralState({scroll:t})}async loadSettings(){this.settings=Object.assign({},k,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}},g=class extends a.PluginSettingTab{constructor(e,t){super(e,t);this.plugin=t}display(){let{containerEl:e}=this,{settings:t}=this.plugin;e.empty(),e.createEl("h2",{text:"Vim Reading View Navigation"}),new a.Setting(e).setName("Scroll amount").setDesc("It must be greater than 0.").addText(r=>{r.setPlaceholder("Enter a number greater than 0. Default: 1").setValue(t.scrollDifference.toString()).onChange(async s=>{let o=Number.parseInt(s);Number.isInteger(o)&&o>0?(t.scrollDifference=o,await this.plugin.saveSettings()):new a.Notice("Please enter an integer greater than 0.")})})}};
