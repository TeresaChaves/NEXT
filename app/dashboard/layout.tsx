import SideNav from "../ui/dashboard/sidenav"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SideNav />
            {children}
        </div>
    )
}