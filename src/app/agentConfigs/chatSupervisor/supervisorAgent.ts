import { RealtimeItem, tool } from '@openai/agents/realtime';


import {
  exampleAccountInfo,
  examplePolicyDocs,
  exampleStoreLocations,
  dentalPrices,
} from './sampleData';

export const supervisorAgentInstructions = `You are an experienced dental office manager at Smile Dentist Clinic, tasked with providing expert guidance to the receptionist who is speaking with patients. You have access to patient records, pricing information, appointment scheduling, and clinic policies. You should create professional, empathetic responses that the receptionist can read directly.

# Instructions
- You can provide an answer directly, or call a tool first and then answer the question
- If you need to call a tool, but don't have the right information, you can tell the receptionist to ask for that information in your message
- Your message will be read verbatim by the receptionist, so speak as if directly to the patient
  
==== Domain-Specific Agent Instructions ====
You are a knowledgeable dental office manager at Smile Dentist Clinic, helping patients with their dental care needs while maintaining professional healthcare standards.

# Instructions
- Always greet new patients warmly with "Hello! Thank you for calling Smile Dentist Clinic, how may I help you today?"
- Always call a tool before answering factual questions about procedures, pricing, insurance, or patient accounts. Only use retrieved context and never rely on your own knowledge for these questions.
- For dental emergencies, prioritize patient comfort and offer same-day appointments when possible.
- Be empathetic to dental anxiety and offer reassurance about modern pain management techniques.
- Do not provide medical diagnoses or treatment recommendations - only licensed dentists can do that.
- Rely on sample phrases whenever appropriate, but vary them to sound natural and caring.
- Always follow the provided output format for new messages, including citations for any factual statements from retrieved documents.

# Response Instructions
- Maintain a professional and concise tone in all responses.
- Respond appropriately given the above guidelines.
- The message is for a voice conversation, so be very concise, use prose, and never create bulleted lists. Prioritize brevity and clarity over completeness.
    - Even if you have access to more information, only mention a couple of the most important items and summarize the rest at a high level.
- Do not speculate or make assumptions about capabilities or information. If a request cannot be fulfilled with available tools or information, politely refuse and offer to escalate to a human representative.
- If you do not have all required information to call a tool, you MUST ask the user for the missing information in your message. NEVER attempt to call a tool with missing, empty, placeholder, or default values (such as "", "REQUIRED", "null", or similar). Only call a tool when you have all required parameters provided by the user.
- Do not offer or attempt to fulfill requests for capabilities or services not explicitly supported by your tools or provided information.
- Only offer to provide more information if you know there is more information available to provide, based on the tools and context you have.
- When possible, please provide specific numbers or dollar amounts to substantiate your answer.

# Sample Phrases
## Handling Medical Questions
- "I understand your concern, but only our dentists can provide medical advice. Would you like to schedule an appointment for a consultation?"
- "That's a great question for our doctors. Let me help you schedule an examination where they can properly assess your situation."

## If you do not have a tool or information to fulfill a request
- "I'll need to have our office manager help you with that. Can I take your contact information and have them call you back?"
- "Let me connect you with someone who can better assist with that specific request. May I schedule a consultation for you?"

## Before calling a tool
- "Let me pull up your patient records for you."
- "Let me check our appointment availability."
- "I'll look up that information in our system."

## If required information is missing for a tool call
- "To access your patient records, could you please provide your phone number?"
- "I'll need your zip code to find the closest clinic location for you."
- "Could you tell me which procedure you're asking about so I can provide accurate pricing?"

# User Message Format
- Always include your final response to the user.
- When providing factual information from retrieved context, always include citations immediately after the relevant statement(s). Use the following citation format:
    - For a single source: [NAME](ID)
    - For multiple sources: [NAME](ID), [NAME](ID)
- Only provide information about this company, its policies, its products, or the customer's account, and only if it is based on information provided in context. Do not answer questions outside this scope.

# Example (tool call)
- User: Do you accept Delta Dental insurance?
- Supervisor Assistant: lookup_policy_document(topic="insurance coverage")
- lookup_policy_document(): [
  {
    id: "POL-010",
    name: "Insurance Coverage Policy",
    topic: "insurance benefits coverage",
    content:
      "We accept most major dental insurance plans including Delta Dental, Cigna, MetLife, and Aetna. Preventive care (cleanings, exams, x-rays) is typically covered at 100%. Basic procedures (fillings, extractions) are covered at 80%. Major procedures (crowns, bridges, implants) are covered at 50%. Coverage varies by plan. We'll verify your benefits before treatment.",
  },
];
- Supervisor Assistant:
# Message
Yes, we accept Delta Dental! They typically cover 100% of preventive care like cleanings and exams, 80% of basic procedures like fillings, and 50% of major work like crowns [Insurance Coverage Policy](POL-010). Would you like me to verify your specific benefits?

# Example (Dental Emergency)
- User: I have severe tooth pain, can I come in today?
- Supervisor Assistant:
# Message
I'm so sorry you're in pain. We do have same-day emergency appointments available. Our emergency exam fee is $150, which would be credited toward any necessary treatment. Can you come in this afternoon, or would you prefer a morning appointment?
`;

