/**
 * Traction Guest API
 * The Traction Guest API is currently under limited release to select customers as we gather and iterate on feedback.  # Getting Started If you are interested in getting early access to the API, please send us an email to [support@tractionguest.com](mailto:support@tractionguest.com).  We will also add you to our Slack channel where you can ask questions and get further help.  # Terms and Conditions Please visit: [https://tractionguest.com/tos/api/](https://tractionguest.com/tos/api/)  # Versioning This API follows [semantic versioning](https://semver.org/), which follows the `Major`.`Minor`.`Patch` format.  * The `Major` number increments when potentially incompatible changes are made. * The `Minor` number increments when backwards-compatible additions are made. * The `Patch` number increments when backwards-compatible bug-fixes are made. 
 *
 * The version of the OpenAPI document: 0.18.0
 * Contact: support@tractionguest.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Update/Edit information about a Package.  [picked_up] - changes the package_state to picked up and assigns non null value to picked_up_at  [recipient_id] - update the package\'s intended recipient. Changes package_state to \'recipient_matched\' and notifies host about their package via email. A previous recipient will stop getting notifications  [carrier_name] - change/update the package\'s carrier/courier information 
 */
export interface PackageUpdateParamsGuest { 
    /**
     * changes the package_state to picked up and assigns non null value to picked_up_at
     */
    pickedUp?: boolean;
    /**
     * change/update the package\'s carrier/courier information
     */
    carrierName?: string;
    /**
     * id of the Host for which you want to send notifications to regarding their package
     */
    recipientId?: number;
}

