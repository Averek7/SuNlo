"use client";
import { useEffect, useState } from "react";
import AuthModal from "@/components/AuthModel";
import UploadModal from "@/components/UploadModal";

function ModelProvider() {
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
}

export default ModelProvider;
