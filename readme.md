# Instructions:

To run this project, do the following:

1. first of all , run the ```'docker-compose up -d'``` command with the docker-compose YAML file that can be found in this project. this will ensure that a Postgres DB is running on your machine.
2. do ```'yarn'``` to install all the required node_modules.
3. finally, to start the project, use ```'yarn dev'``` command. it will run concurrently the UI and the server.

# Important Notes:
1. There is a Swagger page that can be visited while the server is  running on "http://localhost:8306/swagger" address.
2. As far as I understood from the assignment instructions, there is a public API that cannot be used by the UI. I'm talking about the "Get all published release notes of the app". it can be initiated through POST request to the following address: "http://localhost:8306/api/app/{id}/releaseNotes/{versionNumber}". further documentation can be found on the Swagger page.  
3. The main page shows a list of the existing Apps. There is a button that leads to a form that allows the user to add a new App. By clicking on the existing App card, you'll enter a specific App page.
4. The specific App page shows all the releases notes that have been added to this app. published and not published. By clicking on the release notes card body, you'll trigger the card edit mode. Only by clicking the 'PUBLISH' button, you'll be able to update the release note details. There is another button that leads to a form that allows the user to add new release notes for the App.
5. I've been using two main entities on the server and the UI: 1) App 2) ReleaseNotes
6. Tech-Stack/Important libraries: 
    * Server: Node(Ofc :D ), TypeScript, Nest.js,TypeOrm, Postgres,
    * UI: React, TypeScript, Redux, redux-saga, react-router, axios, styled-components

7. I've been using Node@12.3.1, but I believe that it should work with no problem on any Node@10.X runtime.