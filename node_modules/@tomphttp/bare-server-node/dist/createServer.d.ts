import type { ServerConfig } from './Server.js';
import BareServer from './Server.js';
export default function createBareServer(directory: string, init?: Partial<ServerConfig>): BareServer;
