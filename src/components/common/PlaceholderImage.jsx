// Shown wherever a data entry's `image` is still null. Keeps layout stable
// (same aspect ratio as a real photo would occupy) so swapping in real
// photos later doesn't shift the page around.
export default function PlaceholderImage({ label, className = '' }) {
  return (
    <div
      role="img"
      aria-label={label ? `${label} — photo coming soon` : 'Photo coming soon'}
      className={`flex items-center justify-center bg-gradient-to-br from-saffron-100 via-cream to-terracotta/20 ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8 text-terracotta/50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5l5-5a2 2 0 0 1 2.8 0l4.2 4.2M13 12l1.5-1.5a2 2 0 0 1 2.8 0L21 14M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11z"
        />
        <circle cx="8" cy="9" r="1.5" />
      </svg>
    </div>
  )
}
