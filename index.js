// 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

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-heoVVmXNssFcmS0qtxCLkwTa",
    apiKey: `${process.env.CHAT_APP_KEY}`,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();