(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/services/httpService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteWithAuth",
    ()=>deleteWithAuth,
    "getWithAuth",
    ()=>getWithAuth,
    "getWithoutAuth",
    ()=>getWithoutAuth,
    "httpService",
    ()=>httpService,
    "postWithAuth",
    ()=>postWithAuth,
    "postWithoutAuth",
    ()=>postWithoutAuth,
    "putWithAuth",
    ()=>putWithAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api");
class HttpService {
    getAuthHeaders() {
        const token = localStorage.getItem("token");
        return {
            "Content-Type": "application/json",
            ...token && {
                Authorization: `Bearer ${token}`
            }
        };
    }
    getHeaders(auth = true) {
        if (auth) {
            return this.getAuthHeaders();
        }
        return {
            "Content-Type": "application/json"
        };
    }
    async makeRequest(endPoint, method, body, auth = true, options) {
        try {
            const url = `${BASE_URL}${endPoint}`;
            const headers = {
                ...this.getHeaders(auth),
                ...options?.headers
            };
            const config = {
                method,
                headers,
                ...body && {
                    body: JSON.stringify(body)
                }
            };
            const response = await fetch(url, config);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || `HTTP ${response.status}: ${response.statusText}`);
            }
            return data;
        } catch (error) {
            console.error(`Api Error [${method} ${endPoint} ]:`, error);
            console.log(error);
            throw error;
        }
    }
    //Method with authentication
    async getWithAuth(endPoint, options) {
        return this.makeRequest(endPoint, 'GET', null, true, options);
    }
    async postWithAuth(endPoint, body, options) {
        return this.makeRequest(endPoint, 'POST', body, true, options);
    }
    async putWithAuth(endPoint, body, options) {
        return this.makeRequest(endPoint, 'PUT', body, true, options);
    }
    async deleteWithAuth(endPoint, options) {
        return this.makeRequest(endPoint, 'DELETE', null, true, options);
    }
    async postWithoutAuth(endPoint, body, options) {
        return this.makeRequest(endPoint, 'POST', body, false, options);
    }
    async getWithoutAuth(endPoint, options) {
        return this.makeRequest(endPoint, 'GET', null, false, options);
    }
}
const httpService = new HttpService();
const getWithAuth = httpService.getWithAuth.bind(httpService);
const postWithAuth = httpService.postWithAuth.bind(httpService);
const putWithAuth = httpService.putWithAuth.bind(httpService);
const deleteWithAuth = httpService.deleteWithAuth.bind(httpService);
const postWithoutAuth = httpService.postWithoutAuth.bind(httpService);
const getWithoutAuth = httpService.getWithoutAuth.bind(httpService);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/authStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userAuthStore",
    ()=>userAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/httpService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
