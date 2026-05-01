export const config = { runtime: "edge" };
const _0x4f2a = ['forwarded', 'x-forwarded-host', 'x-forwarded-proto', 'x-forwarded-port', 'x-vercel-', 'x-real-ip', 'x-forwarded-for', 'GET', 'HEAD', 'half', 'manual', 'Misconfigured: TARGET_DOMAIN is not set', 'relay error:', 'Bad Gateway: Tunnel Failed', 'host', 'connection', 'keep-alive', 'proxy-authenticate', 'proxy-authorization', 'te', 'trailer', 'transfer-encoding', 'upgrade'];
const _0x1a2b = function(_0x3c4d, _0x5e6f) { return _0x4f2a[_0x3c4d -= 0x0]; };

const _0x59b12c = (process['env']['TARGET_DOMAIN'] || '')['replace'](/\/$/, '');
const _0x31a90d = new Set([_0x1a2b(0xe), _0x1a2b(0xf), _0x1a2b(0x10), _0x1a2b(0x11), _0x1a2b(0x12), _0x1a2b(0x13), _0x1a2b(0x14), _0x1a2b(0x15), _0x1a2b(0x16), _0x1a2b(0x0), _0x1a2b(0x1), _0x1a2b(0x2), _0x1a2b(0x3)]);

export default async function (_0x2d3e4f) {
  if (!_0x59b12c) return new Response(_0x1a2b(0xb), { status: 0x1f4 });
  try {
    const _0x41258a = _0x2d3e4f['url']['indexOf']('/', 0x8);
    const _0x147852 = _0x41258a === -0x1 ? _0x59b12c + '/' : _0x59b12c + _0x2d3e4f['url']['slice'](_0x41258a);
    const _0x369852 = new Headers();
    let _0x258147 = null;
    for (const [_0x123456, _0x654321] of _0x2d3e4f['headers']) {
      if (_0x31a90d['has'](_0x123456) || _0x123456['startsWith'](_0x1a2b(0x4))) continue;
      if (_0x123456 === _0x1a2b(0x5)) { _0x258147 = _0x654321; continue; }
      if (_0x123456 === _0x1a2b(0x6)) { if (!_0x258147) _0x258147 = _0x654321; continue; }
      _0x369852['set'](_0x123456, _0x654321);
    }
    if (_0x258147) _0x369852['set'](_0x1a2b(0x6), _0x258147);
    const _0xabc123 = _0x2d3e4f['method'];
    const _0xdef456 = _0xabc123 !== _0x1a2b(0x7) && _0xabc123 !== _0x1a2b(0x8);
    return await fetch(_0x147852, {
      method: _0xabc123,
      headers: _0x369852,
      body: _0xdef456 ? _0x2d3e4f['body'] : undefined,
      duplex: _0x1a2b(0x9),
      redirect: _0x1a2b(0xa),
    });
  } catch (_0x999000) {
    return new Response(_0x1a2b(0xd), { status: 0x1f6 });
  }
}

