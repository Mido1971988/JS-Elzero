// self used inside webworker and refer to this script
self.addEventListener('message', (ev)=>{
    console.log(ev) // message event
    console.log('Web worker started with data: ', ev.data); //ev.data is argument passed in worker.postMessage("fetch")
    
    let data = ev.data;
    switch(data){
        // case 'Get Started':
        //     self.postMessage('Web Worker Started');
        //     break;
        // case 'Other':
        //     self.postMessage('Other task...');
        //     break;
        case 'fetch':
            let url = 'http://jsonplaceholder.typicode.com/users';
            console.log('about to do the fetch for the data');
            
            fetch(url)
            .then(response=>response.json() )
            .then( data =>{
                self.postMessage( data);
            })
            .catch(err=>console.log(err));
            
            break;
        default:
            console.log('Invalid access');
            self.postMessage('Closing web worker');
            self.close();
    }
    
})