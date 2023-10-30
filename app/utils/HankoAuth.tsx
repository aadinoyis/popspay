"use client";
 
import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi:any = process.env.NEXT_PUBLIC_HANKO_API_URL;
 
export default function HankoAuth() {
  const router = useRouter();
 
  const [hanko, setHanko] = useState<Hanko>();
 
  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi))
    );
  }, []);
 
  const redirectAfterLogin = useCallback(() => {
    // successfully logged in, redirect to a page in your application
    router.replace("/dashboard");
  }, [router]);

  const createUser = async () => {
    const hanko = new Hanko(hankoApi);
    const {email} = await hanko.user.getCurrent();
    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
  }

  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(() => {
        createUser();
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );
 
  useEffect(() => {
    register(hankoApi ?? "").catch((error) => {
      console.log(error);
    });
  }, []);
 
  return <hanko-auth />;
}
