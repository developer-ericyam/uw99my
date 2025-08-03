import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    varifyCode,
    username,
    password,
    fullName,
    mobile,
    currency,
    promotionCode,
  } = body;

  const args = [
    "--location",
    "https://uw99my.com/postregv2.php",
    "--header",
    "accept: */*",
    "--header",
    "content-type: application/x-www-form-urlencoded; charset=UTF-8",
    "--header",
    "Cookie: PHPSESSID=9db9d400aeebdfcbb13b03f3b41051591",
    "--data",
    `VarifyCode=${varifyCode}&UserName=${username}&Password=${password}&Fullname=${fullName}&Com=UW88MY&Email=&Mobile=${mobile}&Gender=1&DoB=2018-01-01&BankName=+&BankBranch=+&BankAccountNo=+&AccountHolderName=+&Currency=${currency}&PromotionCode=${
      promotionCode ? promotionCode : ""
    }&ReferralCode=+&Lang=en-us&IsMobile=false&CustomDomain=0&Extra1=+&Extra2=+`,
  ];

  const { stdout, stderr } = await execFileAsync("curl", args);
  if (stderr) console.warn("curl stderr:", stderr);
  return stdout;
});
