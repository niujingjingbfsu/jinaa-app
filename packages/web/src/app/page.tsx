import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <AppLayout title="Dashboard">
      <div className="flex flex-col gap-6">
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Welcome to JINAA</h2>
              <p className="text-sm text-muted-foreground">AI-native SaaS Platform — Phase 1 Alpha</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Infrastructure is set up. Product features coming soon — waiting on product vision from the board.
          </p>
          <Button size="sm">
            Get started <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Monorepo", status: "Ready", desc: "Turborepo + TypeScript strict" },
            { label: "CI/CD", status: "Ready", desc: "GitHub Actions pipeline" },
            { label: "Database", status: "Pending", desc: "Waiting on Supabase provisioning" },
            { label: "Vercel Deploy", status: "Pending", desc: "Waiting on board action" },
            { label: "Auth", status: "Ready", desc: "Clerk sign-in/sign-up active" },
            { label: "AI Layer", status: "Ready", desc: "Claude streaming via /chat" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{item.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    item.status === "Ready"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : item.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
