export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(dateStr));
}

export function formatWeekDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
  }).format(new Date(dateStr));
}

export function formatTime(time) {
  let hours = Number(time.split(":")[0]);
  const amOrPm = hours >= 12 ? "pm" : "am";
  let minutes = Number(time.split(":")[1]);

  hours = hours % 12 || 12;
  hours = hours < 10 ? "0" + hours : hours
  minutes = minutes < 10 ? "0" + minutes : minutes

  return `${hours}:${minutes} ${amOrPm}`;
}

export function checkIsMissingDeadline(deadline) {
  if (!deadline) return false;

  const currentDate = new Date();
  const currentHours = Number(currentDate.getHours());
  const currentMinutes = Number(currentDate.getMinutes());
  let deadlineHours = Number(deadline.split(":")[0]);
  let deadlineMinutes = Number(deadline.split(":")[1]);

  if (deadlineHours < currentHours) {
    return true;
  } else if (((deadlineHours === currentHours) && (deadlineMinutes <= currentMinutes))) {
    return true;
  } else {
    return false;
  }
}

export function isVaildDeadline(deadline) {
  const currentDate = new Date();
  const currentHours = Number(currentDate.getHours());
  const currentMinutes = Number(currentDate.getMinutes());
  let deadlineHours = Number(deadline.split(":")[0]);
  let deadlineMinutes = Number(deadline.split(":")[1]);

  if (currentHours > deadlineHours) {
    return false;
  } else if ((currentHours === deadlineHours) && (currentMinutes >= deadlineMinutes)) {
    return false;
  } else {
    return true;
  }
}