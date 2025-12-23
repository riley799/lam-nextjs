import { Suspense } from "react";
import StreamingComponent from "./streaming-component";

function StreamingFallback() {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default function StreamingPage() {
  return (
    <div>
      <h1>Streaming Page</h1>
      <Suspense fallback={<StreamingFallback />}>
        <StreamingComponent />
      </Suspense>
      <p>This page uses streaming data</p>
    </div>
  );
}
