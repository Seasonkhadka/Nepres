export default function LoadingSpinner({ label = 'Loading…' }) {
  return (
    <div className="flex min-h-[40vh] w-full items-center justify-center" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-saffron-200 border-t-crimson-600" />
      <span className="sr-only">{label}</span>
    </div>
  )
}
