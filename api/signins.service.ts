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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ErrorsListGuest } from '../model/errorsList';
import { PaginatedSigninsListGuest } from '../model/paginatedSigninsList';
import { SigninCreateParamsGuest } from '../model/signinCreateParams';
import { SigninDetailGuest } from '../model/signinDetail';
import { SigninGuest } from '../model/signin';
import { SigninUpdateParamsGuest } from '../model/signinUpdateParams';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class SigninsService {

    protected basePath = 'https://tractionguest.ca/api/v3';
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
     * Create Signin
     * Creates a Signin
     * @param signinCreateParamsGuest Params for creating a Signin can omit certain fields if a &#x60;registration_id&#x60; is present.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createSignin(signinCreateParamsGuest?: SigninCreateParamsGuest, observe?: 'body', reportProgress?: boolean): Observable<SigninGuest>;
    public createSignin(signinCreateParamsGuest?: SigninCreateParamsGuest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SigninGuest>>;
    public createSignin(signinCreateParamsGuest?: SigninCreateParamsGuest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SigninGuest>>;
    public createSignin(signinCreateParamsGuest?: SigninCreateParamsGuest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<SigninGuest>(`${this.configuration.basePath}/signins`,
            signinCreateParamsGuest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a Signin
     * Gets the details of a single instance of a &#x60;Signin&#x60;.
     * @param signinId 
     * @param include A list of comma-separated related models to include
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSignin(signinId: string, include?: string, observe?: 'body', reportProgress?: boolean): Observable<SigninDetailGuest>;
    public getSignin(signinId: string, include?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SigninDetailGuest>>;
    public getSignin(signinId: string, include?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SigninDetailGuest>>;
    public getSignin(signinId: string, include?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (signinId === null || signinId === undefined) {
            throw new Error('Required parameter signinId was null or undefined when calling getSignin.');
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

        return this.httpClient.get<SigninDetailGuest>(`${this.configuration.basePath}/signins/${encodeURIComponent(String(signinId))}`,
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
     * List all Signins
     * Gets a list of all &#x60;Signin&#x60; entities.
     * @param locationIds A comma separated list of Location IDs
     * @param withColours A comma separated list of case-insensitive colour values. i.e., &#x60;red&#x60;, &#x60;green&#x60;, &#x60;yellow&#x60;, and &#x60;orange&#x60;
     * @param query Allows you to query by &#x60;company&#x60;, &#x60;email&#x60;, &#x60;first_name&#x60;, &#x60;last_name&#x60;, and &#x60;location_name&#x60;
     * @param withAcknowledged Filters to all those &#x60;Signin&#x60;s that have, or have not been acknowledged
     * @param withSignedIn Filters to all &#x60;Signin&#x60;s that are, or are not currently signed out.
     * @param signinBefore Filters results to all those *before* the provided datetime
     * @param signinAfter Filters results to all those *after* the provided datetime
     * @param limit Limits the results to a specified number, defaults to 50
     * @param offset Offsets the results to a specified number, defaults to 0
     * @param querySort Allows you to override ordering by most relevant results when querying
     * @param include A list of comma-separated related models to include
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSignins(locationIds?: string, withColours?: string, query?: string, withAcknowledged?: boolean, withSignedIn?: boolean, signinBefore?: string, signinAfter?: string, limit?: number, offset?: number, querySort?: 'signin_timestamp_desc' | 'signin_timestamp_asc', include?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginatedSigninsListGuest>;
    public getSignins(locationIds?: string, withColours?: string, query?: string, withAcknowledged?: boolean, withSignedIn?: boolean, signinBefore?: string, signinAfter?: string, limit?: number, offset?: number, querySort?: 'signin_timestamp_desc' | 'signin_timestamp_asc', include?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginatedSigninsListGuest>>;
    public getSignins(locationIds?: string, withColours?: string, query?: string, withAcknowledged?: boolean, withSignedIn?: boolean, signinBefore?: string, signinAfter?: string, limit?: number, offset?: number, querySort?: 'signin_timestamp_desc' | 'signin_timestamp_asc', include?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginatedSigninsListGuest>>;
    public getSignins(locationIds?: string, withColours?: string, query?: string, withAcknowledged?: boolean, withSignedIn?: boolean, signinBefore?: string, signinAfter?: string, limit?: number, offset?: number, querySort?: 'signin_timestamp_desc' | 'signin_timestamp_asc', include?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (locationIds !== undefined && locationIds !== null) {
            queryParameters = queryParameters.set('location_ids', <any>locationIds);
        }
        if (withColours !== undefined && withColours !== null) {
            queryParameters = queryParameters.set('with_colours', <any>withColours);
        }
        if (query !== undefined && query !== null) {
            queryParameters = queryParameters.set('query', <any>query);
        }
        if (withAcknowledged !== undefined && withAcknowledged !== null) {
            queryParameters = queryParameters.set('with_acknowledged', <any>withAcknowledged);
        }
        if (withSignedIn !== undefined && withSignedIn !== null) {
            queryParameters = queryParameters.set('with_signed_in', <any>withSignedIn);
        }
        if (signinBefore !== undefined && signinBefore !== null) {
            queryParameters = queryParameters.set('signin_before', <any>signinBefore);
        }
        if (signinAfter !== undefined && signinAfter !== null) {
            queryParameters = queryParameters.set('signin_after', <any>signinAfter);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (querySort !== undefined && querySort !== null) {
            queryParameters = queryParameters.set('query_sort', <any>querySort);
        }
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

        return this.httpClient.get<PaginatedSigninsListGuest>(`${this.configuration.basePath}/signins`,
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
     * Update a Signin
     * Update, acknowledge, or &#x60;Signout&#x60; a &#x60;Signin&#x60;
     * @param signinId 
     * @param signinUpdateParamsGuest The only updatable values for a &#x60;Signin&#x60; are &#x60;badge_number&#x60;, &#x60;badge_returned&#x60;, &#x60;is_accounted_for&#x60;, &#x60;is_signed_out&#x60;, and &#x60;is_acknowledged&#x60;.  &#x60;is_signed_out&#x60; and &#x60;is_acknowledged&#x60; are pseudo attributes that once set to true, are irreversible.
     * @param idempotencyKey An optional idempotency key to allow for repeat API requests. Any API request with this key will only be executed once, no matter how many times it\&#39;s submitted. We store idempotency keys for only 24 hours. Any &#x60;Idempotency-Key&#x60; shorter than 10 characters will be ignored
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSignin(signinId: string, signinUpdateParamsGuest: SigninUpdateParamsGuest, idempotencyKey?: string, observe?: 'body', reportProgress?: boolean): Observable<SigninDetailGuest>;
    public updateSignin(signinId: string, signinUpdateParamsGuest: SigninUpdateParamsGuest, idempotencyKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SigninDetailGuest>>;
    public updateSignin(signinId: string, signinUpdateParamsGuest: SigninUpdateParamsGuest, idempotencyKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SigninDetailGuest>>;
    public updateSignin(signinId: string, signinUpdateParamsGuest: SigninUpdateParamsGuest, idempotencyKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (signinId === null || signinId === undefined) {
            throw new Error('Required parameter signinId was null or undefined when calling updateSignin.');
        }
        if (signinUpdateParamsGuest === null || signinUpdateParamsGuest === undefined) {
            throw new Error('Required parameter signinUpdateParamsGuest was null or undefined when calling updateSignin.');
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

        return this.httpClient.put<SigninDetailGuest>(`${this.configuration.basePath}/signins/${encodeURIComponent(String(signinId))}`,
            signinUpdateParamsGuest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
