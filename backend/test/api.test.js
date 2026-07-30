const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../app');

const startServer = () => new Promise((resolve) => {
  const server = app.listen(0, () => {
    const { port } = server.address();
    resolve({ server, port });
  });
});

test('AI search route returns a searchable response', async () => {
  const { server, port } = await startServer();
  try {
    const response = await fetch(`http://127.0.0.1:${port}/api/ai/search`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: 'food near hall b' })
    });

    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.equal(payload.query, 'food near hall b');
    assert.ok(payload.message);
  } finally {
    await new Promise((resolve, reject) => server.close((err) => err ? reject(err) : resolve()));
  }
});
