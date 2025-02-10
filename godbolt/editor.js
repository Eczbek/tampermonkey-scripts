// ==UserScript==
// @name Godbolt Editor Preset
// @description Configures things in godbolt's editor for me
// @version 0.0.0

// @author Eczbek
// @source https://raw.githubusercontent.com/Eczbek/tampermonkey-scripts/main/godbolt/editor.js

// @match https://*.godbolt.org/
// @match https://*.godbo.lt/
// @match https://*.compiler-explorer.com/
// @run-at document-start

// @grant GM_addStyle
// ==/UserScript==

GM_addStyle(`
.program-exec-output {
    font-family: Hack,monospace;
}
`);

localStorage.setItem("gl", JSON.stringify({
    "settings": {
        "hasHeaders": true,
        "constrainDragToContainer": false,
        "reorderEnabled": true,
        "selectionEnabled": false,
        "popoutWholeStack": false,
        "blockedPopoutsThrowError": true,
        "closePopoutsOnUnload": true,
        "showPopoutIcon": false,
        "showMaximiseIcon": true,
        "showCloseIcon": true,
        "responsiveMode": "onload",
        "tabOverlapAllowance": 0,
        "reorderOnTabMenuClick": true,
        "tabControlOffset": 10
    },
    "dimensions": {
        "borderWidth": 5,
        "borderGrabWidth": 15,
        "minItemHeight": 10,
        "minItemWidth": 10,
        "headerHeight": 20,
        "dragProxyWidth": 300,
        "dragProxyHeight": 200
    },
    "labels": {
        "close": "close",
        "maximise": "maximise",
        "minimise": "minimise",
        "popout": "open in new window",
        "popin": "pop in",
        "tabDropdown": "additional tabs"
    },
    "content": [
        {
            "type": "row",
            "isClosable": true,
            "reorderEnabled": true,
            "title": "",
            "content": [
                {
                    "type": "stack",
                    "width": 50,
                    "isClosable": true,
                    "reorderEnabled": true,
                    "title": "",
                    "activeItemIndex": 0,
                    "content": [
                        {
                            "type": "component",
                            "componentName": "codeEditor",
                            "componentState": {
                                "id": 1,
                                "source": "",
                                "lang": "c++",
                                "filename": false,
                                "fontScale": 13,
                                "fontUsePx": false
                            },
                            "isClosable": true,
                            "reorderEnabled": true,
                            "title": "Source"
                        }
                    ]
                },
                {
                    "type": "column",
                    "isClosable": true,
                    "reorderEnabled": true,
                    "title": "",
                    "width": 50,
                    "content": [
                        // Compiler panels
                        {
                            "type": "stack",
                            "header": {},
                            "isClosable": true,
                            "reorderEnabled": true,
                            "title": "",
                            "activeItemIndex": 0,
                            "width": 33.3,
                            "height": 50,
                            "content": [
                                {
                                    "type": "component",
                                    "componentName": "compiler",
                                    "componentState": {
                                        "id": 1,
                                        "compiler": "gsnapshot",
                                        "source": 1,
                                        "options": "-std=c++26 -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion",
                                        "filters": {
                                            "binaryObject": false,
                                            "binary": false,
                                            "execute": true,
                                            "intel": true,
                                            "demangle": true,
                                            "verboseDemangling": true,
                                            "labels": true,
                                            "libraryCode": true,
                                            "directives": true,
                                            "commentOnly": true,
                                            "trim": false,
                                            "debugCalls": false
                                        },
                                        "libs": [],
                                        "lang": "c++",
                                        "flagsViewOpen": false,
                                        "overrides": [],
                                        "paneName": "GCC",
                                        "fontScale": 13,
                                        "fontUsePx": false
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "GCC"
                                },
                                {
                                    "type": "component",
                                    "componentName": "compiler",
                                    "componentState": {
                                        "id": 2,
                                        "compiler": "clang_trunk",
                                        "source": 1,
                                        "options": "-std=c++26 -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion",
                                        "filters": {
                                            "binaryObject": false,
                                            "binary": false,
                                            "execute": true,
                                            "intel": true,
                                            "demangle": true,
                                            "verboseDemangling": true,
                                            "labels": true,
                                            "libraryCode": true,
                                            "directives": true,
                                            "commentOnly": true,
                                            "trim": false,
                                            "debugCalls": false
                                        },
                                        "libs": [],
                                        "lang": "c++",
                                        "flagsViewOpen": false,
                                        "overrides": [],
                                        "paneName": "Clang",
                                        "fontScale": 13,
                                        "fontUsePx": false
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "Clang"
                                },
                                {
                                    "type": "component",
                                    "componentName": "compiler",
                                    "componentState": {
                                        "id": 3,
                                        "compiler": "vcpp_v19_latest_x64",
                                        "source": 1,
                                        "options": "/std:c++latest /W4 /EHsc /Zc:preprocessor",
                                        "filters": {
                                            "binaryObject": false,
                                            "binary": false,
                                            "execute": true,
                                            "intel": true,
                                            "demangle": true,
                                            "verboseDemangling": true,
                                            "labels": true,
                                            "libraryCode": true,
                                            "directives": true,
                                            "commentOnly": true,
                                            "trim": false,
                                            "debugCalls": false
                                        },
                                        "libs": [],
                                        "lang": "c++",
                                        "flagsViewOpen": false,
                                        "overrides": [],
                                        "paneName": "MSVC",
                                        "fontScale": 13,
                                        "fontUsePx": false
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "MSVC"
                                }
                            ]
                        },
                        // Output panels
                        {
                            "type": "stack",
                            "header": {},
                            "isClosable": true,
                            "reorderEnabled": true,
                            "title": "",
                            "activeItemIndex": 0,
                            "height": 50,
                            "content": [
                                {
                                    "type": "component",
                                    "componentName": "output",
                                    "componentState": {
                                        "wrap": true,
                                        "id": 1,
                                        "compilerName": "x86-64 gcc (trunk)",
                                        "editorid": 1,
                                        "paneName": "GCC",
                                        "fontScale": 8,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "GCC"
                                },
                                {
                                    "type": "component",
                                    "componentName": "output",
                                    "componentState": {
                                        "wrap": true,
                                        "id": 2,
                                        "compilerName": "x86-64 clang (trunk)",
                                        "editorid": 1,
                                        "paneName": "Clang",
                                        "fontScale": 8,
                                        "fontUsePx": false
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "Clang"
                                },
                                {
                                    "type": "component",
                                    "componentName": "output",
                                    "componentState": {
                                        "wrap": true,
                                        "id": 3,
                                        "compilerName": "x64 msvc v19.latest",
                                        "editorid": 1,
                                        "paneName": "MSVC",
                                        "fontScale": 8,
                                        "fontUsePx": false
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "MSVC"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "isClosable": true,
    "reorderEnabled": true,
    "title": "",
    "openPopouts": [],
    "maximisedItemId": null
}));


/* DISABLED COMPILERS

edg-6_6-gcc-13
--c++23

nvcxx_x86_cxx24_11
-std=c++23 -Wpedantic -Wall -Wextra

ellcc170716
-std=c++2a -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion

icc191
-std=c++17 -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion

cl4302161
--c++14

djggp720
-std=c++17 -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion

*/
