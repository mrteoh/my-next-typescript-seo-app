export default function HeavyComponent() {
  return (
    <div className="mt-6 p-6 border-2 border-green-500 rounded-xl">
      <h2 className="text-xl font-semibold">✅ Heavy Component Loaded!</h2>
      <p className="text-gray-600 mt-2">
        This component was lazy-loaded only when you clicked the button.
      </p>
    </div>
  );
}
