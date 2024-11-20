import pyttsx3
import os
from datetime import datetime

def text_to_speech(text, output_dir="generated_audio"):
    try:
        # Initialize the pyttsx3 engine
        engine = pyttsx3.init()

        # Configure voice properties (optional)
        engine.setProperty("rate", 150)  # Speed (default: 200)
        engine.setProperty("volume", 1.0)  # Volume (default: 1.0)

        # Create the output directory if it doesn't exist
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        # Generate the output file name
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        output_file = os.path.join(output_dir, f"speech_{timestamp}.mp3")

        # Convert text to speech and save to file
        engine.save_to_file(text, output_file)
        engine.runAndWait()

        print(f"Audio file generated: {output_file}")
        return output_file
    except Exception as e:
        print(f"Error: {e}")
        return None

# Example usage
if __name__ == "__main__":
    text = "Hello, this is a demonstration of text-to-speech using Python."
    output_path = text_to_speech(text)
    if output_path:
        print(f"Speech saved at: {output_path}")
