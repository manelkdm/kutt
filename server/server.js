const env = require("./env");
const app = require("./app");

app.listen(env.PORT, env.HOST, () => {
  console.log(`> Ready on http://${env.HOST}:${env.PORT}`);
});

