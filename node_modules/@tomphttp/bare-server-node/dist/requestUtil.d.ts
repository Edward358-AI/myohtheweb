/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import type { Request } from './AbstractMessage.js';
import type { ServerConfig } from './Server.js';
import type { IncomingMessage } from 'node:http';
import type { Duplex } from 'node:stream';
export interface BareRemote {
    host: string;
    port: number | string;
    path: string;
    protocol: string;
}
export declare type BareHeaders = Record<string, string | string[]>;
export declare function fetch(config: ServerConfig, request: Request, requestHeaders: BareHeaders, url: BareRemote): Promise<IncomingMessage>;
export declare function upgradeFetch(serverConfig: ServerConfig, request: Request, requestHeaders: BareHeaders, remote: BareRemote): Promise<[IncomingMessage, Duplex, Buffer]>;
