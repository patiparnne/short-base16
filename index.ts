export function shortenBase16(base16String: string): string {
  const replacements: { [key: string]: string } = {
    "\t": "→",
    "\n": "↲",
    "\r": "↵",
    "\f": "⇒",
    "\b": "↼",
    "\'": "‘",
    "\"": "“",
    "\\": "∖",
    "\v": "↓",
    "\0": "∘"
  };
  const regex = /[\t\n\r\f\b\'\"\\\v\0]/g;
  return (
    base16String.match(/.{1,2}/g)?.map(
      (hex) => String.fromCharCode(parseInt(hex, 16))
        .replace(regex, (match) => replacements[match])
    ) ?? []
  ).join('');
}

export function unshortenBase16(shortBase16String: string): string {
  const replacements: { [key: string]: string } = {
    "→": "\t",
    "↲": "\n",
    "↵": "\r",
    "⇒": "\f",
    "↼": "\b",
    "‘": "\'",
    "“": "\"",
    "∖": "\\",
    "↓": "\v",
    "∘": "\0"
  };
  const regex = /[→↲↵⇒↼‘“∖↓∘]/g;
  return (
    shortBase16String
      .replace(regex, (match) => replacements[match])
      .split('').map(
        (char) => {
          var codeHex = char.charCodeAt(0);
          return codeHex.toString(16).padStart(2, '0');
        }
      ) ?? []
  ).join('');
}