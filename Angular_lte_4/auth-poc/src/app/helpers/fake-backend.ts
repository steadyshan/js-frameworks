import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(
    backend: MockBackend, 
    options: BaseRequestOptions) {
        
  let token = ['','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA',
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNoYW50YW51IEdhZGthcmkiLCJhZG1pbiI6dHJ1ZX0.V5VF2u8DUj5Ut6FOLHz0t39hFpIGfNJevYBszzrlN0U',
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkR1bW1lciIsImFkbWluIjpmYWxzZX0.7RpA3CtoZ1sT1G8HDK7D_9CVbPAjfmDAdXnUSCkv5c4'];
  /*
    "alg": "HS256"
      {
  "sub": "1234567890",
  "name": "Shantanu Gadkari",
  "admin": true
}
  */
  // step 1.. remove hard code and add the users here
  let userList = [

    { 
      name: 'Mosh Hamedani',
      email:'tt@domain.com',
      userId:'moshhatt',
      password:'1234',
      admin: true,
      role:'',
    },
    { 
      name: 'Mosh Hamedani',
      email:'mosh@domain.com',
      userId:'moshha',
      password:'1234',
      admin: true,
      role:'',
    },{ 
        name: 'Shantanu Gadkari',
        email:'steadyshan@gmail.com',
        userId:'steadyshan',
        password:'1234',
        admin: true,
        role:'',
      },{ 
        name: 'Dummer',
        email:'dummer@gmail.com',
        userId:'dummer',
        password:'1234',
        admin: false,
        role:'',
      },
  ]
  backend.connections.subscribe((connection: MockConnection) => {
    // We are using the setTimeout() function to simulate an 
    // asynchronous call to the server that takes 1 second. 
    setTimeout(() => {
      //
      // Fake implementation of /api/authenticate
      //
      if (connection.request.url.endsWith('/api/authenticate') &&
        connection.request.method === RequestMethod.Post) {
          console.log(JSON.stringify(connection.request.getBody()));
        let body = JSON.parse(connection.request.getBody());
        const indexFnd = userList.findIndex(recD =>  
            (body.email === recD.userId || body.email === recD.email) && body.password == recD.password );
            console.log(`${indexFnd} ${token[indexFnd]}`);
        if (indexFnd && indexFnd > -1 ){
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: token[indexFnd], json: userList[indexFnd] }
           })));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
        /*
        if (body.email === 'mosh@domain.com' && body.password === '1234') {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: token[0] }
           })));
        } else if (body.email === 'steadyshan@gmail.com' && body.password === '1234') {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: token[1] }
           })));
        } else if (body.email === 'dummer@gmail.com' && body.password === '1234') {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: token[2] }
           })));
        } else{
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
        */
      }



       // 
       // Fake implementation of /api/orders
       //
       if (connection.request.url.endsWith('/api/orders') && 
           connection.request.method === RequestMethod.Get) {
         if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200, body: [1, 2, 3] })
         ));
       } else {
           connection.mockRespond(new Response(
             new ResponseOptions({ status: 401 })
           ));
       }
    }



    }, 1000);
  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};