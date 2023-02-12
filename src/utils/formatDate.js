export function getLocaleDateString(timestamp) {
  return new Date(timestamp).toLocaleDateString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
}
