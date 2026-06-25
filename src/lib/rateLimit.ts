type RateLimitRecord = {
  count: number;
  resetTime: number;
};

const ipRequestMap = new Map<string, RateLimitRecord>();

// Periodic cleanup of expired records every 10 minutes to prevent memory leaks
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    ipRequestMap.forEach((record, ip) => {
      if (now > record.resetTime) {
        ipRequestMap.delete(ip);
      }
    });
  }, 600000); // 10 minutes
}

/**
 * Checks if the request from a specific IP should be rate limited.
 * @param ip Client IP address
 * @param limit Max allowed requests within the window
 * @param windowMs Time window in milliseconds
 * @returns Object indicating whether the request is allowed
 */
export function rateLimit(ip: string, limit: number = 10, windowMs: number = 60000) {
  const now = Date.now();
  const record = ipRequestMap.get(ip);

  if (!record) {
    ipRequestMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { success: true, remaining: limit - 1, resetTime: now + windowMs };
  }

  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + windowMs;
    return { success: true, remaining: limit - 1, resetTime: now + windowMs };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, resetTime: record.resetTime };
  }

  record.count++;
  return { success: true, remaining: limit - record.count, resetTime: record.resetTime };
}
