Human Chain AI Safety Log API

It is made in Node JS, Express JS and it Uses MongoDB atlas for Database service.

Installation: 
1. Clone this Repository

    git clone https://github.com/mukundsoni07/HumanChainAISafetyLogApi.git

    cd your_project
   
    cd backend

3. Install dependencies

    npm install

4. Database Setup

    i. Create MongoDB Atlas Account
    ii. Create a project
    iii. Create a cluster
    iv. Add a new Database user 
    v. Allow Network access
    vi. Get your Connection URI

5. Setup Environment variables

Create a .env file in the root of the project with the following:
 
 PORT=8080
 
 MONGO_URI=your_database_url

Running the Project Locally

    npm run dev


API Endpoints:

1. Post incident: Http method: POST, Endpoint: http://localhost:8080/incidents/ 

Request Body: 
{
    "title":"your_incident_title",
    "description":"your_incident_description",
    "severity":"choose_from_Low_Medium_High"
}

Result from Postman:

{
    "message": "Incident logged successfully",
    "data": {
        "id": "680b4640d1ca592758bd68c8",
        "title": "test incident",
        "description": "test incident",
        "severity": "Medium",
        "createdAt": "2025-04-25T08:22:24.997Z"
    }
}

2. Get all incidents: Http method: GET, Endpoint:  http://localhost:8080/incidents/

Result from Postman: 

{
    "message": "OK",
    "data": [
        {
            "_id": "680a36e6cf04f2b4b43c16a5",
            "title": "test incident",
            "description": "test incident description",
            "severity": "Low",
            "createdAt": "2025-04-24T13:04:38.277Z",
            "updatedAt": "2025-04-24T13:04:38.277Z",
            "__v": 0
        },
        {
            "_id": "680a370bcf04f2b4b43c16a9",
            "title": "test incident",
            "description": "test incident description 4 dgfcx",
            "severity": "Medium",
            "createdAt": "2025-04-24T13:05:15.928Z",
            "updatedAt": "2025-04-24T13:05:15.928Z",
            "__v": 0
        }
    ]
}

3. Get incident by ID: Http method: GET, Endpoint: http://localhost:8080/incidents/<incident_id>

Result From Postman:

{
    "message": "Incident found",
    "data": {
        "id": "680a36e6cf04f2b4b43c16a5",
        "title": "test incident",
        "description": "test incident description",
        "severity": "Low",
        "createdAt": "2025-04-24T13:04:38.277Z"
    }
}

4. Delete incident by ID: Http method: DELETE, Endpoint: http://localhost:8080/incidents/<incident_id>

Result from Postman:

{
    "message": "Incident deleted successfully"
}
