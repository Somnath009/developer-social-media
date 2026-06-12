import { SignIn } from "@clerk/react";
import { Code2, Sparkles, Users, Zap } from "lucide-react";

const Login = () => {
    return (
        <div className="min-h-screen w-full relative bg-slate-50 font-sans overflow-hidden flex justify-center">
            {/* Global Background decorative elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-green-200/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-green-300/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-[20%] right-[20%] w-[30rem] h-[30rem] bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex min-h-screen w-full max-w-7xl mx-auto">
                {/* Left Panel - Brand/Vibe (Hidden on small screens) */}
                <div className="hidden lg:flex w-1/2 flex-col justify-between p-12 lg:p-24">
                    {/* Top Header */}
                    <div className="flex items-center gap-3">
                        <div className="bg-green-600 p-2 rounded-lg shadow-sm">
                            <Code2
                                className="w-6 h-6 text-white"
                                strokeWidth={2.5}
                            />
                        </div>
                        <span className="text-slate-900 text-3xl font-bold tracking-tight">
                            Pinng
                        </span>
                    </div>

                    {/* Center Content */}
                    <div className="max-w-lg mt-12">
                        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight mb-6">
                            Where developers <br />
                            <span className="text-green-600">
                                build together.
                            </span>
                        </h1>
                        <p className="text-slate-600 text-lg mb-8">
                            Join a global community of creators. Share your
                            projects, collaborate on open source, and accelerate
                            your career.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-700">
                                <div className="bg-white/60 backdrop-blur-sm p-2 rounded-md shadow-sm border border-slate-200/60">
                                    <Users className="w-5 h-5 text-green-600" />
                                </div>
                                <span className="font-medium">
                                    Connect with top engineering talent
                                </span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-700">
                                <div className="bg-white/60 backdrop-blur-sm p-2 rounded-md shadow-sm border border-slate-200/60">
                                    <Zap className="w-5 h-5 text-green-600" />
                                </div>
                                <span className="font-medium">
                                    Discover trending open-source projects
                                </span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-700">
                                <div className="bg-white/60 backdrop-blur-sm p-2 rounded-md shadow-sm border border-slate-200/60">
                                    <Sparkles className="w-5 h-5 text-green-600" />
                                </div>
                                <span className="font-medium">
                                    Showcase your portfolio and skills
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="text-slate-500 text-sm font-medium">
                        © {new Date().getFullYear()} Pinng Inc. All rights
                        reserved.
                    </div>
                </div>

                {/* Right Panel - Login Form */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 relative">
                    {/* Mobile Header (Only visible on small screens) */}
                    <div className="flex lg:hidden items-center gap-3 mb-12 absolute top-8 left-8 sm:top-12 sm:left-12">
                        <div className="bg-green-600 p-2 rounded-lg shadow-sm">
                            <Code2
                                className="w-6 h-6 text-white"
                                strokeWidth={2.5}
                            />
                        </div>
                        <span className="text-slate-900 text-xl font-bold tracking-tight">
                            Pinng
                        </span>
                    </div>

                    <div className="w-full max-w-md">
                        <div className="mb-8 text-center lg:text-left mt-16 lg:mt-0">
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">
                                Welcome back
                            </h2>
                            <p className="text-slate-500">
                                Please enter your details to sign in.
                            </p>
                        </div>

                        <div className="w-full flex justify-center lg:justify-start">
                            <SignIn
                                appearance={{
                                    variables: {
                                        colorPrimary: "#16a34a", // Tailwind green-600
                                    },
                                    elements: {
                                        rootBox: "w-full",
                                        card: "bg-white/60 backdrop-blur-xl shadow-2xl shadow-green-900/10 border border-white/50 w-full rounded-3xl",
                                        headerTitle: "hidden",
                                        headerSubtitle: "hidden",
                                        socialButtonsBlockButton:
                                            "border border-white/60 bg-white/40 hover:bg-white/80 hover:-translate-y-0.5 text-slate-900 font-medium transition-all duration-300 h-12 rounded-xl backdrop-blur-sm shadow-sm",
                                        socialButtonsBlockButtonText:
                                            "font-semibold text-sm",
                                        socialButtonsBlockButtonArrow:
                                            "text-slate-900 transition-transform group-hover:translate-x-1",
                                        socialButtonsProviderIcon: "w-5 h-5",
                                        dividerRow: "my-6",
                                        dividerText: "text-slate-500 text-sm font-medium",
                                        dividerLine: "bg-slate-200/60",
                                        formFieldLabel:
                                            "text-slate-900 font-semibold text-sm mb-1.5",
                                        formFieldInput:
                                            "border border-white/60 bg-white/40 focus:bg-white/80 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 rounded-xl h-12 text-slate-900 transition-all duration-300 backdrop-blur-sm",
                                        formButtonPrimary:
                                            "!bg-green-600 hover:!bg-green-500 text-white font-bold h-10 rounded-xl transition-all duration-300 shadow-lg shadow-green-600/30 mt-4 hover:shadow-green-500/40 hover:-translate-y-0.5",
                                        footerActionLink:
                                            "text-green-600 hover:text-green-500 font-bold transition-colors",
                                        identityPreviewEditButtonIcon:
                                            "text-green-600",
                                        formFieldWarningText: "text-orange-500 text-sm mt-1",
                                        formFieldErrorText: "text-red-500 text-sm mt-1",
                                        alert: "bg-red-50/80 backdrop-blur-sm border border-red-200/60 text-red-800 rounded-xl",
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
