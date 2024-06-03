```markdown
# Blood Link

## Overview
Blood Link is a platform designed to connect blood donors with blood organizations efficiently. Donors can easily locate nearby organizations to donate blood, while organizations can manage donor responses and set their blood availability through a dedicated dashboard. This project is currently in development and utilizes the MERN (MongoDB, Express.js, React, Node.js) stack.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
### Donor
- **Locate Nearby Organizations**: Find and connect with nearby blood donation organizations.
- **Donate Blood**: Sign up and register to donate blood to selected organizations.

### Organization
- **Dashboard Management**: Access a comprehensive dashboard to manage donor responses and track interactions.
- **Set Blood Availability**: Update and display the current blood availability status.

### In Development
- Additional features and improvements are being actively developed.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Version Control**: Git, GitHub

## Installation
To set up the project locally, follow these steps:

1. **Clone the Repository**
    ```sh
    git clone https://github.com/your-username/blood-link.git
    cd blood-link
    ```

2. **Install Dependencies**
    ```sh
    # For backend
    cd backend
    npm install

    # For frontend
    cd ../frontend
    npm install
    ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the `backend` directory and add the necessary environment variables (e.g., database connection strings, API keys).

4. **Run the Application**
    ```sh
    # Start backend server
    cd backend
    npm start

    # Start frontend development server
    cd ../frontend
    npm start
    ```

## Usage
1. **Frontend**: Open `http://localhost:5173` in your browser to view the donor interface.
2. **Backend**: The backend server will run on `http://localhost:5000`.

## Contributing
Contributions are welcome! To contribute, please follow these steps:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
