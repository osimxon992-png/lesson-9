"use client";

import { useRouter } from "next/navigation";

function page() {
  let router = useRouter();
  function handlenavigate() {
    router.push("/");
  }
  function navigateBack() {
    router.back();
  }
  function replacenavigation() {
    router.replace("/");
  }
  return (
    <div>
      <h1>Sign up Page</h1>

      <button onClick={handlenavigate}>Sign in</button>
      <button onClick={navigateBack}>Back</button>
      <button onClick={replacenavigation}>Route Almashtirish</button>
    </div>
  );
}

export default page;
