export function encrypt(o) {
  var t = [];
  const a = new Date().getTime(),
    h = ["X", "Y", "Z"];
  for (var r = 0; r < o.length; r++) {
    const n = Math.floor(31 * Math.random() + 3),
      s = Math.floor(3 * Math.random()),
      M = Math.floor(3 * Math.random()),
      e = o.charCodeAt(r) * a;
    t.push(e.toString(n)), t.push(h[s]), t.push(n), t.push(h[M]);
  }
  const n = Math.floor(31 * Math.random() + 3);
  return (
    t.push(a.toString(n)),
    t.push(h[Math.floor(3 * Math.random())]),
    t.push(n),
    t.join("").toUpperCase()
  );
}

export function decrypt(n) {
  for (
    var r = n.split(/[xyz]+/gi),
      t = [],
      e = parseInt(r[r.length - 2], r[r.length - 1]),
      g = 0;
    g < r.length - 2;
    g += 2
  )
    t.push(String.fromCharCode(parseInt(r[g], r[g + 1]) / e));
  return t.join("");
}
