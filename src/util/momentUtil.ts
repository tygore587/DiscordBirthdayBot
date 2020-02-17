import moment = require('moment');
import { Constants } from './constants';

export function parseDateExact(dateString: string, format: string): string | null {
    let date = moment(dateString, format, true);

    return date.isValid() ? date.format(Constants.DATE_FORMAT) : null;
}
