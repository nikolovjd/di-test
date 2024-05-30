class Container {
    private services = new Map<string, any>();

    register<T>(name: string, service: T): void {
        this.services.set(name, service);
    }

    resolve<T>(name: string): T {
        const service = this.services.get(name);
        if (!service) {
            throw new Error(`Service ${name} not found`);
        }
        return service;
    }
}

const container = new Container();
export { container, Container };
