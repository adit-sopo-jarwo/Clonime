"use client";

import { Ghost } from "@phosphor-icons/react";

const NoComment = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center flex-col">
      <div className="flex items-center gap-4">
        <Ghost size={80} />
        <div className="flex flex-col">
          <h3 className="text-2xl">You Have Not Commented Yet.</h3>
          <h3 className="text-2xl">Leave Your Comment First.</h3>
        </div>
      </div>
    </div>
  );
};

export default NoComment;
