class NetworkClient {
  tryConneet():void{
    throw new Error(`no network`);
  }
}

class UserService{
  constructor(private client: NetworkClient){
  }
  login(){
    this.client.tryConneet();
    // ...
  }
}

// Another example
class App{
  constructor(private userService: UserService){}
  run(){
    try{ // 이곳의 위치에서 처리하는게 적절하다.
      this.userService.login();
    }catch(e){
      console.log(e.message);
    }finally{
      console.log(`finally`);  
    }
  };
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
  app.run();

