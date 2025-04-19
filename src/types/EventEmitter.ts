interface IEventEmitter {
    emit: (event: string, data?: unknown) => void;
    on: (event: string, callback: (data?: unknown) => void) => void;
}