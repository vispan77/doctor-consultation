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
"[project]/components/auth/AuthForm.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client"
// import { userAuthStore } from '@/store/authStore';
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react'
// import { Card, CardContent } from '../ui/card';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import { Eye, EyeOff } from 'lucide-react';
// interface AuthFormProps {
//     type: "login" | "signup";
//     userRole: "patient" | "doctor";
// }
// function AuthForm({ type, userRole }: AuthFormProps) {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });
//     const [showPassword, setShowPassword] = useState(false);
//     const [agreeTerms, setAgreeTerms] = useState(false);
//     const { registerDoctor, registerPatient, loginDoctor, loginPatient, loading, error } = userAuthStore();
//     const router = useRouter();
//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         if (type === "signup" && !agreeTerms) {
//             return;
//         };
//         try {
//             if (type === "signup") {
//                 if (userRole === "doctor") {
//                     await registerDoctor({
//                         name: formData.name,
//                         email: formData.email,
//                         password: formData.password
//                     })
//                 } else {
//                     await registerPatient({
//                         name: formData.name,
//                         email: formData.email,
//                         password: formData.password
//                     })
//                 }
//                 router.push(`/onboarding/${userRole}`);
//             } else {
//                 if (userRole === "doctor") {
//                     await loginDoctor(formData.email, formData.password);
//                     router.push(`/doctor/dashboard`);
//                 } else {
//                     await loginPatient(formData.email, formData.password);
//                     router.push(`/patient/dashboard`);
//                 }
//             };
//         } catch (error) {
//             console.log(error)
//             console.error(`${type} failed:`, error);
//         }
//     }
//     const handleGoogleAuth = () => {
//         window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google?type=${userRole}`
//     };
//     const isSignup = type === 'signup';
//     const title = isSignup ? 'Create a secure account' : 'Welcome back';
//     const buttonText = isSignup ? 'Create account' : 'Sign in';
//     const altLinkText = isSignup ? 'Already a member?' : "Don't have an account?";
//     const altLinkAction = isSignup ? 'Sign in' : 'Sign up';
//     const altLinkPath = isSignup ? `/login/${userRole}` : `/signup/${userRole}`;
//     return (
//         <div className="w-full max-w-md mx-auto">
//             <div className="text-center mb-8">
//                 <h1 className="text-2xl font-bold text-blue-900">MediCare+</h1>
//             </div>
//             <Card className="border-0 shadow-xl">
//                 <CardContent className="p-8">
//                     <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                         {title}
//                     </h2>
//                     {error && (
//                         <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
//                             {error}
//                         </div>
//                     )}
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         {/* Name field for signup */}
//                         {isSignup && (
//                             <div className="space-y-2">
//                                 <Label htmlFor="name">Full Name</Label>
//                                 <Input
//                                     id="name"
//                                     type="text"
//                                     value={formData.name}
//                                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                     className="border-0 border-b-2 border-gray-300 rounded-none focus:border-blue-600 focus-visible:ring-0"
//                                     required
//                                 />
//                             </div>
//                         )}
//                         {/* Email */}
//                         <div className="space-y-2">
//                             <Label htmlFor="email">Email</Label>
//                             <Input
//                                 id="email"
//                                 type="email"
//                                 value={formData.email}
//                                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                 className="border-0 border-b-2 border-gray-300 rounded-none focus:border-blue-600 focus-visible:ring-0"
//                                 required
//                             />
//                         </div>
//                         {/* Password */}
//                         <div className="space-y-2">
//                             <Label htmlFor="password">Password</Label>
//                             <div className="relative">
//                                 <Input
//                                     id="password"
//                                     type={showPassword ? 'text' : 'password'}
//                                     value={formData.password}
//                                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                                     className="border-0 border-b-2 border-gray-300 rounded-none focus:border-blue-600 focus-visible:ring-0 pr-10"
//                                     required
//                                 />
//                                 <Button
//                                     type="button"
//                                     variant="ghost"
//                                     size="sm"
//                                     className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                 >
//                                     {showPassword ? (
//                                         <EyeOff className="h-4 w-4 text-gray-400" />
//                                     ) : (
//                                         <Eye className="h-4 w-4 text-gray-400" />
//                                     )}
//                                 </Button>
//                             </div>
//                         </div>
//                     </form>
//                 </CardContent>
//             </Card>
//         </div>
//     )
// }
// export default AuthForm
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

//# sourceMappingURL=%5Broot-of-the-server%5D__b7bc5eb0._.js.map