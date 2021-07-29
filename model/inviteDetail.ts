/**
 * Traction Guest API
 * The Traction Guest API is currently under limited release to select customers as we gather and iterate on feedback.  # Getting Started If you are interested in getting early access to the API, please send us an email to [support@tractionguest.com](mailto:support@tractionguest.com).  We will also add you to our Slack channel where you can ask questions and get further help.  # Terms and Conditions Please visit: [https://tractionguest.com/tos/api/](https://tractionguest.com/tos/api/)  # Versioning This API follows [semantic versioning](https://semver.org/), which follows the `Major`.`Minor`.`Patch` format.  * The `Major` number increments when potentially incompatible changes are made. * The `Minor` number increments when backwards-compatible additions are made. * The `Patch` number increments when backwards-compatible bug-fixes are made. 
 *
 * The version of the OpenAPI document: 0.16.0
 * Contact: support@tractionguest.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CustomFieldGuest } from './customField';
import { EmailTemplateGuest } from './emailTemplate';
import { GroupVisitGuest } from './groupVisit';
import { HostGuest } from './host';
import { InviteWatchlistGuest } from './inviteWatchlist';
import { LocationGuest } from './location';
import { NotificationTriggerGuest } from './notificationTrigger';
import { RegistrationGuest } from './registration';


/**
 * The root of the InviteDetail type\'s schema.
 */
export interface InviteDetailGuest { 
    id: number;
    registration?: RegistrationGuest;
    /**
     * Phone number
     */
    mobileNumber?: string;
    emailTemplate?: EmailTemplateGuest;
    inviteWatchlist?: InviteWatchlistGuest;
    /**
     * List of scheduled notifications for an invite
     */
    notificationTriggers?: Array<NotificationTriggerGuest>;
    customFields?: Array<CustomFieldGuest>;
    watchlistColour?: InviteDetailGuest.WatchlistColourGuestEnum;
    location?: LocationGuest;
    hosts?: Array<HostGuest>;
    startDate?: Date;
    lastName: string;
    firstName: string;
    endDate?: Date;
    email: string;
    createdAt?: Date;
    company?: string;
    checkedIn?: boolean;
    groupVisit?: GroupVisitGuest;
}
export namespace InviteDetailGuest {
    export type WatchlistColourGuestEnum = 'RED' | 'GREEN' | 'YELLOW' | 'ORANGE';
    export const WatchlistColourGuestEnum = {
        RED: 'RED' as WatchlistColourGuestEnum,
        GREEN: 'GREEN' as WatchlistColourGuestEnum,
        YELLOW: 'YELLOW' as WatchlistColourGuestEnum,
        ORANGE: 'ORANGE' as WatchlistColourGuestEnum
    };
}

