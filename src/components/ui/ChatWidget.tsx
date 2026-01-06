import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from './Button';
import { API_BASE_URL } from '../../config/api';

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: 'What do you want me to do?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleOptionClick = (option: string) => {
        let userMsg = option;


        switch (option) {
            case "View Products":
                userMsg = "Tell me about your products";
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case "Here to Apply":
                userMsg = "I want to apply for a job";
                // Assuming Careers is a page, we might need navigation. 
                // Since this is a widget, let's try to find the element or redirect if needed.
                // For now, simpler to just chat, but let's try to scroll if on home, or just chat.
                // If using react-router, we might need useNavigate, but keeping it simple for now.
                window.location.href = '/careers';
                return; // consistent with navigation
            case "About Us":
                userMsg = "Tell me about MRC Agro";
                document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                window.location.href = '/about-us'; // Ensure we go there
                return;
            case "Temi Tea":
                userMsg = "Tell me about Temi Tea";
                break;
        }

        handleMessageSend(userMsg);
    };

    const handleMessageSend = async (text: string) => {
        setMessages(prev => [...prev, { role: 'user', content: text }]);
        setIsLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    history: messages.filter(m => m.role !== 'system').map(m => ({ role: m.role, content: m.content }))
                }),
            });

            const data = await response.json();

            if (data.success) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting. Please try again." }]);
            }
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Connection error. Please check your internet." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        const text = input.trim();
        setInput('');
        handleMessageSend(text);
    };

    const quickOptions = ["View Products", "Here to Apply", "About Us", "Temi Tea"];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="pointer-events-auto bg-white rounded-2xl shadow-2xl w-[90vw] sm:w-[380px] h-[550px] mb-4 border border-gray-100 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-brand-900 p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/10 p-2 rounded-full">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">MRC Agro AI</h3>
                                    <span className="text-xs text-brand-200 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`
                                            max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed
                                            ${msg.role === 'user'
                                                ? 'bg-brand-600 text-white rounded-tr-none'
                                                : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-none'
                                            }
                                        `}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}

                            {/* Quick Options - Show only if the last message is from assistant and it's the welcome message (or just show at bottom of chat if appropriate) */}
                            {/* Simplified logic: Show chips if message count is 1 (only welcome message) */}
                            {messages.length === 1 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {quickOptions.map(option => (
                                        <button
                                            key={option}
                                            onClick={() => handleOptionClick(option)}
                                            className="px-3 py-1.5 bg-brand-50 text-brand-700 text-sm rounded-full border border-brand-100 hover:bg-brand-100 transition-colors"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                                        <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-gray-400 text-sm"
                            />
                            <Button
                                type="submit"
                                size="sm"
                                disabled={isLoading || !input.trim()}
                                className="px-3"
                            >
                                <Send size={18} />
                            </Button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="pointer-events-auto bg-brand-600 text-white p-4 rounded-full shadow-lg hover:shadow-brand-500/30 transition-shadow"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </div>
    );
};
