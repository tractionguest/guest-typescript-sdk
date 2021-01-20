/**
 * Traction Guest API
 * The Traction Guest API is currently under limited release to select customers as we gather and iterate on feedback.  # Getting Started If you are interested in getting early access to the API, please send us an email to [support@tractionguest.com](mailto:support@tractionguest.com).  We will also add you to our Slack channel where you can ask questions and get further help.  # Terms and Conditions Please visit: [https://tractionguest.com/tos/api/](https://tractionguest.com/tos/api/)  # Versioning This API follows [semantic versioning](https://semver.org/), which follows the `Major`.`Minor`.`Patch` format.  * The `Major` number increments when potentially incompatible changes are made. * The `Minor` number increments when backwards-compatible additions are made. * The `Patch` number increments when backwards-compatible bug-fixes are made. 
 *
 * The version of the OpenAPI document: 0.14.2
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

import { BatchJobGuest } from '../model/batchJob';
import { ErrorsListGuest } from '../model/errorsList';
import { HostBatchCreateParamsGuest } from '../model/hostBatchCreateParams';
import { HostCreateParamsGuest } from '../model/hostCreateParams';
import { HostGuest } from '../model/host';
import { PaginatedHostsListGuest } from '../model/paginatedHostsList';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class HostsService {

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
     * Create a Host
     * Creates a Host
     * @param hostCreateParamsGuest 
     * @param idempotencyKey An optional idempotency key to allow for repeat API requests. Any API request with this key will only be executed once, no matter how many times it\&#39;s submitted. We store idempotency keys for only 24 hours. Any &#x60;Idempotency-Key&#x60; shorter than 10 characters will be ignored
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createHost(hostCreateParamsGuest: HostCreateParamsGuest, idempotencyKey?: string, observe?: 'body', reportProgress?: boolean): Observable<HostGuest>;
    public createHost(hostCreateParamsGuest: HostCreateParamsGuest, idempotencyKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<HostGuest>>;
    public createHost(hostCreateParamsGuest: HostCreateParamsGuest, idempotencyKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<HostGuest>>;
    public createHost(hostCreateParamsGuest: HostCreateParamsGuest, idempotencyKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (hostCreateParamsGuest === null || hostCreateParamsGuest === undefined) {
            throw new Error('Required parameter hostCreateParamsGuest was null or undefined when calling createHost.');
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

        return this.httpClient.post<HostGuest>(`${this.configuration.basePath}/hosts`,
            hostCreateParamsGuest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create multiple Hosts
     * Creates a batch of &#x60;Host&#x60; records in an async queue. Please note, every action taken against this endpoint is recorded in the audit log.
     * @param idempotencyKey An optional idempotency key to allow for repeat API requests. Any API request with this key will only be executed once, no matter how many times it\&#39;s submitted. We store idempotency keys for only 24 hours. Any &#x60;Idempotency-Key&#x60; shorter than 10 characters will be ignored
     * @param hostBatchCreateParamsGuest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createHosts(idempotencyKey?: string, hostBatchCreateParamsGuest?: HostBatchCreateParamsGuest, observe?: 'body', reportProgress?: boolean): Observable<BatchJobGuest>;
    public createHosts(idempotencyKey?: string, hostBatchCreateParamsGuest?: HostBatchCreateParamsGuest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BatchJobGuest>>;
    public createHosts(idempotencyKey?: string, hostBatchCreateParamsGuest?: HostBatchCreateParamsGuest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BatchJobGuest>>;
    public createHosts(idempotencyKey?: string, hostBatchCreateParamsGuest?: HostBatchCreateParamsGuest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<BatchJobGuest>(`${this.configuration.basePath}/hosts/batch`,
            hostBatchCreateParamsGuest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all Hosts
     * Gets a list of all &#x60;Host&#x60; entities.
     * @param query Will filter by &#x60;first_name&#x60;, &#x60;last_name&#x60;, and &#x60;email&#x60;
     * @param limit Limits the results to a specified number, defaults to 50
     * @param offset Offsets the results to a specified number, defaults to 0
     * @param include A list of comma-separated related models to include
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getHosts(query?: string, limit?: number, offset?: number, include?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginatedHostsListGuest>;
    public getHosts(query?: string, limit?: number, offset?: number, include?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginatedHostsListGuest>>;
    public getHosts(query?: string, limit?: number, offset?: number, include?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginatedHostsListGuest>>;
    public getHosts(query?: string, limit?: number, offset?: number, include?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (query !== undefined && query !== null) {
            queryParameters = queryParameters.set('query', <any>query);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
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

        return this.httpClient.get<PaginatedHostsListGuest>(`${this.configuration.basePath}/hosts`,
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
