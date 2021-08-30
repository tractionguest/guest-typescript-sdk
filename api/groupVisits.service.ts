/**
 * Traction Guest API
 * The Traction Guest API is currently under limited release to select customers as we gather and iterate on feedback.  # Getting Started If you are interested in getting early access to the API, please send us an email to [support@tractionguest.com](mailto:support@tractionguest.com).  We will also add you to our Slack channel where you can ask questions and get further help.  # Terms and Conditions Please visit: [https://tractionguest.com/tos/api/](https://tractionguest.com/tos/api/)  # Versioning This API follows [semantic versioning](https://semver.org/), which follows the `Major`.`Minor`.`Patch` format.  * The `Major` number increments when potentially incompatible changes are made. * The `Minor` number increments when backwards-compatible additions are made. * The `Patch` number increments when backwards-compatible bug-fixes are made. 
 *
 * The version of the OpenAPI document: 0.17.0
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
import { GroupVisitCreateParamsGuest } from '../model/groupVisitCreateParams';
import { GroupVisitGuest } from '../model/groupVisit';
import { GroupVisitUpdateParamsGuest } from '../model/groupVisitUpdateParams';
import { PaginatedGroupVisitsListGuest } from '../model/paginatedGroupVisitsList';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class GroupVisitsService {

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
     * Create a new Group Visit (Appointment)
     * Creates a &#x60;GroupVisit&#x60; (Appointment)
     * @param idempotencyKey An optional idempotency key to allow for repeat API requests. Any API request with this key will only be executed once, no matter how many times it\&#39;s submitted. We store idempotency keys for only 24 hours. Any &#x60;Idempotency-Key&#x60; shorter than 10 characters will be ignored
     * @param groupVisitCreateParamsGuest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createGroupVisit(idempotencyKey?: string, groupVisitCreateParamsGuest?: GroupVisitCreateParamsGuest, observe?: 'body', reportProgress?: boolean): Observable<GroupVisitGuest>;
    public createGroupVisit(idempotencyKey?: string, groupVisitCreateParamsGuest?: GroupVisitCreateParamsGuest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GroupVisitGuest>>;
    public createGroupVisit(idempotencyKey?: string, groupVisitCreateParamsGuest?: GroupVisitCreateParamsGuest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GroupVisitGuest>>;
    public createGroupVisit(idempotencyKey?: string, groupVisitCreateParamsGuest?: GroupVisitCreateParamsGuest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (idempotencyKey !== undefined && idempotencyKey !== null) {
            headers = headers.set('Idempotency-Key', String(idempotencyKey));
        }

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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<GroupVisitGuest>(`${this.configuration.basePath}/group_visits`,
            groupVisitCreateParamsGuest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a Group Visit (Appointment)
     * Deletes a single instance of &#x60;GroupVisit&#x60; (Appointment).
     * @param groupVisitId 
     * @param idempotencyKey An optional idempotency key to allow for repeat API requests. Any API request with this key will only be executed once, no matter how many times it\&#39;s submitted. We store idempotency keys for only 24 hours. Any &#x60;Idempotency-Key&#x60; shorter than 10 characters will be ignored
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteGroupVisit(groupVisitId: string, idempotencyKey?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteGroupVisit(groupVisitId: string, idempotencyKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteGroupVisit(groupVisitId: string, idempotencyKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteGroupVisit(groupVisitId: string, idempotencyKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (groupVisitId === null || groupVisitId === undefined) {
            throw new Error('Required parameter groupVisitId was null or undefined when calling deleteGroupVisit.');
        }

        let headers = this.defaultHeaders;
        if (idempotencyKey !== undefined && idempotencyKey !== null) {
            headers = headers.set('Idempotency-Key', String(idempotencyKey));
        }

        // authentication (TractionGuestAuth) required
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.configuration.basePath}/group_visits/${encodeURIComponent(String(groupVisitId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a Group Visit (Appointment)
     * Gets the details of a single instance of a &#x60;GroupVisit&#x60;.
     * @param groupVisitId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGroupVisit(groupVisitId: string, observe?: 'body', reportProgress?: boolean): Observable<GroupVisitGuest>;
    public getGroupVisit(groupVisitId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GroupVisitGuest>>;
    public getGroupVisit(groupVisitId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GroupVisitGuest>>;
    public getGroupVisit(groupVisitId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (groupVisitId === null || groupVisitId === undefined) {
            throw new Error('Required parameter groupVisitId was null or undefined when calling getGroupVisit.');
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

        return this.httpClient.get<GroupVisitGuest>(`${this.configuration.basePath}/group_visits/${encodeURIComponent(String(groupVisitId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all Group Visits (Appointments)
     * Gets a list of all &#x60;GroupVisit&#x60; entities (Appointments).
     * @param limit Limits the results to a specified number. Defaults to 50.
     * @param offset Offsets the results to a specified number. Defaults to 0.
     * @param locationIds A comma-separated string of locations IDs, to only show group visits (appointments) from those locations.
     * @param sortWith A combination of attribute and direction, joined with an underscore, for sorting. Valid attributes are: &#x60;created_at&#x60;, &#x60;updated_at&#x60;, &#x60;name&#x60;, and &#x60;start_time&#x60;. Valid directions are &#x60;asc&#x60; and &#x60;desc&#x60;. E.g., &#x60;name_desc&#x60;, &#x60;start_time_asc&#x60;.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGroupVisits(limit?: string, offset?: string, locationIds?: string, sortWith?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginatedGroupVisitsListGuest>;
    public getGroupVisits(limit?: string, offset?: string, locationIds?: string, sortWith?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginatedGroupVisitsListGuest>>;
    public getGroupVisits(limit?: string, offset?: string, locationIds?: string, sortWith?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginatedGroupVisitsListGuest>>;
    public getGroupVisits(limit?: string, offset?: string, locationIds?: string, sortWith?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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
        if (sortWith !== undefined && sortWith !== null) {
            queryParameters = queryParameters.set('sort_with', <any>sortWith);
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

        return this.httpClient.get<PaginatedGroupVisitsListGuest>(`${this.configuration.basePath}/group_visits`,
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
     * Update a Group Visit (Appointment)
     * Updates an existing &#x60;GroupVisit&#x60; (Appointment).
     * @param groupVisitId 
     * @param idempotencyKey An optional idempotency key to allow for repeat API requests. Any API request with this key will only be executed once, no matter how many times it\&#39;s submitted. We store idempotency keys for only 24 hours. Any &#x60;Idempotency-Key&#x60; shorter than 10 characters will be ignored
     * @param groupVisitUpdateParamsGuest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateGroupVisit(groupVisitId: string, idempotencyKey?: string, groupVisitUpdateParamsGuest?: GroupVisitUpdateParamsGuest, observe?: 'body', reportProgress?: boolean): Observable<GroupVisitGuest>;
    public updateGroupVisit(groupVisitId: string, idempotencyKey?: string, groupVisitUpdateParamsGuest?: GroupVisitUpdateParamsGuest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GroupVisitGuest>>;
    public updateGroupVisit(groupVisitId: string, idempotencyKey?: string, groupVisitUpdateParamsGuest?: GroupVisitUpdateParamsGuest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GroupVisitGuest>>;
    public updateGroupVisit(groupVisitId: string, idempotencyKey?: string, groupVisitUpdateParamsGuest?: GroupVisitUpdateParamsGuest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (groupVisitId === null || groupVisitId === undefined) {
            throw new Error('Required parameter groupVisitId was null or undefined when calling updateGroupVisit.');
        }

        let headers = this.defaultHeaders;
        if (idempotencyKey !== undefined && idempotencyKey !== null) {
            headers = headers.set('Idempotency-Key', String(idempotencyKey));
        }

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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<GroupVisitGuest>(`${this.configuration.basePath}/group_visits/${encodeURIComponent(String(groupVisitId))}`,
            groupVisitUpdateParamsGuest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
