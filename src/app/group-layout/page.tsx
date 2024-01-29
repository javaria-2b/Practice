import React from "react";
import Link from "next/link";

function grouplayout() {
  return (
    <div className="flex gap-5 p-5 min-h-full">
      <div className="flex flex-col gap-5 min-h-full bg-amber-600 max-w-xs w-full p-5">
        <Link href={'/group-layout/about'}>About</Link>
        <Link href={'group-layout/blogs'}>Blog</Link>
        <Link href={'group-layout/account'}>Account</Link>
      </div>
      <div>
        In the app directory, nested folders are normally mapped to URL paths.
        However, you can mark a folder as a Route Group to prevent the folder
        from being included in the routes URL path. This allows you to organize
        your route segments and project files into logical groups without
        affecting the URL path structure.
      </div>
    </div>
  )
}

export default grouplayout;