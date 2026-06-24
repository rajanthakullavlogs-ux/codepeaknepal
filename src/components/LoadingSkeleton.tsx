import React from "react";

export const LoadingSkeleton = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`animate-pulse flex space-x-4 ${className}`}>
      <div className="rounded-xl bg-gray-200 h-24 w-24"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-4 bg-gray-200 rounded col-span-2"></div>
            <div className="h-4 bg-gray-200 rounded col-span-1"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};
