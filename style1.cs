body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
    margin: 0;
}

.game-container {
    text-align: center;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 20px;
    color: #333;
}

.choices {
    margin-bottom: 20px;
}

.choice {
    padding: 10px 20px;
    font-size: 18px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    transition: background-color 0.3s ease;
}

.choice:hover {
    background-color: #0056b3;
}

.results p {
    font-size: 18px;
    margin: 10px 0;
}

#result {
    font-weight: bold;
    color: #007bff;
}
