function(properties, context) {
    // Ensure input text exists
    var inputText = properties.text_input || ""; 

    // Convert text to uppercase
    var formattedText = inputText.toUpperCase();

    // Send the uppercase text back to Bubble
    context.publishState("formatted_text", formattedText);
}


