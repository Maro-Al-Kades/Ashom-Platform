import React from "react";
import Container from "./Container";
import Title from "./Title";
import { accountData } from "@/constants";

const Account = () => {
  return (
    <section>
      <Container
        id="account"
        aria-label="Features for building a portfolio"
        className="py-20 sm:py-32"
      >
        <div className=" mx-auto max-w-2xl sm:text-center">
          <Title
            title="الآن هو الوقت المناسب لفتح حسابك!"
            className="text-2xl text-black"
          />
          <p className="mt-2 text-lg text-gray-500">
            مع عوائد السوق النموذجية، عليك أن تبدأ صغيرًا لتأمين استثمارك
            مستقبلا. مع منصة استثمر، لم يفت الأوان أبدًا لبناء ثروتك الخاصة.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {accountData.map((item) => (
            <li
              key={item.name}
              className="rounded-2xl border border-gray-200 hover:border-gray-300 p-8 group hover:bg-gray-100 duration-300 cursor-pointer"
            >
              <item.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900 group-hover:text-black duration-300">
                {item.name}
              </h3>
              <p className="mt-2 text-gray-500 group-hover:text-black duration-300">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Account;
