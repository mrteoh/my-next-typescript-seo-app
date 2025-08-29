"use client";

import { useState, Suspense, lazy } from "react";

// Lazy import (will only load when needed)
const HeavyComponent = lazy(() => import("../components/HeavyComponent"));

export default function LazyLoadPage() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold">🚀 Lazy Loading Demo</h1>
      <p className="mt-2 text-gray-700">
        This page demonstrates <b>React.lazy</b> in a Next.js App Router setup.
      </p>

      <button
        onClick={() => setShow(true)}
        className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        Load Component
      </button>

      {show && (
        <Suspense fallback={<p className="mt-4">⏳ Loading component...</p>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}
