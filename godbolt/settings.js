// ==UserScript==
// @name Godbolt Settings Preset
// @description Configures things in godbolt settings for me
// @version 0.0.0

// @author Eczbek
// @source https://raw.githubusercontent.com/Eczbek/tampermonkey-scripts/main/godbolt/settings.js

// @match https://*.godbolt.org/*
// @match https://*.godbo.lt/*
// @match https://*.compiler-explorer.com/*
// @run-at document-start
// ==/UserScript==

localStorage.setItem("settings", JSON.stringify({
    "defaultLanguage": "c++",
    "allowStoreCodeDebug": false,
    "alwaysEnableAllSchemes": true,
    "autoCloseBrackets": true,
    "autoCloseQuotes": true,
    "autoSurround": true,
    "autoIndent": true,
    "colouriseAsm": false,
    "colouriseBrackets": true,
    "compileOnChange": true,
    "editorsFLigatures": false,
    "enableCodeLens": true,
    "enableCommunityAds": false,
    "enableCtrlStree": false,
    "enableSharingPopover": false,
    "executorCompileOnChange": true,
    "shakeStatusIconOnWarnings": true,
    "formatOnCompile": false,
    "hoverShowAsmDoc": true,
    "hoverShowSource": true,
    "indefiniteLineHighlight": false,
    "keepMultipleTabs": false,
    "keepSourcesOnLangChange": false,
    "newEditorLastLang": false,
    "showMinimap": true,
    "showQuickSuggestions": false,
    "useCustomContextMenu": true,
    "useSpaces": false,
    "useVim": false,
    "wordWrap": true,
    "colourScheme": "gray-shade",
    "theme": "darkplus",
    "defaultFontScale": 13,
    "formatBase": "Google",
    "enableCtrlS": "false",
    "delayAfterChange": 3000,
    "tabWidth": 4,
    "editorsFFont": "Hack, monospace"
}));
