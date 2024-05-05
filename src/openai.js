

const { Configuration, OpenAIApi } = require('openai');
//have to remove apiKey to upload to the github
const configuration = new Configuration({ apiKey: "<your_api_key_here>" });
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    try {
        console.log('Sending message to OpenAI:', message);

        const res = await openai.createCompletion({
            model: 'gpt-3.5-turbo-instruct',
            prompt: message,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });

        console.log('OpenAI response:', res.data);

        return res.data.choices[0].text;
    } catch (error) {
        console.error('Error sending message to OpenAI:', error);
        throw error;
    }
}
