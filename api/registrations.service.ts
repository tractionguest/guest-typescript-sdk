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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ErrorsListGuest } from '../model/errorsList';
import { PaginatedRegistrationsListGuest } from '../model/paginatedRegistrationsList';
import { RegistrationDetailGuest } from '../model/registrationDetail';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {

    protected basePath = 'https://us.tractionguest.com/api/v3';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Get a Registration
     * Gets the details of a single instance of a &#x60;Registration&#x60;
     * @param registrationId 
     * @param include A list of comma-separated related models to include
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRegistration(registrationId: string, include?: string, observe?: 'body', reportProgress?: boolean): Observable<RegistrationDetailGuest>;
    public getRegistration(registrationId: string, include?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RegistrationDetailGuest>>;
    public getRegistration(registrationId: string, include?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RegistrationDetailGuest>>;
    public getRegistration(registrationId: string, include?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (registrationId === null || registrationId === undefined) {
            throw new Error('Required parameter registrationId was null or undefined when calling getRegistration.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (include !== undefined && include !== null) {
            queryParameters = queryParameters.set('include', <any>include);
        }

        let headers = this.defaultHeaders;

        // authentication (TractionGuestAuth) required
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<RegistrationDetailGuest>(`${this.configuration.basePath}/registrations/${encodeURIComponent(String(registrationId))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all Registrations
     * Gets a list of all &#x60;Registration&#x60; entities.
     * @param limit Limits the results to a specified number, defaults to 50
     * @param offset Offsets the results to a specified number, defaults to 0
     * @param locationIds A comma separated list of Location IDs
     * @param createdBefore Restricts results to only those that were created before the provided date
     * @param createdAfter Restricts results to only those that were created after the provided date
     * @param needsConfirmation A confirmed &#x60;Registration&#x60; is one with an associated &#x60;Invite&#x60;. This filter returns those without an &#x60;Invite&#x60; when true, and those with an &#x60;Invite&#x60; when false.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRegistrations(limit?: number, offset?: number, locationIds?: string, createdBefore?: string, createdAfter?: string, needsConfirmation?: boolean, observe?: 'body', reportProgress?: boolean): Observable<PaginatedRegistrationsListGuest>;
    public getRegistrations(limit?: number, offset?: number, locationIds?: string, createdBefore?: string, createdAfter?: string, needsConfirmation?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginatedRegistrationsListGuest>>;
    public getRegistrations(limit?: number, offset?: number, locationIds?: string, createdBefore?: string, createdAfter?: string, needsConfirmation?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginatedRegistrationsListGuest>>;
    public getRegistrations(limit?: number, offset?: number, locationIds?: string, createdBefore?: string, createdAfter?: string, needsConfirmation?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (locationIds !== undefined && locationIds !== null) {
            queryParameters = queryParameters.set('location_ids', <any>locationIds);
        }
        if (createdBefore !== undefined && createdBefore !== null) {
            queryParameters = queryParameters.set('created_before', <any>createdBefore);
        }
        if (createdAfter !== undefined && createdAfter !== null) {
            queryParameters = queryParameters.set('created_after', <any>createdAfter);
        }
        if (needsConfirmation !== undefined && needsConfirmation !== null) {
            queryParameters = queryParameters.set('needs_confirmation', <any>needsConfirmation);
        }

        let headers = this.defaultHeaders;

        // authentication (TractionGuestAuth) required
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<PaginatedRegistrationsListGuest>(`${this.configuration.basePath}/registrations`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
