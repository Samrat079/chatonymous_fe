export type MessageType = {
    id?: string;
    conversationId: string;
    textContent: string;
    createdBy: string;
    createdAt?: Date;
}