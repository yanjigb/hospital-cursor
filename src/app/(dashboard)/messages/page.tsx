"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Send } from "lucide-react";
import { cn } from "@/lib/utils";

// Dummy data for messages
const conversations = [
    {
        id: 1,
        name: "Brooklyn Simmons",
        avatar: "/avatars/01.png",
        lastMessage: "Thank you for the update",
        timestamp: "5 mins ago",
        unread: 2,
        messages: [
            {
                id: 1,
                content: "Hello Dr. Robert, how are you?",
                timestamp: "10:00 AM",
                sender: "patient",
            },
            {
                id: 2,
                content: "I'm doing well, thank you. How can I help you today?",
                timestamp: "10:05 AM",
                sender: "doctor",
            },
            {
                id: 3,
                content: "I wanted to ask about my recent test results",
                timestamp: "10:10 AM",
                sender: "patient",
            },
            {
                id: 4,
                content: "Your test results look good. Everything is normal.",
                timestamp: "10:15 AM",
                sender: "doctor",
            },
            {
                id: 5,
                content: "Thank you for the update",
                timestamp: "10:20 AM",
                sender: "patient",
            },
        ],
    },
    {
        id: 2,
        name: "Courtney Henry",
        avatar: "/avatars/02.png",
        lastMessage: "When is my next appointment?",
        timestamp: "2 hours ago",
        unread: 0,
        messages: [
            {
                id: 1,
                content: "When is my next appointment?",
                timestamp: "9:00 AM",
                sender: "patient",
            },
        ],
    },
    {
        id: 3,
        name: "Sarah Miller Olivia",
        avatar: "/avatars/03.png",
        lastMessage: "I'll see you tomorrow",
        timestamp: "1 day ago",
        unread: 0,
        messages: [
            {
                id: 1,
                content: "I'll see you tomorrow",
                timestamp: "Yesterday",
                sender: "patient",
            },
        ],
    },
];

export default function MessagesPage() {
    const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
    const [searchQuery, setSearchQuery] = useState("");
    const [newMessage, setNewMessage] = useState("");

    const filteredConversations = conversations.filter((conversation) =>
        conversation.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        // Here you would typically send the message to your backend
        console.log("Sending message:", newMessage);
        setNewMessage("");
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Messages</h1>
                <p className="text-muted-foreground">Communicate with your patients</p>
            </div>

            <div className="grid h-[calc(100vh-12rem)] grid-cols-1 gap-4 lg:grid-cols-[300px_1fr]">
                {/* Conversations List */}
                <Card className="flex flex-col lg:max-h-full">
                    <CardHeader className="space-y-4 p-4">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search conversations..."
                                className="pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-auto p-0">
                        <div className="space-y-2">
                            {filteredConversations.map((conversation) => (
                                <button
                                    key={conversation.id}
                                    onClick={() => setSelectedConversation(conversation)}
                                    className={cn(
                                        "flex w-full items-center gap-3 p-4 hover:bg-muted/50",
                                        selectedConversation.id === conversation.id && "bg-muted"
                                    )}
                                >
                                    <Avatar>
                                        <AvatarImage src={conversation.avatar} />
                                        <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 text-left">
                                        <div className="flex items-center justify-between">
                                            <p className="font-medium">{conversation.name}</p>
                                            <span className="text-xs text-muted-foreground">
                                                {conversation.timestamp}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground line-clamp-1">
                                            {conversation.lastMessage}
                                        </p>
                                    </div>
                                    {conversation.unread > 0 && (
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                                            {conversation.unread}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Chat Area */}
                <Card className="flex flex-col lg:max-h-full">
                    <CardHeader className="border-b p-4">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={selectedConversation.avatar} />
                                <AvatarFallback>
                                    {selectedConversation.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle>{selectedConversation.name}</CardTitle>
                                <p className="text-sm text-muted-foreground">Online</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col p-0">
                        {/* Messages */}
                        <div className="flex-1 space-y-4 overflow-auto p-4">
                            {selectedConversation.messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={cn(
                                        "flex gap-3",
                                        message.sender === "doctor" && "flex-row-reverse"
                                    )}
                                >
                                    <Avatar>
                                        <AvatarImage
                                            src={
                                                message.sender === "doctor"
                                                    ? "/avatars/doctor.png"
                                                    : selectedConversation.avatar
                                            }
                                        />
                                        <AvatarFallback>
                                            {message.sender === "doctor"
                                                ? "D"
                                                : selectedConversation.name.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div
                                        className={cn(
                                            "max-w-[75%] rounded-lg px-4 py-2",
                                            message.sender === "doctor"
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-muted"
                                        )}
                                    >
                                        <p className="break-words">{message.content}</p>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            {message.timestamp}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <form
                            onSubmit={handleSendMessage}
                            className="flex items-center gap-2 border-t p-4"
                        >
                            <Input
                                placeholder="Type a message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                className="flex-1"
                            />
                            <Button type="submit" size="icon">
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
} 