export const supervisorAgentTools = [
  {
    type: "function",
    name: "lookupPolicyDocument",
    description:
      "Tool to look up dental clinic policies, insurance information, and procedures by topic.",
    parameters: {
      type: "object",
      properties: {
        topic: {
          type: "string",
          description:
            "The topic or keyword to search for in clinic policies or dental procedures (e.g., 'insurance', 'emergency', 'payment plans', 'new patient').",
        },
      },
      required: ["topic"],
      additionalProperties: false,
    },
  },
  {
    type: "function",
    name: "getPatientAccountInfo",
    description:
      "Tool to get patient records, appointment history, treatment plans, and billing information.",
    parameters: {
      type: "object",
      properties: {
        phone_number: {
          type: "string",
          description:
            "Patient's phone number formatted as '(xxx) xxx-xxxx'. MUST be provided by the patient, never a null or empty string.",
        },
      },
      required: ["phone_number"],
      additionalProperties: false,
    },
  },
  {
    type: "function",
    name: "findNearestClinic",
    description:
      "Tool to find the nearest Smile Dentist Clinic location to a patient, given their zip code.",
    parameters: {
      type: "object",
      properties: {
        zip_code: {
          type: "string",
          description: "The patient's 5-digit zip code.",
        },
      },
      required: ["zip_code"],
      additionalProperties: false,
    },
  },
  {
    type: "function",
    name: "getProcedurePricing",
    description:
      "Tool to get pricing information for dental procedures.",
    parameters: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "The category of dental procedure: 'preventive', 'restorative', 'cosmetic', or 'surgical'.",
        },
      },
      required: ["category"],
      additionalProperties: false,
    },
  },
];

async function fetchResponsesMessage(body: any) {
  const response = await fetch('/api/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // Preserve the previous behaviour of forcing sequential tool calls.
    body: JSON.stringify({ ...body, parallel_tool_calls: false }),
  });

  if (!response.ok) {
    console.warn('Server returned an error:', response);
    return { error: 'Something went wrong.' };
  }

  const completion = await response.json();
  return completion;
}

function getToolResponse(fName: string, args?: any) {
  switch (fName) {
    case "getPatientAccountInfo":
      return exampleAccountInfo;
    case "lookupPolicyDocument":
      return examplePolicyDocs;
    case "findNearestClinic":
      return exampleStoreLocations;
    case "getProcedurePricing":
      const category = args?.category || 'preventive';
      return dentalPrices[category as keyof typeof dentalPrices] || dentalPrices.preventive;
    default:
      return { result: true };
  }
}

/**
 * Iteratively handles function calls returned by the Responses API until the
 * supervisor produces a final textual answer. Returns that answer as a string.
 */
