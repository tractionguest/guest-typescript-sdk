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
import { PackageCreateParamsGuest } from '../model/packageCreateParams';
import { PackageGuest } from '../model/package';
import { PackageUpdateParamsGuest } from '../model/packageUpdateParams';
import { PaginatedPackagesListGuest } from '../model/paginatedPackagesList';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class PackagesService {

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
     * Create package
     * Creates a [Package] entity by extracting information about the recipient and carrier from the given image file.
     * @param packageCreateParamsGuest Parameters for creating a package
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createPackage(packageCreateParamsGuest?: PackageCreateParamsGuest, observe?: 'body', reportProgress?: boolean): Observable<PackageGuest>;
    public createPackage(packageCreateParamsGuest?: PackageCreateParamsGuest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PackageGuest>>;
    public createPackage(packageCreateParamsGuest?: PackageCreateParamsGuest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PackageGuest>>;
    public createPackage(packageCreateParamsGuest?: PackageCreateParamsGuest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<PackageGuest>(`${this.configuration.basePath}/packages`,
            packageCreateParamsGuest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Delete a pacakge
     * @param packageId 
     * @param idempotencyKey An optional idempotency key to allow for repeat API requests. Any API request with this key will only be executed once, no matter how many times it\&#39;s submitted. We store idempotency keys for only 24 hours. Any &#x60;Idempotency-Key&#x60; shorter than 10 characters will be ignored
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePackage(packageId: string, idempotencyKey?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deletePackage(packageId: string, idempotencyKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deletePackage(packageId: string, idempotencyKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deletePackage(packageId: string, idempotencyKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (packageId === null || packageId === undefined) {
            throw new Error('Required parameter packageId was null or undefined when calling deletePackage.');
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
        ];

        return this.httpClient.delete<any>(`${this.configuration.basePath}/packages/${encodeURIComponent(String(packageId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Package
     * Gets the details of a single instance of a Package
     * @param packageId 
     * @param include A list of comma-separated related models to include 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPackage(packageId: string, include?: string, observe?: 'body', reportProgress?: boolean): Observable<PackageGuest>;
    public getPackage(packageId: string, include?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PackageGuest>>;
    public getPackage(packageId: string, include?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PackageGuest>>;
    public getPackage(packageId: string, include?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (packageId === null || packageId === undefined) {
            throw new Error('Required parameter packageId was null or undefined when calling getPackage.');
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

        return this.httpClient.get<PackageGuest>(`${this.configuration.basePath}/packages/${encodeURIComponent(String(packageId))}`,
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
     * Get packages
     * Gets a list of [Package] entities.
     * @param locationIds A comma separated list of Location ids for filtering. i.e. \&#39;1,2,3\&#39; Will return all packages from all locations if none are specified
     * @param limit Limits the results to a specified number, defaults to 50
     * @param offset Offsets the results to a specified number, defaults to 0
     * @param include A list of comma-separated related models to include. Possible values: \&#39;recipient\&#39;, \&#39;location\&#39;, \&#39;image\&#39;
     * @param pickedUp Filters packages by their \&quot;picked_up\&quot; state..
     * @param query Searches for packages by recipient name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPackages(locationIds?: string, limit?: number, offset?: number, include?: string, pickedUp?: boolean, query?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginatedPackagesListGuest>;
    public getPackages(locationIds?: string, limit?: number, offset?: number, include?: string, pickedUp?: boolean, query?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginatedPackagesListGuest>>;
    public getPackages(locationIds?: string, limit?: number, offset?: number, include?: string, pickedUp?: boolean, query?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginatedPackagesListGuest>>;
    public getPackages(locationIds?: string, limit?: number, offset?: number, include?: string, pickedUp?: boolean, query?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (locationIds !== undefined && locationIds !== null) {
            queryParameters = queryParameters.set('location_ids', <any>locationIds);
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
        if (pickedUp !== undefined && pickedUp !== null) {
            queryParameters = queryParameters.set('picked_up', <any>pickedUp);
        }
        if (query !== undefined && query !== null) {
            queryParameters = queryParameters.set('query', <any>query);
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

        return this.httpClient.get<PaginatedPackagesListGuest>(`${this.configuration.basePath}/packages`,
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
     * Update Package
     * Update/Edit information about a Package.  picked_up - changes the package_state to picked up and assigns non null value to picked_up_at  recipient_id - update the package\&#39;s intended recipient. Changes package_state to \&#39;recipient_matched\&#39; if a match hasn\&#39;t been found and notifies host about their package via email. A previous recipient will stop getting notifications  carrier_name - change/update the package\&#39;s carrier/courier information 
     * @param packageId 
     * @param idempotencyKey An optional idempotency key to allow for repeat API requests. Any API request with this key will only be executed once, no matter how many times it\&#39;s submitted. We store idempotency keys for only 24 hours. Any &#x60;Idempotency-Key&#x60; shorter than 10 characters will be ignored
     * @param packageUpdateParamsGuest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePackage(packageId: string, idempotencyKey?: string, packageUpdateParamsGuest?: PackageUpdateParamsGuest, observe?: 'body', reportProgress?: boolean): Observable<PackageGuest>;
    public updatePackage(packageId: string, idempotencyKey?: string, packageUpdateParamsGuest?: PackageUpdateParamsGuest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PackageGuest>>;
    public updatePackage(packageId: string, idempotencyKey?: string, packageUpdateParamsGuest?: PackageUpdateParamsGuest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PackageGuest>>;
    public updatePackage(packageId: string, idempotencyKey?: string, packageUpdateParamsGuest?: PackageUpdateParamsGuest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (packageId === null || packageId === undefined) {
            throw new Error('Required parameter packageId was null or undefined when calling updatePackage.');
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

        return this.httpClient.put<PackageGuest>(`${this.configuration.basePath}/packages/${encodeURIComponent(String(packageId))}`,
            packageUpdateParamsGuest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
