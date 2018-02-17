export interface IClientStore {
    save(key: string, value: string): void;
    get(key: string): string;
    checkEnbled(): boolean;
}
