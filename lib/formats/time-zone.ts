import { formatInTimeZone } from 'date-fns-tz';

export const timeZoneFormatDate = (date: Date) => {
	return new Date(
		formatInTimeZone(date, 'Asia/Jakarta', 'M.d.yyyy HH:mm:ss.SSS')
	);
};

export const timeZoneFormatString = (date: Date) => {
	return new Intl.DateTimeFormat(['ban', 'id'], {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	}).format(new Date(date));
};
