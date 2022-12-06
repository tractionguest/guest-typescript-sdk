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
 * 
 */
export interface WatchlistMatchGuest { 
    id?: string;
    altNames?: Array<string>;
    federalRegisterNotice?: string;
    name: string;
    sourceInformationUrl?: string;
    sourceListUrl?: string;
    list: string;
    /**
     * 
     */
    type?: string;
    /**
     * 
     */
    category?: string;
    /**
     * 
     */
    street1?: string;
    /**
     * 
     */
    street2?: string;
    /**
     * 
     */
    city?: string;
    /**
     * 
     */
    state?: string;
    /**
     * 
     */
    country?: string;
    /**
     * 
     */
    notes?: string;
    /**
     * 
     */
    frc?: string;
    /**
     * 
     */
    start?: string;
    /**
     * 
     */
    end?: string;
    /**
     * 
     */
    frserve?: string;
    /**
     * 
     */
    optionalID?: string;
    /**
     * 
     */
    alertType?: string;
    /**
     * 
     */
    pairStatus?: string;
    /**
     * 
     */
    pairReason?: string;
    /**
     * 
     */
    pairComments?: string;
    /**
     * 
     */
    applicationDisplayName?: string;
    /**
     * 
     */
    applicationId?: string;
    /**
     * 
     */
    clientId?: string;
    /**
     * 
     */
    clientKey?: string;
    /**
     * 
     */
    clientFullName?: string;
    /**
     * 
     */
    listKey?: string;
    /**
     * 
     */
    listName?: string;
    /**
     * 
     */
    listId?: string;
    /**
     * 
     */
    listVersion?: string;
    /**
     * 
     */
    listModifyDate?: string;
    /**
     * 
     */
    listProfileId?: string;
    /**
     * 
     */
    listProfileKey?: string;
    /**
     * 
     */
    linkSingleStringName?: string;
    /**
     * 
     */
    listParentSingleStringName?: string;
    /**
     * 
     */
    listCategory?: string;
    /**
     * 
     */
    listPepCategory?: string;
    /**
     * 
     */
    listDoBs?: string;
    /**
     * 
     */
    listCountries?: string;
    /**
     * 
     */
    rankString?: string;
    /**
     * 
     */
    ranktype?: string;
    /**
     * 
     */
    rankweight?: string;
    /**
     * 
     */
    pairLoadDate?: string;
    /**
     * 
     */
    eAddressTo?: string;
    /**
     * 
     */
    eAddressCc?: string;
    /**
     * 
     */
    origin?: string;
    /**
     * 
     */
    secondsviewed?: string;
    /**
     * 
     */
    initialUser?: string;
    /**
     * 
     */
    isPairParentFlag?: string;
    /**
     * 
     */
    pairMetSearchCriteriaFlag?: string;
    /**
     * 
     */
    editableDueToAssignmentFlag?: string;
    /**
     * 
     */
    modifyDate?: string;
    /**
     * 
     */
    modifiedByUser?: string;
    /**
     * 
     */
    pairReportType?: string;
    /**
     * 
     */
    finscanCategory?: string;
    /**
     * 
     */
    wrapperStatus?: string;
    /**
     * 
     */
    sourceLists?: string;
}

