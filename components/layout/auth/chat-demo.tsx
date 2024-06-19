import React from "react";

export default function ChatDemo() {
  return (
    <div className="flex h-full w-full flex-col justify-end gap-4">
      <div className="ms-auto flex w-5/6 flex-col gap-4 rounded-2xl bg-primary p-4 text-white">
        <p>Let&apos;s change the world together!</p>
      </div>

      <div className="flex w-5/6 flex-col gap-4 rounded-2xl bg-card p-4">
        <p>
          That sounds like an exciting and ambitious goal! Let&apos;s get
          started by understanding more about your vision.
        </p>
      </div>
      <div className="flex max-w-max flex-col gap-4 rounded-2xl bg-card p-4">
        <div className="flex gap-1">
          <span className="sr-only">Loading...</span>
          <div className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-neutral-400"></div>
        </div>
      </div>
    </div>
  );
}
