import fetch from "node-fetch";
import { SocksProxyAgent } from 'socks-proxy-agent';
import request from "request"
import rl from "readline"
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

const packet1 = ["growtopia1.com", "growtopia2.com"];
const packet2 = ["37", "38"];





import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  (async () => {
    const host = packet1[Math.floor(Math.random() * packet1.length)];
    const contentlength = packet2[Math.floor(Math.random() * packet2.length)];

const proxyOptions = {
  hostname: '204.188.203.164',
  port: 9010,
  protocol: 'socks5',
  auth: 'root:samdues' // Ganti dengan username dan password yang benar
};
    
    const proxyAgent = new SocksProxyAgent('socks5://34.96.248.183:1080');
    const response = await fetch("https://www.growtopia1.com/growtopia/server_data.php", {
      method: "POST",
      headers: {
        "user-agent": "UbiServices_SDK_2019.Release.27_PC64_unicode_static"
      },
      //agent: proxyAgent
    })
    const body = await response.text();
    console.log(body)
    res.send(body)
  })();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

