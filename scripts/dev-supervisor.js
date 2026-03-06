import { spawn } from "node:child_process";

const PORT = process.env.PORT || "8080";
const HOST = process.env.HOST || "0.0.0.0";

function run(name, cmd, args) {
  const p = spawn(cmd, args, {
    stdio: "inherit",
    shell: true,
    env: {
      ...process.env,
      PORT,
      HOST,
    },
  });

  p.on("exit", (code) => {
    console.error(`[supervisor] ${name} exited with code ${code}`);
    process.exit(code ?? 1);
  });
}

console.log("[supervisor] starting Next.js dev server");

// Simple dev runner aligned with boilerplate (no git/bootstrap steps)
run("next-dev", "npx", ["next", "dev", "-H", HOST, "-p", PORT]);

console.log("[supervisor] starting git poller");
run("git-poll", "node", ["scripts/git-poll.js"]);
