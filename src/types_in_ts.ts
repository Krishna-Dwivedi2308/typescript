let drink = 'chai'; //even if we do not define any type it will be string automatically
// drink=0 //error because it had taken string type earlier automatically

let cups = Math.random() > 0.5 ? 10 : '5'; //type will be string or number because both are possibilities

// THIS ABOVE PROCESS OF DETECTING TYPES IS CALLED TYPE INFERENCING

let channelName = 'chaiaurcode';
// channelName=12222 //error because it had taken string type earlier

// type error is the most common error in TS .

// now let us look at TYPE ANNOTATION

let channelName2: string = 'chaiaurcode'; //this process is called type annotation where we explicitly define the type
// channelName2=12222 //error because it had taken string type earlier

// ------------------------
// TYPES OF ANNOTATIONS
// ------------------------