;
const userAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        user: null,
        token: null,
        loading: false,
        error: null,
        isAuthenticated: false,
        setUser: (user, token)=>{
            set({
                user,
                token,
                isAuthenticated: true,
                error: null
            });
            localStorage.setItem('token', token);
        },
        clearError: ()=>set({
                error: null
            }),
        logout: ()=>{
            localStorage.removeItem("token");
            set({
                user: null,
                token: null,
                isAuthenticated: false,
                error: null
            });
        },
        loginDoctor: async (email, password)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postWithoutAuth"])("/auth/doctor/login", {
                    email,
                    password
                });
                get().setUser(response.data.user, response.data.token);
            } catch (error) {
                set({
                    error: error.message
                });
                throw error;
            } finally{
                set({
                    loading: false
                });
            }
        },
        loginPatient: async (email, password)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postWithoutAuth"])("/auth/patient/login", {
                    email,
                    password
                });
                get().setUser(response.data.user, response.data.token);
            } catch (error) {
                set({
                    error: error.message
                });
                throw error;
            } finally{
                set({
                    loading: false
                });
            }
        },
        registerDoctor: async (data)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postWithoutAuth"])("/auth/doctor/register", data);
                get().setUser(response.data.user, response.data.token);
            } catch (error) {
                set({
                    error: error.message
                });
                throw error;
            } finally{
                set({
                    loading: false
                });
            }
        },
        registerPatient: async (data)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postWithoutAuth"])("/auth/patient/register", data);
                get().setUser(response.data.user, response.data.token);
            } catch (error) {
                set({
                    error: error.message
                });
                throw error;
            } finally{
                set({
                    loading: false
                });
            }
        },
        fetchProfile: async ()=>{
            set({
                loading: true,
                error: null
            });
            try {
                const { user } = get();
                if (!user) throw new Error("No user found");
                const endPoint = user.type === 'doctor' ? "/doctor/me" : "/patient/me";
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWithAuth"])(endPoint);
                set({
                    user: {
                        ...user,
                        ...response.data
                    }
                });
                return response.data;
            } catch (error) {
                set({
                    error: error.message
                });
                return null;
            } finally{
                set({
                    loading: false
                });
            }
        },
        updateProfile: async (data)=>{
            set({
                loading: true,
                error: null
            });
            try {
                const { user } = get();
                if (!user) throw new Error("No user found");
                const endPoint = user.type === 'doctor' ? "/doctor/onboarding/update" : "/patient/onboarding/update";
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["putWithAuth"])(endPoint, data);
                set({
                    user: {
                        ...user,
                        ...response.data
                    }
                });
            } catch (error) {
                set({
                    error: error.message
                });
                throw error;
            } finally{
                set({
                    loading: false
                });
            }
        }
    }), {
    name: "auth-storage",
    partialize: (state)=>({
            user: state.user,
            token: state.token,
            isAuthenticated: state.isAuthenticated
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/auth/AuthForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AuthForm({ type, userRole }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [agreeTerms, setAgreeTerms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { registerDoctor, registerPatient, loginDoctor, loginPatient, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userAuthStore"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (type === "signup" && !agreeTerms) {
            return;
        }
        ;
        try {
            if (type === "signup") {
                if (userRole === "doctor") {
                    await registerDoctor({
                        name: formData.name,
                        email: formData.email,
                        password: formData.password
                    });
                } else {
                    await registerPatient({
                        name: formData.name,
                        email: formData.email,
                        password: formData.password
                    });
                }
                router.push(`/onboarding/${userRole}`);
            } else {
                if (userRole === "doctor") {
                    await loginDoctor(formData.email, formData.password);
                    router.push(`/doctor/dashboard`);
                } else {
                    await loginPatient(formData.email, formData.password);
                    router.push(`/patient/dashboard`);
                }
            }
            ;
        } catch (error) {
            console.log(error);
            console.error(`${type} failed:`, error);
        }
    };
    const handleGoogleAuth = ()=>{
        window.location.href = `${"TURBOPACK compile-time value", "http://localhost:8000/api"}/auth/google?type=${userRole}`;
    };
    const isSignup = type === 'signup';
    const title = isSignup ? 'Create a secure account' : 'Welcome back';
    const buttonText = isSignup ? 'Create account' : 'Sign in';
    const altLinkText = isSignup ? 'Already a member?' : "Don't have an account?";
    const altLinkAction = isSignup ? 'Sign in' : 'Sign up';
    const altLinkPath = isSignup ? `/login/${userRole}` : `/signup/${userRole}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-blue-900",
                    children: "MediCare+"
                }, void 0, false, {
                    fileName: "[project]/components/auth/AuthForm.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/auth/AuthForm.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-0 shadow-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-6",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/auth/AuthForm.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/auth/AuthForm.tsx",
                            lineNumber: 96,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-6",
                            children: isSignup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: 'space-y-2"'
                            }, void 0, false, {
                                fileName: "[project]/components/auth/AuthForm.tsx",
                                lineNumber: 104,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/auth/AuthForm.tsx",
                            lineNumber: 101,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/auth/AuthForm.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/auth/AuthForm.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/auth/AuthForm.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}
_s(AuthForm, "dleBXmin1Xug1H8ApUL6l5/qhrw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthForm;
const __TURBOPACK__default__export__ = AuthForm;
var _c;
__turbopack_context__.k.register(_c, "AuthForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_8c14335f._.js.map