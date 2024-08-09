import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const apiUrl = process.env.API_URL;

async function logOut() {
  "use server";
  try {

    cookies().delete("session_id")
    redirect("/admin");
    return;
  } catch (err) {
    console.log(err);
  }
}

const LogOut = () => {
  return (
    <form action={logOut}>
      <button className="px-4 border-2 rounded-lg border-slate-300 py-2">
        log out
      </button>
    </form>
  );
};

export default LogOut;
