export default function DashboardLoading() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="h-8 w-32 animate-pulse rounded bg-muted" />
      <div className="mt-8 space-y-6">
        <div className="h-48 animate-pulse rounded-lg bg-muted" />
        <div className="h-48 animate-pulse rounded-lg bg-muted" />
      </div>
    </div>
  );
}