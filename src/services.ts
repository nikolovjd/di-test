import { Service, Inject } from './decorators';

@Service('myService')
class MyService {
    sayHello() {
        console.log('Blahblahblah Mr. Freeman');
    }
}

class Client {
    @Inject('myService')
    private myService!: MyService;

    useService() {
        this.myService.sayHello();
    }
}

export { MyService, Client };
