<h1>Oversecured Backend </h1>
<h2>Tech task</h2>
<h2> <a href="http://oversecured-frontend-react.s3-website.eu-central-1.amazonaws.com/">Frontend ReactJS</a></h2>
<h2> <a href="http://oversecured-frontend-js.s3-website.eu-central-1.amazonaws.com/">Frontend Vanilla JS</a></h2>
<p>This repository backend is part of my technical task</p>
<h3>Languages and Tools</h3>
<ul>
    <li>
        <span><a href="https://nodejs.org/" target="_blank" rel="noreferrer">NodeJS</a>, environment was used</span>
    </li>
    <li>
        <span><a href="https://expressjs.com/" target="_blank" rel="noreferrer">ExpressJS</a>, this framework was used to create the app's backend</span>
    </li>
    <li>
        <span><a href="https://www.serverless.com/" target="_blank" rel="noreferrer">Serverless</a>, this framework used to create lambda functions on AWS </span>
    </li>
  
    <li>
        <span><a href="https://aws.amazon.com/ru/dynamodb/" target="_blank" rel="noreferrer">DynamoDB</a>, to store data. </span>
    </li>
    <li>
        <span><a href="https://dynamoosejs.com/" target="_blank" rel="noreferrer">Dynamoosejs</a>, to work with the database on the server. </span>
    </li>
    <li>
        <span><a href="https://aws.amazon.com/en/lambda/" target="_blank" rel="noreferrer">AWS Lambda</a>,used to deploy the backend. </span>
    </li>
    <li>
        <span><a href="https://github.com/kelektiv/node.bcrypt.js" target="_blank" rel="noreferrer">Bcrypt</a>, used to hash passwords</span>
    </li>
    <li>
        <span><a href="https://github.com/expressjs/cors" target="_blank" rel="noreferrer">CORS</a>, middleware used to provide access to the backend</span>
    </li>
    <li>
        <span><a href="https://github.com/hapijs/joi" target="_blank" rel="noreferrer">Joi</a>, used to describe schemas and validate data </span>
    </li>
    <li>
        <span><a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank" rel="noreferrer">Jsonwebtoken</a>, this package is used to create tokens.         </span>
    </li>  
</ul>

<h3>Description</h3>
<p>In writing the backend I used the MVC model.</p>
 <ul>
        <li>For visitors and users I created a model that consists of schemas.</li>
        <li>For the processing of all methods for contacts and users there are controllers.</li>
        <li>For the processing of requests created routes, also for contacts and users.</li>
 </ul>
<p>Middlewares</p>
 <ul>
        <li>Authenticate - checks the user's bearer token. </li>
        <li>Validation of the request body - checking for scheme consistency</li>
 </ul>
<p>Helpers</p>
 <ul>
        <li>Controller wrapper - reused for all controllers.</li>
        <li>HTTP ERROR - used to handle client errors.</li>
 </ul>



<h4>Authentication controllers</h4>
   <ul>
        <li>Registration, method: post</li>
        <li>Log In, method: post</li>
        <li>Log Out, method: post</li>
        <li>Get current User, method: get</li>
   </ul>

<h4>Visitors controllers</h4>
   <ul>
        <li>Get all visitors, method: get</li>
        <li>Get visitors by ID, method: get</li>
        <li>Add a new visitors, method: post</li>
        <li>Update an existing visitor, method: patch</li>
        <li>Delete visitor, method: delete</li>
   </ul>   

<h4>Error handling </h4>
   <ul>
        <li>400: Bad Request</li>
        <li>401: Unauthorized</li>
        <li>402: Forbidden</li>
        <li>404: Not found</li>
        <li>409: Conflict</li>
   </ul>  

  
  
  

  
 

