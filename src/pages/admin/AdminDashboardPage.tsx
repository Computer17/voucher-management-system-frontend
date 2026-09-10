import {
    Users,
    FileText,
    ArrowDownToLine,
    ArrowUpFromLine,
    Settings,
    ShieldCheck,
    LogOut,
} from "lucide-react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import type { RootState } from "../../redux/store/store";

export default function AdminDashboardPage() {
    const navigate = useNavigate();

    const user = useSelector(
        (state: RootState) => state.auth.user
    );

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate("/login", { replace: true });
    };

    return (
        <div className="min-h-screen bg-background p-4 sm:p-6">
            <div className="mx-auto w-full max-w-7xl">

                {/* Header */}
                <div className="mb-6 flex flex-col gap-4 rounded-2xl bg-surface p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck
                                size={24}
                                className="text-primary"
                            />
                            <h1 className="text-xl font-bold text-text-primary sm:text-2xl">
                                Admin Dashboard
                            </h1>
                        </div>

                        <p className="mt-1 text-sm text-text-secondary">
                            Welcome, {user?.name || "Administrator"}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-2 rounded-lg border border-surface-border px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-surface-border"
                    >
                        <LogOut size={17} />
                        Logout
                    </button>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-2xl bg-surface p-5 shadow-sm">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft-bg">
                            <Users size={22} />
                        </div>

                        <p className="text-sm text-text-secondary">
                            Total Users
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-text-primary">
                            0
                        </h2>
                    </div>

                    <div className="rounded-2xl bg-surface p-5 shadow-sm">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft-bg">
                            <FileText size={22} />
                        </div>

                        <p className="text-sm text-text-secondary">
                            Total Vouchers
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-text-primary">
                            0
                        </h2>
                    </div>

                    <div className="rounded-2xl bg-surface p-5 shadow-sm">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft-bg">
                            <ArrowDownToLine size={22} />
                        </div>

                        <p className="text-sm text-text-secondary">
                            Income Vouchers
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-text-primary">
                            0
                        </h2>
                    </div>

                    <div className="rounded-2xl bg-surface p-5 shadow-sm">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft-bg">
                            <ArrowUpFromLine size={22} />
                        </div>

                        <p className="text-sm text-text-secondary">
                            Expense Vouchers
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-text-primary">
                            0
                        </h2>
                    </div>
                </div>

                {/* Admin Menu */}
                <div className="mt-6 rounded-2xl bg-surface p-5 shadow-sm">
                    <h2 className="mb-5 text-lg font-bold text-text-primary">
                        Administration
                    </h2>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

                        <button
                            type="button"
                            onClick={() => navigate("/dashboard/operators")}
                            className="flex items-center gap-3 rounded-xl border border-surface-border p-4 text-left transition hover:bg-surface-border"
                        >
                            <Users size={21} />
                            <div>
                                <p className="font-semibold text-text-primary">
                                    Operators
                                </p>
                                <p className="text-xs text-text-secondary">
                                    Manage operators
                                </p>
                            </div>
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                navigate("/dashboard/accounts/income-vouchers")
                            }
                            className="flex items-center gap-3 rounded-xl border border-surface-border p-4 text-left transition hover:bg-surface-border"
                        >
                            <ArrowDownToLine size={21} />
                            <div>
                                <p className="font-semibold text-text-primary">
                                    Income Vouchers
                                </p>
                                <p className="text-xs text-text-secondary">
                                    Manage income vouchers
                                </p>
                            </div>
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                navigate("/dashboard/accounts/expense-vouchers")
                            }
                            className="flex items-center gap-3 rounded-xl border border-surface-border p-4 text-left transition hover:bg-surface-border"
                        >
                            <ArrowUpFromLine size={21} />
                            <div>
                                <p className="font-semibold text-text-primary">
                                    Expense Vouchers
                                </p>
                                <p className="text-xs text-text-secondary">
                                    Manage expense vouchers
                                </p>
                            </div>
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                navigate("/dashboard/general-settings")
                            }
                            className="flex items-center gap-3 rounded-xl border border-surface-border p-4 text-left transition hover:bg-surface-border"
                        >
                            <Settings size={21} />
                            <div>
                                <p className="font-semibold text-text-primary">
                                    General Settings
                                </p>
                                <p className="text-xs text-text-secondary">
                                    System configuration
                                </p>
                            </div>
                        </button>

                    </div>
                </div>

                {/* Admin Information */}
                <div className="mt-6 rounded-2xl bg-surface p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-bold text-text-primary">
                        Administrator Information
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="text-xs text-text-secondary">
                                Name
                            </p>
                            <p className="mt-1 font-semibold text-text-primary">
                                {user?.name || "Administrator"}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-text-secondary">
                                Email
                            </p>
                            <p className="mt-1 font-semibold text-text-primary">
                                {user?.email || "—"}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-text-secondary">
                                Role
                            </p>
                            <p className="mt-1 font-semibold text-text-primary">
                                {user?.role || "ADMIN"}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-text-secondary">
                                Status
                            </p>
                            <p className="mt-1 font-semibold text-text-primary">
                                Active
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
