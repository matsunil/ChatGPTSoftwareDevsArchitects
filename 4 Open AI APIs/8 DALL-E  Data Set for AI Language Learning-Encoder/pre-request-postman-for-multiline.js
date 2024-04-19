let uMessage = `ChatGPT, which stands for Chat Generative Pre-trained Transformer, is a large language model–based chatbot developed by OpenAI and launched on November 30, 2022, which enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language used. Successive prompts and replies, known as prompt engineering, are considered at each conversation stage as a context.[2]

ChatGPT is built upon either GPT-3.5 or GPT-4 —members of OpenAI's proprietary series of generative pre-trained transformer (GPT) models, based on the transformer architecture developed by Google[3]—and it is fine-tuned for conversational applications using a combination of supervised and reinforcement learning techniques.[4] ChatGPT was released as a freely available research preview, but due to its popularity, OpenAI now operates the service on a freemium model. It allows users on its free tier to access the GPT-3.5-based version. In contrast, the more advanced GPT-4 based version and priority access to newer features are provided to paid subscribers under the commercial name "ChatGPT Plus".

By January 2023, it had become what was then the fastest-growing consumer software application in history, gaining over 100 million users and contributing to OpenAI's valuation growing to US$29 billion.[5][6] Within months, Google, Baidu, and Meta accelerated the development of their competing products: Bard, Ernie Bot, and LLaMA.[7] Microsoft launched its Bing Chat based on OpenAI's GPT-4. Some observers expressed concern over the potential of ChatGPT to displace or atrophy human intelligence and its potential to enable plagiarism or fuel misinformation.[4][8]

`;


uMessage = uMessage.replace(/"/g, '\\"');
uMessage = uMessage.replace(/\n/g, '\\n');
uMessage = uMessage.replace(/\t/g, '\\t');


pm.variables.set('uMessage', uMessage);
