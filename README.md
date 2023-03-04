
# server

	First build server  - npm run build.
	After build you can run server - npm run start.

# client

	build client  - npm run build.
	run server - npm run start.
	test - npm test.

# There were some things I did not answer since the task was limited in time:

# client

- Showing the user an appropriate message - if there was a failure in adding or disconnecting     from the server.
- Validation on videoId.

# server

- Now all the saved information, it is saved in the memory of the server.
  If the server crashes, all the information disappears, so we have to store data and take it from one place like   DB.
- in insert and remove videos, I lock the object and a race condition can occur.
  In order to solve this we can manage a queue of requests and thus we will not lose any request.

# scaling

 If one server is not enough for all the requests and we have to add additional servers, we will need the  information to be shared by everyone and therefore we will have to add input and retrieving the information from  the DB.
 And we will have to manage the requests through queues so that requests do not disappear.








