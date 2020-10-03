/**
 * Traction Guest API
 * The Traction Guest API is currently under limited release to select customers as we gather and iterate on feedback.  # Getting Started If you are interested in getting early access to the API, please send us an email to [support@tractionguest.com](mailto:support@tractionguest.com).  We will also add you to our Slack channel where you can ask questions and get further help.  # Terms and Conditions Please visit: [https://tractionguest.com/tos/api/](https://tractionguest.com/tos/api/)  # Versioning This API follows [semantic versioning](https://semver.org/), which follows the `Major`.`Minor`.`Patch` format.  * The `Major` number increments when potentially incompatible changes are made. * The `Minor` number increments when backwards-compatible additions are made. * The `Patch` number increments when backwards-compatible bug-fixes are made. 
 *
 * The version of the OpenAPI document: 0.14.1
 * Contact: support@tractionguest.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GroupVisitGuest } from './groupVisit';
import { HostGuest } from './host';
import { InviteWatchlistGuest } from './inviteWatchlist';
import { LocationGuest } from './location';
import { RegistrationGuest } from './registration';


/**
 * The root of the Invite type\'s schema.
 */
export interface InviteGuest { 
    id: number;
    registration?: RegistrationGuest;
    /**
     * 
     */
    mobileNumber?: string | null;
    /**
     * 
     */
    email: string | null;
    /**
     * 
     */
    endDate?: Date | null;
    inviteWatchlist?: InviteWatchlistGuest;
    hosts?: Array<HostGuest>;
    watchlistColour?: InviteGuest.WatchlistColourGuestEnum | null;
    location?: LocationGuest;
    startDate?: Date;
    lastName: string | null;
    firstName: string | null;
    groupVisit?: GroupVisitGuest;
}
export namespace InviteGuest {
    export type WatchlistColourGuestEnum = 'RED' | 'GREEN' | 'YELLOW' | 'ORANGE';
    export const WatchlistColourGuestEnum = {
        RED: 'RED' as WatchlistColourGuestEnum,
        GREEN: 'GREEN' as WatchlistColourGuestEnum,
        YELLOW: 'YELLOW' as WatchlistColourGuestEnum,
        ORANGE: 'ORANGE' as WatchlistColourGuestEnum
    };
}

