/** @format */

import { Injectable } from '@angular/core';
import { Client, ClientOptions, init, PickerInstance, PickerOptions } from 'filestack-js';

@Injectable({
  providedIn: 'root',
})
export class FilestackService {
  private clientInstance: Client | undefined;
  private clientOptions: ClientOptions | undefined;
  private apikey: string;

  constructor() {
    this.apikey = 'Ad1QJeB3ETxiEeMt5XRaZz';
  }

  private get client(): Client {
    if (!this.clientInstance) {
      return this.init();
    }

    return this.clientInstance;
  }

  private set client(client: Client) {
    this.clientInstance = client;
  }

  /**
   * Initialize filestack client
   * @param apikey - Filestack apikey
   * @param clientOptions - Client options
   */
  init(apikey?: string, clientOptions?: ClientOptions): Client {
    this.client = init(apikey || this.apikey, clientOptions || this.clientOptions);

    return this.client;
  }

  /**
   * Instance of picker class
   * @param options - picker options
   */
  picker(options?: PickerOptions): PickerInstance {
    return this.client.picker(options);
  }
}
