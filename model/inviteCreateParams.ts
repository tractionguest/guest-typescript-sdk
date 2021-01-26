/**
 * Traction Guest API
 * The Traction Guest API is currently under limited release to select customers as we gather and iterate on feedback.  # Getting Started If you are interested in getting early access to the API, please send us an email to [support@tractionguest.com](mailto:support@tractionguest.com).  We will also add you to our Slack channel where you can ask questions and get further help.  # Terms and Conditions Please visit: [https://tractionguest.com/tos/api/](https://tractionguest.com/tos/api/)  # Versioning This API follows [semantic versioning](https://semver.org/), which follows the `Major`.`Minor`.`Patch` format.  * The `Major` number increments when potentially incompatible changes are made. * The `Minor` number increments when backwards-compatible additions are made. * The `Patch` number increments when backwards-compatible bug-fixes are made. 
 *
 * The version of the OpenAPI document: 0.15.0
 * Contact: support@tractionguest.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CustomFieldGuest } from './customField';
import { NotificationTriggerCreateParamsGuest } from './notificationTriggerCreateParams';


/**
 * The root of the InviteCreateParams type\'s schema.
 */
export interface InviteCreateParamsGuest { 
    mobileNumber?: string;
    notificationTriggers?: Array<NotificationTriggerCreateParamsGuest>;
    firstName: string;
    emailTemplateId?: number;
    customFields?: Array<CustomFieldGuest>;
    hostIds?: Array<number>;
    watchlistColour?: InviteCreateParamsGuest.WatchlistColourGuestEnum;
    title?: string;
    /**
     * The `start_date` is required for invitations to lobbies
     */
    startDate?: Date;
    lastName: string;
    endDate?: Date;
    email: string;
    company?: string;
    groupVisitId?: number;
}
export namespace InviteCreateParamsGuest {
    export type WatchlistColourGuestEnum = 'RED' | 'GREEN' | 'YELLOW' | 'ORANGE';
    export const WatchlistColourGuestEnum = {
        RED: 'RED' as WatchlistColourGuestEnum,
        GREEN: 'GREEN' as WatchlistColourGuestEnum,
        YELLOW: 'YELLOW' as WatchlistColourGuestEnum,
        ORANGE: 'ORANGE' as WatchlistColourGuestEnum
    };
}

