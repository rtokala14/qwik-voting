import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: "Qwik Voting App",
  meta: [
    {
      name: "Voting App | Qwik",
      content: "Qwik Voting App by Rohit Tokala",
    },
  ],
};
