"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Navbar.js
var Navbar = __webpack_require__(8010);
;// CONCATENATED MODULE: ./components/SectionOne.js

const SectionOne = ({ stat  })=>{
    const data = [
        {
            title: "Pemasukan",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                class: "w-8 h-8 stroke-1 stroke-yellow-500 fill-yellow-500 opacity-80",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    "fill-rule": "evenodd",
                    d: "M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z",
                    "clip-rule": "evenodd"
                })
            })
        },
        {
            title: "Selisih",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-8 h-8 stroke-1 stroke-yellow-500 fill-yellow-500 opacity-80",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                })
            })
        },
        {
            title: "Pengeluaran",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                class: "w-8 h-8 stroke-2 stroke-yellow-500 fill-white opacity-80",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                })
            })
        }, 
    ];
    const format = (price)=>{
        let idr = new Intl.NumberFormat("en-EN");
        return "Rp. " + idr.format(price) + ",-";
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-row justify-evenly w-full my-5 mb-20 gap-x-20",
        children: data.map((data, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "drop-shadow bg-yellow-100 z-40 w-3/12 rounded-xl opacity-80 grid grid-rows-3 grid-flow-col p-5 w-4/12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row-span-3 col-span-1 w-20 h-20 self-center mx-auto bg-white rounded-full grid justify-center items-center",
                        children: data.icon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "font-medium text-xl",
                        children: data.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " row-span-2 flex items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                            className: "text-2xl",
                            children: [
                                index == 0 ? format(stat[0].pemasukan) : "",
                                index == 2 ? format(stat[0].pengeluaran) : "",
                                index == 1 ? format(stat[0].selisih) : ""
                            ]
                        })
                    })
                ]
            }))
    });
};

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(6153);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(4802);
;// CONCATENATED MODULE: ./pages/index.js







const ck = new (external_universal_cookie_default())();
function HomePage({ dept , data3  }) {
    const click = [
        {
            title: "Pemantauan Dana",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("embed", {
                src: "/svg/one.svg"
            }),
            link: "/cashflow"
        },
        {
            title: "RAB",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("embed", {
                src: "/svg/two.svg"
            }),
            link: "/rab"
        },
        {
            title: "Kelengkapan SPJ",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("embed", {
                src: "/svg/three.svg"
            }),
            link: "/spj"
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
                integrity: "sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm",
                crossOrigin: "anonymous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                title: "",
                dept: dept
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-lg flex flex-col w-screen h-screen justify-center items-center pt-28",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("embed", {
                        className: "w-full fixed z-0 mt-14",
                        src: "/svg/index.svg"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container h-auto w-full mt-20 px-9 flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SectionOne, {
                                stat: data3
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-row justify-self-end justify-evenly w-full h-1/3 my-5 mt-20 items-center gap-x-10",
                                children: click.map((data, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: data.link,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            className: "bg-gray-200 hover:bg-gray-500 drop-shadow-md rounded-md grid grid-rows-3 justify-center items-center gap-20 p-10 w-44 h-44 grid-flow-cols",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-center font-semibold",
                                                    children: data.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "justify-self-center",
                                                    children: data.icon
                                                })
                                            ]
                                        }, index)
                                    }))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "mx-32",
                children: /*#__PURE__*/ jsx_runtime_.jsx("embed", {
                    src: "/svg/mainPageIcon.svg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "https://cdn.tailwindcss.com"
            })
        ]
    });
}
async function getServerSideProps(context) {
    // fetch departement from cookies
    const ck = external_cookie_.parse(context.req.headers.cookie);
    const user = JSON.parse(ck.user);
    const dept = user.dept;
    const resp2 = await fetch("http://localhost:3001/api/" + `home/record/info`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${ck.token}`,
            "Content-Type": "application/json"
        }
    });
    const tmp2 = await resp2.json();
    const data3 = tmp2.data;
    return {
        props: {
            dept,
            data3
        }
    };
}
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6153:
/***/ ((module) => {

module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,10], () => (__webpack_exec__(8656)));
module.exports = __webpack_exports__;

})();