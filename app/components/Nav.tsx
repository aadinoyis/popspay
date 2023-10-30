import Image from "next/image"
"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

const Nav = () => {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const logout = () => {
    hanko?.user
      .logout()
      .then(() => {
        router.push("/");
        router.refresh();
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renewSession = useCallback(() => {
    router.replace("/");
  }, [router]);
  
  useEffect(
    () =>
      hanko?.onSessionExpired(() => {
        renewSession();
      }),
  
    [hanko, renewSession]
  );

  return (
    <div style={{
      width: '100%',
      maxWidth: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div>
        <span style={{color: 'var(--color-white)'}}>P O P S </span>
        <span style={{color: 'var(--color-main)'}}>P A Y</span>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
        }}>
        <button onClick={logout} style={{
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          borderRadius: '4px'
          }}>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill="var(--color-white)"
    >
      <path d="M170.698 448H72.757a8.746 8.746 0 01-8.725-8.725V72.725A8.746 8.746 0 0172.757 64h97.941c17.673 0 32-14.327 32-32s-14.327-32-32-32H72.757C32.611.047.079 32.58.032 72.725v366.549C.079 479.42 32.611 511.953 72.757 512h97.941c17.673 0 32-14.327 32-32s-14.327-32-32-32z"></path>
      <path d="M483.914 188.117l-82.816-82.752c-12.501-12.495-32.764-12.49-45.259.011s-12.49 32.764.011 45.259l72.789 72.768-289.941.597c-17.673 0-32 14.327-32 32s14.327 32 32 32l291.115-.533-73.963 73.963c-12.042 12.936-11.317 33.184 1.618 45.226 12.295 11.445 31.346 11.436 43.63-.021l82.752-82.752c37.491-37.49 37.491-98.274.001-135.764l-.001-.001.064-.001z"></path>
    </svg>
        </button>

        
      </div>
    </div>
  )
}

export default Nav