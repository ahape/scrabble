interface SignalR {
    HubConnectionBuilder: SignalRConnectionBuilderConstructor;
}

interface SignalRConnectionBuilderConstructor {
    new (): SignalRConnectionBuilder;
}

interface SignalRConnectionBuilder {
    withUrl(
        endpoint: string
    ): {
        build(): SignalRConnection;
    };
}

interface SignalRConnection {
    on(event: string, cb: (...args: string[]) => void): void;
    start(): Promise<unknown>;
    invoke(event: string, ...args: string[]): Promise<unknown>;
}

declare const signalR: SignalR;

declare module "signalR" {
    export = signalR;
}
