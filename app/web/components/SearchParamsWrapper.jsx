"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchParamsWrapper({ setCallbackUrl }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const cb = searchParams.get("callbackUrl");
    if (cb) setCallbackUrl(cb);
  }, [searchParams, setCallbackUrl]);

  return null;
}
