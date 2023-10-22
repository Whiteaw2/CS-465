# CS-465

## Architecture

During my work on the product, I made use of several frontend architectures as they suited the requirements of the client. Initially, for fast development, static resources were hosted locally and later replaced by dynamically populated pages which made use of the Pug HandleBars HTML preprocessing framework and Node.js to provide a more cohesive and responsive user experience. Later, I built out APIs which served content dynamically to the preprocessors so that trip details could be revised site-wide with secure, uniform REST exchanges with the database. Lastly, to facilitate backend user management of travel packages, I implemented the Single Page Application architecture, exposing CRUD functionality including security checks through Angular. This application of the MEAN architecture in several stages and forms blended the many advanatages of frontend SEO-optimized functionality and backend compliant web development. 

For this product, it was important to use a NoSQL (not only SQL) database as it provides optimal flexibility and speed. NoSQL databases support small to medium datasets of varied information easily and their native support of sharding ensures that resources and redundancy are standard. Additionally, making use of MongoDB ensures easy configuration for iterative prototyping in the MEAN architecture through the Mongoose Node.js library.  


## Functionality

JSON (JavaScript Object Notation), though built on top of JavaScript syntax, is a simple way to represent objects in many applications and in this product represents both the calls to secure API endpoints and the objects themselves. The schemas I established for exchange to and from MongoDB endpoints ensured that the JSON objects were properly formatted and would not returned errors. Once returned, the frontend components parse the JSON objects and display their values in the dynamically populated templates ensuring that the data and UIs conformed accross the site, providing a consistent and reliable user experience for front and backend users. Throughout development, I refactored many aspects of the code to ensure that object exchanges and display were functional, performant, and that when errors did occur, they provided enough development information to aid in their resolution. Having uniform UI templates ensured that once a base set of work was done, it was easy to add new pages and interactions for users such as in Bootstrap cards which dynamically populated and provided intuitive interactions, reducing rework and improving debug time.


## Testing

The development of this product to meet the client's requirements required extensive use of API enpoints, associated methods, and security. Through the use of CORS (Cross-Origin Resource Sharing) and Express routes, I developed REST endpoints for CRUD methods to add, update, and delete entries in the database by authorized users. The use of cryptographic salted hash functions ensured that only certain users were able to modify entries. It is also worth mentioning that many of these functionalities were expedited through the use of tools such as MongoDB's Compass database application and the Postman API platform. These tools made it significantly easier to preload tokens, verify the contents of the token, evaluate entries and updates to databases, and to debug the calls made between functions and to the datase APIs.

## Reflection

This course has been extremely helpful and relevant to my professional goals and career. As a software engineering professional in an emerging technology team, I am often exposed to many new types of technologies, but the areas of front and backend development are simultaneously less flashy yet more critical to the effective use of new technologies. The world of connected technologies is underlied by databases, frontend interfaces, and their related concepts. I greatly appreciate this course and its ability to prepare me for increased relevancy in my field. Through this class I worked with a new architecture, API testing tools, and built a functional web platform addressing all client needs in an effective package.
