import React from "react";
import Container from "./Container";
import Title from "./Title";
import DesktopFeature, { FeatureMobile } from "./DesktopFeature";

const Feature = () => {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-3xl">
          <Title
            title="كل ميزة تحتاجها للفوز جربه بنفسك."
            className="text-white text-2xl"
          />
          <p className="mt-2 text-lg text-gray-400">
            تم إنشاء منصة اسهم للمستثمرين مثلك الذين يتبعون قواعدهم الخاصة ولن
            يسمحوا للوائح هيئة الأوراق المالية والبورصة (SEC) بأن تقف في طريق
            أحلامهم. إذا كانت أدوات الاستثمار الأخرى تخشى بنائه، فإن منصة اسهم
            لديها ذلك.
          </p>
        </div>
      </Container>
      {/* Desktop View */}
      <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
        <DesktopFeature />
      </div>
      {/* Mobile View */}
      <div className="mt-16 md:hidden">
        <FeatureMobile />
      </div>
    </section>
  );
};

export default Feature;
