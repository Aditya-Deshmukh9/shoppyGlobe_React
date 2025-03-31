import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default Loading;
