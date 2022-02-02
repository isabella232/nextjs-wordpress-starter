"use strict";(self.webpackChunk_webdevstudios_nextjs_wordpress_starter=self.webpackChunk_webdevstudios_nextjs_wordpress_starter||[]).push([[898],{"./components/blocks/core/BlockPullQuote/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>BlockPullQuote});__webpack_require__("./node_modules/core-js/modules/es.string.anchor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");var PullQuote=__webpack_require__("./components/atoms/PullQuote/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function BlockPullQuote(_ref){var anchor=_ref.anchor,citation=_ref.citation,className=_ref.className,customMainColor=_ref.customMainColor,customTextColor=_ref.customTextColor,mainColorHex=_ref.mainColorHex,textColorHex=_ref.textColorHex,value=_ref.value,pullQuoteStyle={backgroundColor:mainColorHex||customMainColor||"inherit",color:textColorHex||customTextColor||"inherit"},styleSolid=className&&className.includes("is-style-solid-color");return className&&className.replace("is-style-solid-color","").replace("is-style-default",""),styleSolid||(pullQuoteStyle.backgroundColor="inherit"),(0,jsx_runtime.jsx)(PullQuote.Z,{citation,className,id:anchor,style:pullQuoteStyle,styleSolid,value})}BlockPullQuote.displayName="BlockPullQuote",BlockPullQuote.propTypes={anchor:prop_types_default().string,citation:prop_types_default().string,className:prop_types_default().string,customMainColor:prop_types_default().string,customTextColor:prop_types_default().string,mainColorHex:prop_types_default().string,textColorHex:prop_types_default().string,value:prop_types_default().string},BlockPullQuote.__docgenInfo={description:"Pull Quote Block\n\nThe core Pull Quote block from Gutenberg.\n\n@author WebDevStudios\n@param  {object}  props                 The component props.\n@param  {string}  props.anchor          Optional anchor/id.\n@param  {string}  props.citation        The optional author citation.\n@param  {string}  props.className       Optional classnames.\n@param  {string}  props.customMainColor The custom background color.\n@param  {string}  props.customTextColor The custom text color.\n@param  {string}  props.mainColorHex    The background color hex value.\n@param  {string}  props.textColorHex    The text color hex value.\n@param  {string}  props.value           The quote content of the block.\n@return {Element}                       The Quote component.",methods:[],displayName:"BlockPullQuote",props:{anchor:{type:{name:"string"},required:!1,description:""},citation:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},customMainColor:{type:{name:"string"},required:!1,description:""},customTextColor:{type:{name:"string"},required:!1,description:""},mainColorHex:{type:{name:"string"},required:!1,description:""},textColorHex:{type:{name:"string"},required:!1,description:""},value:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/blocks/core/BlockPullQuote/BlockPullQuote.js"]={name:"BlockPullQuote",docgenInfo:BlockPullQuote.__docgenInfo,path:"components/blocks/core/BlockPullQuote/BlockPullQuote.js"})}}]);