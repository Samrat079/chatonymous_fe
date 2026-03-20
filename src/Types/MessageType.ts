export type MessageType = {
    id?: string;
    conversationId: string;
    textContent: string;
    encryptedContent?: string;
    createdBy?: string;
    createdAt?: Date;
}