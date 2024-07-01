export interface User {
  id: number;
  name: string;
  activatedOn: Date;
  deactivatedOn: Date | null;
  customerId: number;
}

export interface Subscription {
  id: number;
  customerId: number;
  monthlyPriceInCents: number;
}

export function monthlyCharge(
  yearMonth: string,
  subscription: Subscription | null,
  users: User[]
): number {
  if (!subscription) return 0;

  const [year, month] = yearMonth.split("-").map(Number);
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = lastDayOfMonth(firstDay);
  const daysInMonth = lastDay.getDate();
  const rate = subscription.monthlyPriceInCents / daysInMonth;

  let charge = 0;

  for (const user of users) {
    if (user.customerId !== subscription.customerId) continue;

    const userActivatedOn = user.activatedOn;
    const userDeactivatedOn = user.deactivatedOn || lastDay;

    const userFirstActiveDay =
      userActivatedOn > firstDay ? userActivatedOn : firstDay;
    const userLastActiveDay =
      userDeactivatedOn < lastDay ? userDeactivatedOn : lastDay;

    if (userFirstActiveDay > lastDay || userLastActiveDay < firstDay) continue;

    let activeDays = 0;
    for (
      let day = userFirstActiveDay.getDate();
      day <= userLastActiveDay.getDate();
      day++
    ) {
      const currentDay = new Date(year, month - 1, day);
      if (currentDay >= firstDay && currentDay <= lastDay) {
        activeDays++;
      }
    }

    charge += activeDays * rate;
  }

  return Math.round(charge);
}

function firstDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function lastDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function nextDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}
