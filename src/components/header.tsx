import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import {
  useAuthSession,
  useAuthSignin,
  useAuthSignout,
} from "~/routes/plugin@auth";

export default component$(() => {
  const session = useAuthSession();
  const signIn = useAuthSignin();
  const singOut = useAuthSignout();

  return (
    <div class={"flex my-5 mx-5"}>
      <div class={"flex-grow"}></div>
      {session.value?.user?.email ? (
        <Form action={singOut}>
          <button>Sign Out</button>
        </Form>
      ) : (
        <Form action={signIn}>
          <button>Sign In</button>
        </Form>
      )}
    </div>
  );
});
