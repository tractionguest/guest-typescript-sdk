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
import { HostGuest } from './host';
import { RegistrationGuest } from './registration';
import { SignableDocumentGuest } from './signableDocument';
import { SigninAcknowledgementGuest } from './signinAcknowledgement';
import { SigninDataGuest } from './signinData';
import { SigninWatchlistGuest } from './signinWatchlist';


/**
 * The root of the Signin type\'s schema.
 */
export interface SigninDetailGuest { 
    id: number;
    documents?: Array<SignableDocumentGuest>;
    signinWatchlist?: SigninWatchlistGuest;
    hosts?: Array<HostGuest>;
    signinData?: Array<SigninDataGuest>;
    signinAcknowledgement?: SigninAcknowledgementGuest;
    note?: string;
    /**
     * A one-way method of Signing out a Signin
     */
    isSignedOut?: boolean;
    signinTimestamp?: Date;
    signinPhotoUrl?: string;
    signedOutTimestamp?: Date;
    mobileNumber?: string;
    locationName?: string;
    lastName?: string;
    /**
     * Whether this Signin has been acknowledged yet. Can also be used as a one-way method of setting the Signin as acknowledged.
     */
    isAcknowledged?: boolean;
    isAccountedFor?: boolean;
    firstName?: string;
    email?: string;
    company?: string;
    registration?: RegistrationGuest;
}

