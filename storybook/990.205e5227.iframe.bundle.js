"use strict";(self.webpackChunk_webdevstudios_nextjs_wordpress_starter=self.webpackChunk_webdevstudios_nextjs_wordpress_starter||[]).push([[990],{43990:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>BlockButton});__webpack_require__(15218),__webpack_require__(26699),__webpack_require__(32023),__webpack_require__(15306),__webpack_require__(74916);var Button=__webpack_require__(92348),getBlockStyles=__webpack_require__(33015),prop_types=__webpack_require__(45697),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__(85893);function BlockButton(_ref){var anchor=_ref.anchor,backgroundColorHex=_ref.backgroundColorHex,borderRadius=_ref.borderRadius,className=_ref.className,gradientHex=_ref.gradientHex,linkTarget=_ref.linkTarget,rel=_ref.rel,style=_ref.style,text=_ref.text,textColorHex=_ref.textColorHex,url=_ref.url,urlExternal=_ref.urlExternal,width=_ref.width,buttonStyle=(0,getBlockStyles.Z)({backgroundColorHex,gradientHex,textColorHex,width,style});borderRadius&&(buttonStyle.borderRadius=borderRadius+"px");var styleOutline=className&&className.includes("is-style-outline");return className&&className.replace("is-style-outline","").replace("is-style-fill",""),(0,jsx_runtime.jsx)(Button.Z,{attributes:{id:anchor||null,target:linkTarget||null,rel:rel||null},className,style:buttonStyle,styleOutline,text,url,urlExternal})}BlockButton.displayName="BlockButton",BlockButton.propTypes={anchor:prop_types_default().string,backgroundColorHex:prop_types_default().string,borderRadius:prop_types_default().number,className:prop_types_default().string,gradientHex:prop_types_default().string,linkTarget:prop_types_default().string,rel:prop_types_default().string,style:prop_types_default().object,text:prop_types_default().string,textColorHex:prop_types_default().string,url:prop_types_default().string,urlExternal:prop_types_default().bool,width:prop_types_default().number},BlockButton.__docgenInfo={description:"Button Block\n\nThe core Button block from Gutenberg.\n\n@author WebDevStudios\n@param  {object}  props                    The component properties.\n@param  {string}  props.anchor             Optional anchor/id.\n@param  {string}  props.backgroundColorHex The background color hex value.\n@param  {number}  props.borderRadius       The border radius in pixels.\n@param  {string}  props.className          Optional classnames.\n@param  {string}  props.gradientHex        The background gradient hex value.\n@param  {string}  props.linkTarget         The target for the link.\n@param  {string}  props.rel                The rel attribute for the link.\n@param  {object}  props.style              The style attributes.\n@param  {string}  props.text               The link label.\n@param  {string}  props.textColorHex       The text color hex value.\n@param  {string}  props.url                The link for the button.\n@param  {boolean} props.urlExternal        Whether link is external.\n@param  {number}  props.width              The width in percent.\n@return {Element}                          The Button component.",methods:[],displayName:"BlockButton",props:{anchor:{type:{name:"string"},required:!1,description:""},backgroundColorHex:{type:{name:"string"},required:!1,description:""},borderRadius:{type:{name:"number"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},gradientHex:{type:{name:"string"},required:!1,description:""},linkTarget:{type:{name:"string"},required:!1,description:""},rel:{type:{name:"string"},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""},text:{type:{name:"string"},required:!1,description:""},textColorHex:{type:{name:"string"},required:!1,description:""},url:{type:{name:"string"},required:!1,description:""},urlExternal:{type:{name:"bool"},required:!1,description:""},width:{type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/blocks/Gutenberg/BlockButton/BlockButton.js"]={name:"BlockButton",docgenInfo:BlockButton.__docgenInfo,path:"components/blocks/Gutenberg/BlockButton/BlockButton.js"})},33015:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getBlockStyles(_ref){var _style$color,_style$color2,_style$typography,_style$typography2,_style$color3,backgroundColorHex=_ref.backgroundColorHex,gradientHex=_ref.gradientHex,textColorHex=_ref.textColorHex,width=_ref.width,style=_ref.style,blockStyle={},background=gradientHex||(null==style||null===(_style$color=style.color)||void 0===_style$color?void 0:_style$color.gradient),backgroundcolor=backgroundColorHex||(null==style||null===(_style$color2=style.color)||void 0===_style$color2?void 0:_style$color2.background),fontsize=null==style||null===(_style$typography=style.typography)||void 0===_style$typography?void 0:_style$typography.fontSize,fontweight=null==style||null===(_style$typography2=style.typography)||void 0===_style$typography2?void 0:_style$typography2.fontWeight,textcolor=textColorHex||(null==style||null===(_style$color3=style.color)||void 0===_style$color3?void 0:_style$color3.text);return background&&(blockStyle.background=background),backgroundcolor&&(blockStyle.backgroundColor=backgroundcolor),fontsize&&(blockStyle.fontSize=fontsize),fontweight&&(blockStyle.fontWeight=fontweight),textcolor&&(blockStyle.color=textcolor),width&&(isNaN(width)?blockStyle.width=width:blockStyle.width=width+"%"),blockStyle}__webpack_require__.d(__webpack_exports__,{Z:()=>getBlockStyles})}}]);