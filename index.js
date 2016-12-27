var FirebaseServer = require('firebase-server');

new FirebaseServer(52100, 'ws://127.0.1:52100', {
  labs: {
    "H1Qu9nUVg": {
      description: "",
      files: [{name: 'main.py', content: 'print "Hello World!";'}],
      id:"H1Qu9nUVg",
      name: "Untitled",
      status: 0,
      tags: [],
      userId: ''
    }
  }
});

console.log('Started local firebase server on: ws://127.0.1:52100');
