// ==UserScript==
// @name Godbolt Editor Preset
// @description Configures things in godbolt's editor for me
// @version 0.1.1

// @author Eczbek
// @source https://raw.githubusercontent.com/Eczbek/tampermonkey-scripts/main/godbolt/editor.js

// @match https://*.godbolt.org/
// @run-at document-start
// ==/UserScript==

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
                                "selection": {
                                    "startLineNumber": 2,
                                    "startColumn": 1,
                                    "endLineNumber": 2,
                                    "endColumn": 1,
                                    "selectionStartLineNumber": 2,
                                    "selectionStartColumn": 1,
                                    "positionLineNumber": 2,
                                    "positionColumn": 1
                                },
                                "filename": false,
                                "fontScale": 14,
                                "fontUsePx": true
                            },
                            "isClosable": true,
                            "reorderEnabled": true,
                            "title": "C++ source #1"
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
                        {
                            "type": "stack",
                            "header": {},
                            "isClosable": true,
                            "reorderEnabled": true,
                            "title": "",
                            "activeItemIndex": 0,
                            "width": 33.291536050156736,
                            "height": 50,
                            "content": [
                                {
                                    "type": "component",
                                    "componentName": "compiler",
                                    "componentState": {
                                        "id": 1,
                                        "compiler": "gsnapshot",
                                        "source": 1,
                                        "options": "-Og -std=c++26 -Werror -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion -Wcast-qual -Wfloat-equal -g -fsanitize=address -fsanitize=undefined -fverbose-asm",
                                        "filters": {
                                            "binaryObject": false,
                                            "binary": false,
                                            "execute": true,
                                            "intel": true,
                                            "demangle": true,
                                            "labels": true,
                                            "libraryCode": true,
                                            "directives": true,
                                            "commentOnly": true,
                                            "trim": false,
                                            "debugCalls": false
                                        },
                                        "libs": [],
                                        "lang": "c++",
                                        "selection": {
                                            "startLineNumber": 1,
                                            "startColumn": 1,
                                            "endLineNumber": 1,
                                            "endColumn": 1,
                                            "selectionStartLineNumber": 1,
                                            "selectionStartColumn": 1,
                                            "positionLineNumber": 1,
                                            "positionColumn": 1
                                        },
                                        "flagsViewOpen": false,
                                        "overrides": [],
                                        "paneName": "GCC",
                                        "fontScale": 14,
                                        "fontUsePx": true
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
                                        "options": "-Og -std=c++26 -Werror -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion -Wcast-qual -Wfloat-equal -Wunreachable-code -g -fsanitize=address -fsanitize=undefined -fverbose-asm",
                                        "filters": {
                                            "binaryObject": false,
                                            "binary": false,
                                            "execute": true,
                                            "intel": true,
                                            "demangle": true,
                                            "labels": true,
                                            "libraryCode": true,
                                            "directives": true,
                                            "commentOnly": true,
                                            "trim": false,
                                            "debugCalls": false
                                        },
                                        "libs": [],
                                        "lang": "c++",
                                        "selection": {
                                            "startLineNumber": 1,
                                            "startColumn": 1,
                                            "endLineNumber": 1,
                                            "endColumn": 1,
                                            "selectionStartLineNumber": 1,
                                            "selectionStartColumn": 1,
                                            "positionLineNumber": 1,
                                            "positionColumn": 1
                                        },
                                        "flagsViewOpen": false,
                                        "overrides": [],
                                        "paneName": "Clang",
                                        "fontScale": 14,
                                        "fontUsePx": true
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
                                        "compiler": "vcpp_v19_latest_x86",
                                        "source": 1,
                                        "options": "/Od /std:c++latest /Zc:preprocessor /W4 /WX /permissive /EHsc /Zi /fsanitize=address",
                                        "filters": {
                                            "binaryObject": false,
                                            "binary": false,
                                            "execute": true,
                                            "intel": true,
                                            "demangle": true,
                                            "labels": true,
                                            "libraryCode": true,
                                            "directives": true,
                                            "commentOnly": true,
                                            "trim": false,
                                            "debugCalls": false
                                        },
                                        "libs": [],
                                        "lang": "c++",
                                        "selection": {
                                            "startLineNumber": 1,
                                            "startColumn": 1,
                                            "endLineNumber": 1,
                                            "endColumn": 1,
                                            "selectionStartLineNumber": 1,
                                            "selectionStartColumn": 1,
                                            "positionLineNumber": 1,
                                            "positionColumn": 1
                                        },
                                        "flagsViewOpen": false,
                                        "overrides": [],
                                        "paneName": "MSVC",
                                        "fontScale": 14,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "MSVC"
                                }
                            ]
                        },
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
                                        "fontScale": 14,
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
                                        "fontScale": 14,
                                        "fontUsePx": true
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
                                        "compilerName": "x86 msvc v19.latest",
                                        "editorid": 1,
                                        "paneName": "MSVC",
                                        "fontScale": 14,
                                        "fontUsePx": true
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
