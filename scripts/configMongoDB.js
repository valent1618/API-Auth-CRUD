const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface(process.stdin, process.stdout);

console.log(
  '--- You will configure access to your MongoDB Atlas database ---\n'
);

rl.question('USERNAME: ', (username) => {
  rl.question('PASSWORD: ', (password) => {
    rl.question('CLUSTER: ', (cluster) => {
      const envContent = `MONGODB_URL = mongodb+srv://${username}:${password}@${cluster}`;
      fs.writeFile('.env', envContent, (error) => {
        if (error) {
          console.error(error);
        }
        console.log('\nFile .env is fill with your MongoDB url !');
        rl.close();
      });
    });
  });
});

rl.on('close', function () {
  process.exit(0);
});
