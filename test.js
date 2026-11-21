import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const server=await readFile(new URL('./server.js',import.meta.url),'utf8');const html=await readFile(new URL('./public/index.html',import.meta.url),'utf8');const data=JSON.parse(await readFile(new URL('./data/clinic.json',import.meta.url)));
assert.match(server,/api\/slots/);assert.match(server,/api\/bookings/);assert.match(server,/allaqachon band/);assert.match(html,/orderForm|name/);assert.equal(data.services.length,3);console.log('5 ta NavbatPro smoke test muvaffaqiyatli');
