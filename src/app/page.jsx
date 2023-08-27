"use client";
import Account from "@/components/Account";
import CallToAction from "@/components/CallToAction";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleInspect = () => {
      // يتم تنفيذ أي إجراء تحتاجه لمنع التفتيش هنا
      console.log("تم محاولة التفتيش!");
    };

    // يتم استدعاء الدالة handleInspect عند محاولة التفتيش
    window.addEventListener("contextmenu", handleInspect);
    window.addEventListener("keydown", handleInspect);

    return () => {
      // يتم إزالة مستمعي الأحداث عند تفكيك المكون
      window.removeEventListener("contextmenu", handleInspect);
      window.removeEventListener("keydown", handleInspect);
    };
  }, []);
  return (
    <main>
      <Hero />
      <Feature />
      <Account />
      <CallToAction />
      <Reviews />
    </main>
  );
}
