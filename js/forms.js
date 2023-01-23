export function getValues(form) {
  const formData = new FormData(form);

  return Object.fromEntries(formData);
}

export function getEntries(form) {
  const formData = new FormData(form);

  return formData.entries();
}

export function redirect(url) {
  window.location.href = `${window.location.origin}${url}`;
}

export default {
  getValues,
  getEntries,
};
