module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(auth)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(auth)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/services/httpService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/store/authStore.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userAuthStore",
    ()=>userAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/httpService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-rsc] (ecmascript)");
;
;
;
const userAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
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
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postWithoutAuth"])("/auth/doctor/login", {
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
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postWithoutAuth"])("/auth/patient/login", {
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
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postWithoutAuth"])("/auth/doctor/register", data);
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
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postWithoutAuth"])("/auth/patient/register", data);
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
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWithAuth"])(endPoint);
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
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$httpService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["putWithAuth"])(endPoint, data);
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
}),
"[project]/components/auth/AuthForm.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$authStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/authStore.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
;
function AuthForm({ type, userRole }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: ""
    });
    const [showPassoword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [agreeTerms, setAgreeTerms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const { registerDoctor, registerPatient, loginDoctor, loginPatient, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$authStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["userAuthStore"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRouter"])();
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
                        passowrd: formData.password
                    });
                } else {
                    await registerPatient({
                        name: formData.name,
                        email: formData.email,
                        passowrd: formData.password
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
        const handleGoogleAuth = ()=>{
            window.location.href = `${"TURBOPACK compile-time value", "http://localhost:8000/api"}/auth/google?type=${userRole}`;
        };
        const isSignup = type === 'signup';
        const title = isSignup ? 'Create a secure account' : 'Welcome back';
        const buttonText = isSignup ? 'Create account' : 'Sign in';
        const altLinkText = isSignup ? 'Already a member?' : "Don't have an account?";
        const altLinkAction = isSignup ? 'Sign in' : 'Sign up';
        const altLinkPath = isSignup ? `/login/${userRole}` : `/signup/${userRole}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
        fileName: "[project]/components/auth/AuthForm.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = AuthForm;
}),
"[project]/app/(auth)/signup/patient/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$AuthForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/AuthForm.tsx [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: 'Create Patient Account - MediCare+',
    description: 'Join MediCare+ to access quality healthcare consultations from certified doctors.'
};
function page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$AuthForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            type: "signup",
            userRole: "patient"
        }, void 0, false, {
            fileName: "[project]/app/(auth)/signup/patient/page.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(auth)/signup/patient/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = page;
}),
"[project]/app/(auth)/signup/patient/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(auth)/signup/patient/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__36e5b8ff._.js.map