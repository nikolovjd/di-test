import { container } from './container';

function Service(name: string): ClassDecorator {
    return (target: any) => {
        container.register(name, new target());
    };
}

function Inject(name: string): PropertyDecorator {
    return (target: any, propertyKey: string | symbol) => {
        Object.defineProperty(target, propertyKey, {
            get: () => container.resolve(name),
            enumerable: true,
            configurable: true
        });
    };
}

export { Service, Inject };
