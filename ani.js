<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback System</title>
    <style>
        /* Add your custom styles here */
        body {
            font-family: Arial, sans-serif;
        }

        #feedback-container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        button {
            padding: 10px;
            margin-top: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<div id="feedback-container">
    <h2>Feedback System</h2>
    <form id="feedback-form">
        <label for="feedback">Your Feedback:</label>
        <textarea id="feedback" rows="4" cols="50" required></textarea>

        <button type="submit">Submit Feedback</button>
    </form>

    <div id="thank-you-message" style="display: none;">
        <p>Thank you for your feedback!</p>
    </div>
</div>

<script>
    // Assuming you have an API endpoint to handle feedback submissions
    const feedbackApiEndpoint = 'https://example.com/api/feedback';

    document.getElementById('feedback-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const feedbackTextarea = document.getElementById('feedback');
        const feedback = feedbackTextarea.value;

        // Validate if feedback is not empty
        if (feedback.trim() === '') {
            alert('Please provide your feedback before submitting.');
            return;
        }

        // You can use fetch or axios to make a POST request to your feedback API endpoint
        // Here, I'm using fetch as an example
        fetch(feedbackApiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback }),
        })
        .then(response => response.json())
        .then(data => {
            // Hide the feedback form and display a thank you message
            document.getElementById('feedback-container').style.display = 'none';
            document.getElementById('thank-you-message').style.display = 'block';
        })
        .catch(error => {
            console.error('Error submitting feedback:', error);
            alert('An error occurred while submitting feedback. Please try again later.');
        });
    });
</script>

</body>
</html>
