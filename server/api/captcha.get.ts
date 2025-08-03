export default defineEventHandler(async (event) => {
  const res = await $fetch.raw(
    "https://uw99my.com/inc/securitycode.php?width=100&height=30&characters=4",
    {
      headers: {
        Cookie: "PHPSESSID=9db9d400aeebdfcbb13b03f3b41051591",
        // other headers you need
      },
      responseType: "arrayBuffer", // keep binary data intact
    }
  );

  setHeader(
    event,
    "Content-Type",
    res.headers.get("content-type") || "image/png"
  );
  return Buffer.from(res._data as any); // send image data back to browser
});
