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
// ==/UserScript==

localStorage.setItem("gl", JSON.stringify(
    {
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
                                "fontUsePx": true
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
                                        "options": "-std=c++26 -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion -fsanitize=address,leak,undefined",
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
                                        "options": "-std=c++26 -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion -fsanitize=address,leak,undefined",
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
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "MSVC"
                                }/*,
                                {
                                    "type": "component",
                                    "componentName": "compiler",
                                    "componentState": {
                                        "id": 4,
                                        "compiler": "edg-6_6-gcc-13",
                                        "source": 1,
                                        "options": "--c++23",
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
                                        "paneName": "EDG",
                                        "fontScale": 13,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "EDG"
                                },
                                {
                                    "type": "component",
                                    "componentName": "compiler",
                                    "componentState": {
                                        "id": 7,
                                        "compiler": "nvcxx_x86_cxx24_11",
                                        "source": 1,
                                        "options": "-std=c++23 -Wpedantic -Wall -Wextra",
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
                                        "paneName": "NVC++",
                                        "fontScale": 13,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "NVC++"
                                },
                                {
                                    "type": "component",
                                    "componentName": "compiler",
                                    "componentState": {
                                        "id": 8,
                                        "compiler": "ellcc170716",
                                        "source": 1,
                                        "options": "-std=c++2a -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion",
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
                                        "paneName": "ELLCC",
                                        "fontScale": 13,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "ELLCC"
                                },
                                {
                                    "type": "component",
                                    "componentName": "compiler",
                                    "componentState": {
                                        "id": 6,
                                        "compiler": "icc191",
                                        "source": 1,
                                        "options": "-std=c++17 -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion",
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
                                        "paneName": "ICC",
                                        "fontScale": 13,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "ICC"
                                },
                                {
                                    "type": "component",
                                    "componentName": "compiler",
                                    "componentState": {
                                        "id": 9,
                                        "compiler": "cl4302161",
                                        "source": 1,
                                        "options": "--c++14",
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
                                        "paneName": "TI CL430",
                                        "fontScale": 13,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "TI CL430"
                                },
                                {
                                    "type": "component",
                                    "componentName": "compiler",
                                    "componentState": {
                                        "id": 5,
                                        "compiler": "djggp720",
                                        "source": 1,
                                        "options": "-std=c++17 -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion",
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
                                        "paneName": "DJGPP",
                                        "fontScale": 13,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "DJGPP"
                                }*/
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
                                        "fontScale": 13,
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
                                        "fontScale": 13,
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
                                        "compilerName": "x64 msvc v19.latest",
                                        "editorid": 1,
                                        "paneName": "MSVC",
                                        "fontScale": 13,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "MSVC"
                                }/*,
                                {
                                    "type": "component",
                                    "componentName": "output",
                                    "componentState": {
                                        "wrap": true,
                                        "id": 4,
                                        "compilerName": "EDG 6.6 (GNU mode gcc 13)",
                                        "editorid": 1,
                                        "paneName": "EDG",
                                        "fontScale": 13,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "EDG"
                                },
                                {
                                    "type": "component",
                                    "componentName": "output",
                                    "componentState": {
                                        "wrap": true,
                                        "id": 7,
                                        "compilerName": "x86 nvc++ 24.11",
                                        "editorid": 1,
                                        "paneName": "NVC++",
                                        "fontScale": 13,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "NVC++"
                                },
                                {
                                    "type": "component",
                                    "componentName": "output",
                                    "componentState": {
                                        "wrap": true,
                                        "id": 8,
                                        "compilerName": "ellcc 2017-07-16",
                                        "editorid": 1,
                                        "paneName": "ELLCC",
                                        "fontScale": 13,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "ELLCC"
                                },
                                {
                                    "type": "component",
                                    "componentName": "output",
                                    "componentState": {
                                        "wrap": true,
                                        "id": 5,
                                        "compilerName": "x86 djgpp 7.2.0",
                                        "editorid": 1,
                                        "paneName": "ICC",
                                        "fontScale": 13,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "ICC"
                                },
                                {
                                    "type": "component",
                                    "componentName": "output",
                                    "componentState": {
                                        "wrap": true,
                                        "id": 9,
                                        "compilerName": "TI CL430 21.6.1",
                                        "editorid": 1,
                                        "paneName": "TI CL430",
                                        "fontScale": 13,
                                        "fontUsePx": true
                                    },
                                    "isClosable": true,
                                    "reorderEnabled": true,
                                    "title": "TI CL430"
                                }*/
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
}
/* {
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
                                "fontScale": 13,
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
                                        "options": "-std=c++26 -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion",
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
                                        "fontScale": 13,
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
                                        "options": "-std=c++26 -Wpedantic -Wall -Wextra -Wconversion -Wsign-conversion -Wunreachable-code",
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
                                        "fontScale": 13,
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
                                        "compiler": "vcpp_v19_latest_x64",
                                        "source": 1,
                                        "options": "/std:c++latest /Zc:preprocessor /W4 /permissive /EHsc /Zi",
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
                                        "fontScale": 13,
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
                                        "fontScale": 13,
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
                                        "fontScale": 13,
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
                                        "compilerName": "x64 msvc v19.latest",
                                        "editorid": 1,
                                        "paneName": "MSVC",
                                        "fontScale": 13,
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
} */
));
