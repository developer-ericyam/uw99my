import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password, com = 'UW88MY', customDomain = '1' } = body;

    const args = [
    '--location',
    'https://uw99my.com/postprocv2.php',
    '--header', 'accept: */*',
    '--header', 'content-type: application/x-www-form-urlencoded; charset=UTF-8',
    '--header', 'Cookie: PHPSESSID=9db9d400aeebdfcbb13b03f3b41051591',
    '--data-urlencode', `Username=${username}`,
    '--data-urlencode', `Password=${password}`,
    '--data-urlencode', `Com=${com}`,
    '--data-urlencode', `CustomDomain=${customDomain}`,
  ];

   const { stdout, stderr } = await execFileAsync('curl', args);
    if (stderr) console.warn('curl stderr:', stderr);
    return stdout;
});
