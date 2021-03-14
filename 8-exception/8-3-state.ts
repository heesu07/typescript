{
  type NetworkErrorState={
    result:'fail',
    reason: 'offine' | 'down' | 'timeout',
  }
  type SuccessState ={
    result: 'success';
  }
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConneet():ResultState{
      //throw new Error(`no network`);
      //return {result: 'success'};
      return {result: 'fail', reason:'offine'};
    }
  }
  
  class UserService{
    constructor(private client: NetworkClient){
    }
    login(): ResultState{
      const result = this.client.tryConneet();
      return result;
      // ...
    }
  }
  
  // Another example
  class App{
    constructor(private userService: UserService){}
    run(){

      //1. Error 로 처리 할 경우
      // try{ // 이곳의 위치에서 처리하는게 적절하다.
      //   this.userService.login();
      // }catch(e){
      //   console.log(e.message);
      // }finally{
      //   console.log(`finally`);  
      // }
      //2. ErrorState 로 처리 할 경우
      const conn = this.userService.login();
      switch(conn.result){
        case 'success':
          console.log('Greeting !');
          break;
        case 'fail':
          console.log(`login error: ${conn.reason}!`);
          break;
        default:
          break;          
      }
    };
  }
  
  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
    app.run();
  
  
}