"use server"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <button className="flex items-center gap-2  text-white font-bold">
      <FontAwesomeIcon icon={faRightFromBracket} />
      <span className="underline"> log out </span>
       
      </button>
    </form>
  );
};

export default LogOut;
