import moment from 'moment';
import { Constants } from './constants';

export function parseDateExact(dateString: string, format: string): string | undefined {
    const date = moment(dateString, format, true);

    return date.isValid() ? date.format(Constants.DATE_FORMAT) : undefined;
}