async function handleToolCalls(
  body: any,
  response: any,
  addBreadcrumb?: (title: string, data?: any) => void,
) {
  let currentResponse = response;

  while (true) {
    if (currentResponse?.error) {
      return { error: 'Something went wrong.' } as any;
    }

    const outputItems: any[] = currentResponse.output ?? [];

    // Gather all function calls in the output.
    const functionCalls = outputItems.filter((item) => item.type === 'function_call');

    if (functionCalls.length === 0) {
      // No more function calls – build and return the assistant's final message.
      const assistantMessages = outputItems.filter((item) => item.type === 'message');

      const finalText = assistantMessages
        .map((msg: any) => {
          const contentArr = msg.content ?? [];
          return contentArr
            .filter((c: any) => c.type === 'output_text')
            .map((c: any) => c.text)
            .join('');
        })
        .join('\n');

      return finalText;
    }

    // For each function call returned by the supervisor model, execute it locally and append its
    // output to the request body as a `function_call_output` item.
    for (const toolCall of functionCalls) {
      const fName = toolCall.name;
      const args = JSON.parse(toolCall.arguments || '{}');
      const toolRes = getToolResponse(fName, args);

      // Since we're using a local function, we don't need to add our own breadcrumbs
      if (addBreadcrumb) {
        addBreadcrumb(`[supervisorAgent] function call: ${fName}`, args);
      }
      if (addBreadcrumb) {
        addBreadcrumb(`[supervisorAgent] function call result: ${fName}`, toolRes);
      }

      // Add function call and result to the request body to send back to realtime
      body.input.push(
        {
          type: 'function_call',
          call_id: toolCall.call_id,
          name: toolCall.name,
          arguments: toolCall.arguments,
        },
        {
          type: 'function_call_output',
          call_id: toolCall.call_id,
          output: JSON.stringify(toolRes),
        },
      );
    }

    // Make the follow-up request including the tool outputs.
    currentResponse = await fetchResponsesMessage(body);
  }
}

export const getNextResponseFromSupervisor = tool({
  name: 'getNextResponseFromSupervisor',
  description:
    'Determines the next response whenever the agent faces a non-trivial decision, produced by a highly intelligent supervisor agent. Returns a message describing what to do next.',
  parameters: {
    type: 'object',
    properties: {
      relevantContextFromLastUserMessage: {
        type: 'string',
        description:
          'Key information from the user described in their most recent message. This is critical to provide as the supervisor agent with full context as the last message might not be available. Okay to omit if the user message didn\'t add any new information.',
      },
    },
    required: ['relevantContextFromLastUserMessage'],
    additionalProperties: false,
  },
  execute: async (input, details) => {
    const { relevantContextFromLastUserMessage } = input as {
      relevantContextFromLastUserMessage: string;
    };

    const addBreadcrumb = (details?.context as any)?.addTranscriptBreadcrumb as
      | ((title: string, data?: any) => void)
      | undefined;

    const history: RealtimeItem[] = (details?.context as any)?.history ?? [];
    const filteredLogs = history.filter((log) => log.type === 'message');

    const body: any = {
      model: 'gpt-4.1',
      input: [
        {
          type: 'message',
          role: 'system',
          content: supervisorAgentInstructions,
        },
        {
          type: 'message',
          role: 'user',
          content: `==== Conversation History ====
          ${JSON.stringify(filteredLogs, null, 2)}
          
          ==== Relevant Context From Last User Message ===
          ${relevantContextFromLastUserMessage}
          `,
        },
      ],
      tools: supervisorAgentTools,
    };

    const response = await fetchResponsesMessage(body);
    if (response.error) {
      return { error: 'Something went wrong.' };
    }

    const finalText = await handleToolCalls(body, response, addBreadcrumb);
    if ((finalText as any)?.error) {
      return { error: 'Something went wrong.' };
    }

    return { nextResponse: finalText as string };
  },
});
  