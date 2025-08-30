"use client";
import { ErrorBoundary } from "react-error-boundary";

// Fallback UI when error happens
function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert" className="p-4 bg-red-100 text-red-700 rounded-xl">
      <p className="font-bold">Something went wrong:</p>
      <pre className="text-sm">{error.message}</pre>
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}

// Example of a crashing component
function BuggyComponent() {
  throw new Error("💥 I crashed!");
  return <div>This will never render</div>;
}

// App wrapper
export default function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset app state if needed
        console.log("Reset after error");
      }}
    >
      <h1 className="text-xl font-bold">Error Boundary Demo</h1>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
