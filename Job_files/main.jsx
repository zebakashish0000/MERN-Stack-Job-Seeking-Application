import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("C:/Users/HP/Music/job-seeking/frontend/src/main.jsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=81861782"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=81861782"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const createContext = __vite__cjsImport2_react["createContext"]; const useState = __vite__cjsImport2_react["useState"];
import __vite__cjsImport3_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=81861782"; const ReactDOM = __vite__cjsImport3_reactDom_client.__esModule ? __vite__cjsImport3_reactDom_client.default : __vite__cjsImport3_reactDom_client;
import App from "/src/App.jsx?t=1729535133346";
export const Context = /*#__PURE__*/ createContext({
    isAuthorized: false
});
const AppWrapper = ()=>{
    _s();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [user, setUser] = useState({});
    return /*#__PURE__*/ _jsxDEV(Context.Provider, {
        value: {
            isAuthorized,
            setIsAuthorized,
            user,
            setUser
        },
        children: /*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
            fileName: "C:/Users/HP/Music/job-seeking/frontend/src/main.jsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "C:/Users/HP/Music/job-seeking/frontend/src/main.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_s(AppWrapper, "Kjo+ljPhaHdrtjRlxbT9JgS0nBM=");
_c = AppWrapper;
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/ _jsxDEV(React.StrictMode, {
    children: /*#__PURE__*/ _jsxDEV(AppWrapper, {}, void 0, false, {
        fileName: "C:/Users/HP/Music/job-seeking/frontend/src/main.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "C:/Users/HP/Music/job-seeking/frontend/src/main.jsx",
    lineNumber: 28,
    columnNumber: 3
}, this));
var _c;
$RefreshReg$(_c, "AppWrapper");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP/Music/job-seeking/frontend/src/main.jsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP/Music/job-seeking/frontend/src/main.jsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC5qc3hcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgaXNBdXRob3JpemVkOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBBcHBXcmFwcGVyID0gKCkgPT4ge1xuICBjb25zdCBbaXNBdXRob3JpemVkLCBzZXRJc0F1dGhvcml6ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXNBdXRob3JpemVkLFxuICAgICAgICBzZXRJc0F1dGhvcml6ZWQsXG4gICAgICAgIHVzZXIsXG4gICAgICAgIHNldFVzZXIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxBcHAgLz5cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8QXBwV3JhcHBlciAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pOyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlJlYWN0RE9NIiwiQXBwIiwiQ29udGV4dCIsImlzQXV0aG9yaXplZCIsIkFwcFdyYXBwZXIiLCJzZXRJc0F1dGhvcml6ZWQiLCJ1c2VyIiwic2V0VXNlciIsIlByb3ZpZGVyIiwidmFsdWUiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIlN0cmljdE1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxhQUFhLEVBQUVDLFFBQVEsUUFBUSxRQUFRO0FBQ3ZELE9BQU9DLGNBQWMsbUJBQW1CO0FBQ3hDLE9BQU9DLFNBQVMsWUFBWTtBQUU1QixPQUFPLE1BQU1DLHdCQUFVSixjQUFjO0lBQ25DSyxjQUFjO0FBQ2hCLEdBQUc7QUFFSCxNQUFNQyxhQUFhOztJQUNqQixNQUFNLENBQUNELGNBQWNFLGdCQUFnQixHQUFHTixTQUFTO0lBQ2pELE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUixTQUFTLENBQUM7SUFFbEMscUJBQ0UsUUFBQ0csUUFBUU0sUUFBUTtRQUNmQyxPQUFPO1lBQ0xOO1lBQ0FFO1lBQ0FDO1lBQ0FDO1FBQ0Y7a0JBRUEsY0FBQSxRQUFDTjs7Ozs7Ozs7OztBQUdQO0dBaEJNRztLQUFBQTtBQWtCTkosU0FBU1UsVUFBVSxDQUFDQyxTQUFTQyxjQUFjLENBQUMsU0FBU0MsTUFBTSxlQUN6RCxRQUFDaEIsTUFBTWlCLFVBQVU7Y0FDZixjQUFBLFFBQUNWIn0=