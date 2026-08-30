import { startOfDay } from 'date-fns';

export const VACATION_CONFIG = {
  isActive: true,
  /** inclusive: first day closed */
  start: new Date('2026-09-14'),
  /** inclusive: last day closed */
  end: new Date('2026-09-26'),
  /** first available pickup after vacation */
  reopenDate: new Date('2026-09-27')
} as const;

/** Returns true if `date` falls within the vacation period. */
export function isVacationDate(date: Date): boolean {
  if (!VACATION_CONFIG.isActive) return false;

  const d = startOfDay(date);

  return (
    d >= startOfDay(VACATION_CONFIG.start) &&
    d <= startOfDay(VACATION_CONFIG.end)
  );
}

export type VacationI18nKeys = {
  vacationTitle: string;
  vacationMessage: string;
  vacationDateError: string;
};
