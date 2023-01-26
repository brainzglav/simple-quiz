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

export function validate(value, validators) {
  for (const key in validators) {
    const validatorValue = validators[key];

    switch (key) {
      case "required":
        if (
          validatorValue &&
          (value === "" || value === null || value === undefined)
        ) {
          return "Obavezno polje";
        }
        break;
      case "maxLength":
        if (value.length > validatorValue) {
          return `Maksimalna duljina je ${validatorValue}`;
        }
        break;
      case "match":
        if (value !== validatorValue) {
          return "Pogresan unos";
        }
        break;
    }
  }

  return "";
}

export default {
  getValues,
  getEntries,
  validate,
};
