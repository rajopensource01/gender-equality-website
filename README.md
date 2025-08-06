# Gender Equality Website 🌟

A modern, interactive website dedicated to promoting gender equality, women's empowerment, and social justice. Built with Next.js 15, TypeScript, and AI-powered features.

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design**: Beautiful, mobile-first interface
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Accessible**: WCAG compliant components and navigation

### 🤖 AI-Powered Features
- **AI Chatbot**: Interactive gender equality assistant
- **Smart Responses**: Context-aware AI responses with fallback system
- **Multi-Model Support**: OpenAI GPT-4 and Google Gemini integration
- **Educational Content**: AI-generated quizzes and resources

### 📊 Interactive Sections
- **Hero Section**: Engaging landing with call-to-action
- **Statistics**: Real-time gender equality statistics
- **Timeline**: Historical milestones in gender equality
- **Resources**: Educational materials and links
- **Community**: Interactive community features
- **Quiz Section**: Educational quizzes about gender equality

### 🛠 Technical Features
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Shadcn/ui**: Beautiful, accessible components
- **ESLint**: Code quality and consistency
- **Environment Variables**: Secure API key management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajopensource01/gender-equality-website.git
   cd gender-equality-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   echo "OPENAI_API_KEY=your_openai_api_key_here" > .env.local
   echo "GOOGLE_API_KEY=your_google_api_key_here" >> .env.local
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# OpenAI API Key (for AI chatbot)
OPENAI_API_KEY=sk-your-openai-api-key-here

# Google API Key (for Gemini AI)
GOOGLE_API_KEY=your-google-api-key-here
```

### API Keys Setup

1. **OpenAI API Key**:
   - Visit [OpenAI Platform](https://platform.openai.com/)
   - Create an account and get your API key
   - Add it to `.env.local`

2. **Google API Key** (Optional):
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create an API key for Gemini
   - Add it to `.env.local`

## 📁 Project Structure

```
gender-equality-website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── gender-equality-ai/  # OpenAI AI endpoint
│   │   └── gemini-ai/          # Google Gemini endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/         # Page sections
│   └── ui/              # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
├── styles/              # Additional styles
└── package.json         # Dependencies and scripts
```

## 🎯 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Package Management
pnpm install      # Install dependencies
pnpm add <pkg>    # Add new dependency
pnpm remove <pkg> # Remove dependency
```

## 🌟 Key Features Explained

### AI Chatbot
The website features an intelligent chatbot that can:
- Answer questions about gender equality
- Provide educational content
- Suggest resources and actions
- Handle multiple conversation types

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions
- Fast loading times

### Accessibility
- Screen reader compatible
- Keyboard navigation
- High contrast support
- WCAG 2.1 compliant

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [OpenAI](https://openai.com/) and [Google AI](https://ai.google/) for AI capabilities

## 📞 Support

If you have any questions or need help:
- Open an [issue](https://github.com/yourusername/gender-equality-website/issues)
- Check our [documentation](docs/)
- Join our [community](community/)

---

**Made with ❤️ for gender equality and social justice** 