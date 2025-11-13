


export function judul(teks) {
  return teks
    .toLowerCase()
    .split(' ')
    .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(' ');
}
