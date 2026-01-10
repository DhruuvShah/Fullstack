import React from 'react'

const FolderStructure = () => {
  return (
      <div
          style={{
            padding: "20px",
            backgroundColor: "#fce4ec",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ color: "#c2185b", marginTop: 0, textAlign: "center" }}>
            Task 2: Folder Structure
          </h2>
          <pre
            style={{
              backgroundColor: "#1e293b",
              color: "#10b981",
              padding: "15px",
              borderRadius: "6px",
              overflow: "auto",
              fontSize: "12px",
              lineHeight: "1.6",
            }}
          >
            {`my-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   │   └── styles/
│   │       └── globals.css
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.js
│   │   │   ├── Header/
│   │   │   └── Footer/
│   │   └── features/
│   │       ├── UserProfile/
│   │       └── Dashboard/
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.module.css
│   │   │   └── index.js
│   │   ├── About/
│   │   └── Contact/
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useFetch.js
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── ThemeContext.js
│   ├── services/
│   │   ├── api.js
│   │   └── authService.js
│   ├── utils/
│   │   ├── helpers.js
│   │   └── constants.js
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md`}
          </pre>
        </div>
  )
}

export default FolderStructure